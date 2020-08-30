import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail className='services-icon' />,
        title: 'free cocktails',
        info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque sed quia illum modi suscipit ad, autem officiis optio aperiam vitae quibusdam omnis dolore velit sint voluptates. Unde harum consectetur nulla!'
      },
      {
        icon: <FaHiking className='services-icon' />,
        title: 'Endless Hiking',
        info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque sed quia illum modi suscipit ad, autem officiis optio aperiam vitae quibusdam omnis dolore velit sint voluptates. Unde harum consectetur nulla!'
      },
      {
        icon: <FaShuttleVan className='services-icon' />,
        title: 'free shuttle to sceneries',
        info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque sed quia illum modi suscipit ad, autem officiis optio aperiam vitae quibusdam omnis dolore velit sint voluptates. Unde harum consectetur nulla!'
      },
      {
        icon: <FaBeer className='services-icon' />,
        title: 'best beer in town',
        info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque sed quia illum modi suscipit ad, autem officiis optio aperiam vitae quibusdam omnis dolore velit sint voluptates. Unde harum consectetur nulla!'
      },
    ]
  }

  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return <article key={index} className='services'>
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          })}
        </div>
      </section>
    )
  }
}
