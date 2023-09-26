import React from 'react'

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className = 'welcome'>
        <p>
        Welcome to  OTR family, home far away from home.
        We love to have you as part of our family, and may you 
        be blessed as you join and interact with this great family.
        </p>
        <button class = 'aboutOtr'>About OTR</button>
      </div>
      <div className = 'ourservices'>
        <p>
        Rich music and music, Bible studies (BS), Podcasts, Sermons, Round Table Talks (RTT),
        family and relationships, e.t.c, OTR has services that will uplift your soul from a world
        of care to heavenly atmosphere. You will be blessed, and be glad to be part of this family.
        </p>
        <button class = 'services'>Our Services</button>
      </div>
      <div className = 'family'>
        <p>
        Always joyful, full of humour, playful, yet also committed to the service of God, this family
        will put a smile on any face, and bring joy and gladness to every heart. Our numerous social events
        are always an occassion and as you are entertained by these events, we want you to feel and be part of us. 
        </p>
        <button class ='thefamily'>Meet the family</button>
      </div>
    </div>
  )
}

export default HomePage