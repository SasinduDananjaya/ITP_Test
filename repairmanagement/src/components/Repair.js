import React from 'react'
import moment from 'moment'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/Job'
import RepairInfo from './RepairInfo'

const Repair = (
  {
    _id, 
    customerName, 
    //repairDate, 
    returnDate, 
    email, 
    contactNumber, 
    warrantyId, 
    repairStatus, 
    repairCost, 
    issueDescription, 
    createdAt
  }) => {

  const {setEditRepair, deleteRepair} = useAppContext()

  let date = moment(createdAt)
  date = date.format('MMM Do, YYYY')
 
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{customerName.charAt(0)}</div>
        <div className="info">
          <h5>{issueDescription}</h5>
          <p>{customerName} <br/>
             {returnDate} <br/>
             {email} <br/>
             {contactNumber} <br/>
             {warrantyId} <br/>
             {repairStatus} <br/>
             {repairCost} <br/>
          </p>
        </div>
      </header>

      <div className="content">

        <div className="content-center">
          <RepairInfo icon={<FaLocationArrow/>} text={customerName}/>
          <RepairInfo icon={<FaCalendarAlt/>} text={date}/>
          <RepairInfo icon={<FaBriefcase/>} text={contactNumber}/>

          <div className={`repairStatus ${repairStatus}`}>{repairStatus}</div>
        </div>

        <footer>
          <div className="actions">
            <Link to='/add-repair' className='btn edit-btn' onClick={()=> setEditRepair(_id)}>
              Edit
            </Link>
            <button type='button' className='btn delete-btn' onClick={()=> deleteRepair(_id)}>
              Delete
            </button>
          </div>
        </footer>
      </div>
      
    </Wrapper>
  )
}

export default Repair


