import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import Cards from '../Components/Cards'

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <CarouselBox />
        </div>
        <div className="row">
          <Cards />
        </div>
      </div>
    )
  }
}

export default Home
