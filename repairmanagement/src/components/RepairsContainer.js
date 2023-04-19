import React from 'react'
import { useAppContext } from '../context/appContext'
import { useEffect } from 'react'
import Loading from './Loading.js'
import Repair from './Repair.js'
import Wrapper from '../assets/wrappers/JobsContainer'

const RepairsContainer = () => {

  const {getRepairs, repairs, isLoading, page, totalRepairs}  = useAppContext()

  useEffect(()=>{
        getRepairs()
  }, [])

  if(isLoading){
    return <Loading center/>
  }

  if(repairs.length === 0){
    return(
        <Wrapper>
            <h2>No Repairs to Display...</h2>
        </Wrapper>
    ) 
  }

  return (
    <Wrapper>
      <h5>
        {totalRepairs} repair{repairs.length > 1 && 's'} found
      </h5>

      <div className="jobs">
        {repairs.map((repair)=>{
            return <Repair key={repair._id}{...repair}/>
        })}
      </div>
    </Wrapper>
  )
}

export default RepairsContainer
