import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title:'Joshua 1:9',
    text:'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.'
  },
  {
    title:'Isaiah 41:10',
    text:'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand'
  },
  {
    title:'Psalm 73:26',
    text:'My flesh and my heart may fail, but God is the strength of my heart and my portion forever.'
  }
]

const Features = () => {
  return (
    <div className='my__features section__padding' id="features">
      <div className='my__features-heading'>
        <h1 className='gradient__text'>Nehemiah said, “… Do not grieve, for the joy of the Lord is your strength.”</h1>
        <p>I can do all this through him who gives me strength</p>
      </div>
      <div className='my__features-container'>
        {featuresData.map((item, index) => (
            <Feature  title={item.title} text={item.text} key={item.title + index} />
        ))}
         
      </div>
    </div>
  )
}

export default Features