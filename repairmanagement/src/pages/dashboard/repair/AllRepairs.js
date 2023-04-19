import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../../../assets/wrappers/DashboardFormPage.js'

import {RepairsContainer, SearchContainer} from '../../../components'

const AllRepairs = () => {
  return (
    <Wrapper>
      <h1>All Repairs</h1>
      
      <Link to={'/add-repair'}>
          <button type='button' className='goAddRepair-btn'>Add Repair</button>
      </Link>
      <SearchContainer/>
      
      <RepairsContainer/>
  
  
    </Wrapper>
  )
}



export default AllRepairs
