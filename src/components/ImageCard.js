'use client'
import React from 'react'

const ImageCard = ({image,Card}) => {
  return (
    <div>
      <img src={image} alt="Card-IMAGE" />
      <div className="flex flex-row">
        <img src={Card} alt="Card-Image1" />
        <img src={Card} alt="Card-Image2" />
        <img src={Card} alt="Card-Image3" />
      </div>
    </div>
  )
}

export default ImageCard
