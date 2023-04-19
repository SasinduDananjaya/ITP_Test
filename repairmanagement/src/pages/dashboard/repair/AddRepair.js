import React from 'react'
import {FormRow, Alert, FormRowSelect} from '../../../components/index.js'
import { useAppContext } from '../../../context/appContext.js'
import { Link } from 'react-router-dom'
import Wrapper from '../../../assets/wrappers/DashboardFormPage.js'

const AddRepair = () => {
  const {
    isLoading,
    isEditing,
    showAlert, 
    displayAlert ,
    customerName,
    repairDate, 
    returnDate, 
    email, 
    contactNumber, 
    warrantyId,
    repairStatusOptions,
    repairStatus,
    repairCost, 
    issueDescription,
    handleChange,
    clearValues,
    createRepair,
    editRepair


  } = useAppContext()


  const handleSubmit = (e) =>{
    e.preventDefault()

    if(!customerName || !repairDate || !returnDate || !email || !contactNumber || !warrantyId || !repairCost || !issueDescription){
      displayAlert()
      return
    }

    if(isEditing){
      editRepair()
      return
    }

    createRepair()
    //console.log('Create repair');
  }

  const handleRepairInput = (e) =>{
    const name = e.target.name
    const value = e.target.value
    handleChange({name, value})
  }

  return(
    <Wrapper>  
      
      <Link to={'/all-repairs'}>
        <button type='button' className='goBackAllRepair-btn'>Go Back</button>
      </Link>
      

      <br/><br/>

      <form className='form'>
        <h3>{isEditing ? 'edit repair' : 'add repair'}</h3>
        {showAlert && <Alert />}

        <div className="form-center">

          {/*Customer Name*/}
          <FormRow 
            type="text" 
            labelText='Customer Name'
            name="customerName" 
            value={customerName} 
            handleChange={handleRepairInput}
          />

          {/*Repair Date*/}
          <FormRow 
            type="date" 
            labelText='Repair Date'
            name="repairDate" 
            value={repairDate} 
            handleChange={handleRepairInput}
          />

          {/*Customer Name*/}
          <FormRow 
            type="date" 
            labelText='Return Date'
            name="returnDate" 
            value={returnDate} 
            handleChange={handleRepairInput}
          />

          {/*Customer Email*/}
          <FormRow 
            type="email" 
            name="email" 
            value={email} 
            handleChange={handleRepairInput}
          />

          {/*Customer Contact Number*/}
          <FormRow 
            type="text" 
            labelText='Contact Number'
            name="contactNumber" 
            value={contactNumber} 
            handleChange={handleRepairInput}
          />

          {/*warrantyId*/}
          <FormRow 
            type="text" 
            labelText="Warranty ID" 
            name="warrantyId" 
            value={warrantyId} 
            handleChange={handleRepairInput}
          />

          {/*repair Status*/}
          <FormRowSelect 
            name="repairStatus" 
            labelText='Repair Status'
            value={repairStatus} 
            handleChange={handleRepairInput}
            list={repairStatusOptions}
          />

          {/*repair Cost*/}
          <FormRow 
            type="text" 
            labelText='Repair Cost'
            name="repairCost" 
            value={repairCost} 
            handleChange={handleRepairInput}
          />

          {/*issueDescription*/}
          <FormRow 
            type="text" 
            labelText="Description of the Issue" 
            name="issueDescription" 
            value={issueDescription} 
            handleChange={handleRepairInput}
          />

          <div className="btn-container">

            {/*Submit btn*/}
            <button 
                type='submit' 
                className='btn btn-block submit-btn' 
                onClick={handleSubmit}
                disabled={isLoading}
                
                >submit
            </button>

            {/*Clear btn*/}
            <button type='submit' className='btn btn-block clear-btn' onClick={(e)=>{
                    e.preventDefault()
                    clearValues()
                }}
                >clear
            </button>


          </div>


        </div>
      </form>
      
    </Wrapper>
  ) 
        
}

export default AddRepair
