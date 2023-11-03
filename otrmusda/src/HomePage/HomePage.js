import React from 'react'
import waterfallMoment from '../Photos/waterfall_moment.jpg';
import SifaZako from '../Photos/sifa_zako.mp4'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  function handleServicesClick(){
    navigate('services');
  }
  return (
    <div className='homepage'>
      <div className = 'aboutOTR'>
        <h4>NICE TO MEET YOU</h4>
        <p>
        Welcome to  OTR family,
        We love to have you as part of us,
        and may you be blessed as you join this
        great family.
        </p>
        <button class = 'aboutOtrBtn'>About OTR</button>
      </div>
      <div className='ourServices'>
        <h4>WHAT WE DO</h4>
        <div className='introvideo'>
          <video  controls autoPlay muted>
            <source src = {SifaZako} type='video/mp4'/>
          </video>
        </div>
        <p>
          Round Table Talks (RTT), Family and Relationships, Live Podcasts,
          Rich Gospel music, Bible Studies and many more; our services are
          meant to lift your soul from a world of care to an atmosphere of peace,
          comfort and love.
        </p>
        <button class = 'services' onClick={handleServicesClick}>Our Services</button>
      </div>
      <div className='theFamily'>
        <div className='watermoment'>
          <h4 className='meetthefamily'>MEET THE FAMILY</h4>
          <img src={waterfallMoment} alt='Waterfall Moment'></img>
        </div>
        <p>
          Jovial, humorous, and a happy family;
          you will not want to be separated from them.
          Our fun moments bond us together, and they will never fail
          to put a smile on your face.
        </p>
        <button class ='thefamily'>Meet the family</button>
      </div>
    </div>
  )
}

export default HomePage