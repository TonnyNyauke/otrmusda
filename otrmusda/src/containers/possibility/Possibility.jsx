import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='my__possibility dection__padding' id="possibility">
      <div className='my__possibility-image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='my__possibility-content'>
        <h4>Request Early access to get started</h4>
        <h1 className='gradient__text'>welcome to our ministiries</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility