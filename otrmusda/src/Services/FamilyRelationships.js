import React from 'react'
import Services from './Services'
import { useNavigate } from 'react-router-dom'

function FamilyRelationships() {
  const navigate = useNavigate
  return (
    <Services>
      {
        <div>
          <p>
        FamilyRelationships
        </p>
        <button>Services</button>
        </div>
      
        }
      </Services>
  )
}

export default FamilyRelationships