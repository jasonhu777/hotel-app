import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { withRoomConsumer } from '../context'
import Loading from '../components/Loading'

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />
  } return (
    <React.Fragment>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </React.Fragment>
  )
}

export default withRoomConsumer(RoomContainer)
// export default function RoomContainer() {
//   return (
//     <RoomConsumer >
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value

//         if (loading) {
//           return <Loading />
//         }
//         return (
//           <div>
//             RoomsContainer :D
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         )
//       }}
//     </RoomConsumer >
//   )
// }
