import React from 'react'

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className = 'aboutOTR'>
        <p>
        Welcome to  OTR family,
        We love to have you as part of our family.
        </p>
        <button class = 'aboutOtr'>About OTR</button>
      </div>
      <div className='ourServices'>
        <button class = 'services'>Our Services</button>
      </div>
      <div className='theFamily'>
      <button class ='thefamily'>Meet the family</button>
      </div>
    </div>
  )
}

export default HomePage