import React, { Component } from 'react'
import items from './data'
const RoomContext = React.createContext()

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  }

  componentDidMount() {
    let rooms = this.formatData(items)
    let featuredRooms = rooms.filter(room => room.featured === true)
    let maxPrice = Math.max(...rooms.map(room => room.price))
    let maxSize = Math.max(...rooms.map(room => room.size))
    let minPrice = Math.min(...rooms.map(room => room.price))
    let minSize = Math.min(...rooms.map(room => room.size))

    this.setState({
      rooms: rooms,
      featuredRooms: featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice: maxPrice,
      maxSize: maxSize,
      minPrice,
      minSize
    })
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id
      let images = item.fields.images.map(image =>
        image.fields.file.url)

      let room = { ...item.fields, images: images, id: id }
      return room
    })
    return tempItems
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms]
    const room = tempRooms.find(room => room.slug === slug)
    return room
  }

  handleChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = event.target.name
    this.setState({
      [name]: value
    }, this.filterRooms)
  }

  filterRooms = () => {
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state

    //filter rooms by types
    let tempRooms = [...rooms]
    if (type !== 'all') tempRooms = tempRooms.filter(room => room.type === type)

    //filter rooms by capacity
    capacity = parseInt(capacity)
    if (capacity !== 1) tempRooms = tempRooms.filter(room => room.capacity >= capacity)

    //filter rooms by prices
    price = parseInt(price)
    tempRooms = tempRooms.filter(room => room.price <= price)

    //filter rooms by sizes
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

    //filter rooms by breakfast
    if (breakfast) tempRooms = tempRooms.filter(room => room.breakfast === true)

    //filter rooms by pets
    if (pets) tempRooms = tempRooms.filter(room => room.pets === true)
    this.setState({
      sortedRooms: tempRooms
    })
  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
        {this.props.children}
      </RoomContext.Provider>

    )
  }
}

const RoomConsumer = RoomContext.Consumer

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return <RoomConsumer>
      {value => <Component {...props} context={value} />}
    </RoomConsumer>
  }
}
export { RoomProvider, RoomConsumer, RoomContext }