import React, { Component } from 'react'

class CatList extends Component {

  render() {
    return (
      <div>
      {this.props.catPics.map((image, index) => (
        <div key={index}>
        <img src={image.url} alt='catPic' />
          </div>
      ))}
      </div>
    )
  }
}

export default CatList
