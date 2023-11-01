import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import log from '../../assets/log.jpg';
import background from '../../assets/lo.jpg'

const Header = () => {
  return (
    <div style={{backgroundImage: `url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className='my__header section__padding' id='home'>
      <div className='my__header-content'>
        <h1 className='gradient__text'>You are my strength, I watch for you; you, God, are my fortress, my God on whom I can rely."</h1>
        <p>“Sing to God, you kingdoms of the earth, sing praise to the Lord, to him who rides across the highest heavens, the ancient heavens, who thunders with mighty voice. Proclaim the power of God, whose majesty is over Israel, whose power is in the heavens. You, God, are awesome in your sanctuary; the God of Israel gives power and strength to his people.”</p>
        <div className='my__header-content__input'>
          <input type='email' placeholder='your email address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='my__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        </div>
        <div className='my__header-image'>
          <img src={log} alt='logo' />
        </div>
    
    </div>
  )
}

export default Header