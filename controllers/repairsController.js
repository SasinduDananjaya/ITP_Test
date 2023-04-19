import Repair from "../models/Repair.js"
import { StatusCodes } from "http-status-codes"
import {BadRequestError, UnAuthenticatedError} from '../errors/index.js'

const createRepair = async (req, res) => {
    //res.send('createRepair')
    const {customerName,repairDate, returnDate, email, contactNumber, warrantyId, repairStatus, repairCost, issueDescription} = req.body
    
    if(!customerName || !repairDate || !returnDate || !email || !contactNumber || !warrantyId || !repairStatus || !repairCost || !issueDescription){
        throw new BadRequestError('Please provide all values')
    }
    req.body.createdBy = req.user.userId
    const repair = await Repair.create(req.body)
    res.status(StatusCodes.CREATED).json({repair})
}

const getAllRepairs = async (req, res) => {
    //res.send('getAllRepairs')
    const repairs = await Repair.find({createdBy:req.user.userId})
    res.status(StatusCodes.OK).json({repairs, totalRepairs:repairs.length, numOfPages: 1})
}

const updateRepair = async (req, res) => {
    res.send('update Repair')
}

const deleteRepair = async (req, res) => {
    res.send('delete Repair')
}

const showStats = async (req, res) => {
    res.send('show stats')
}

export { createRepair, deleteRepair, getAllRepairs, updateRepair, showStats }








