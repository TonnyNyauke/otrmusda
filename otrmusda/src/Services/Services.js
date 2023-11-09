import React from 'react'
import {useNavigate, useRoutes } from 'react-router-dom'
import Music from './Music'
import BibleStudies from './BibleStudies'
import RoundTT from './RoundTT'
import Podcasts from './Podcasts'
import FamilyRelationships from './FamilyRelationships'

function Services({children}) {
  const navigateBtn = useNavigate();

  function handleClicks(path){
    navigateBtn('/services/' + path);
  }

  const element = useRoutes([
    {path: '/', element:<div className='servicesPage'>
    <button className='musicBtn' onClick={() => handleClicks('music')}>Music</button>
    <button className='bibleStudiesBtn' onClick={() => handleClicks('biblestudies')}>Bible Studies</button>
    <button className='rountTTBtn' onClick={() => handleClicks('roundtt')}>RTT</button>
    <button className='familyBtn' onClick={() => handleClicks('family')}>Family & Relationships</button>
    <button className='podcastsBtn' onClick={() => handleClicks('podcasts')}>Podcasts</button>
    {children}
    </div>},
    { path: 'music', element: <Music /> },
    { path: 'biblestudies', element: <BibleStudies /> },
    { path: 'roundtt', element: <RoundTT /> },
    { path: 'family', element: <FamilyRelationships /> },
    { path: 'podcasts', element: <Podcasts /> },
  ]);

  return element;
}

export default Services