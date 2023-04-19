import express from 'express';
const repairRouter = express.Router()

import { 
    createRepair, 
    deleteRepair, 
    getAllRepairs, 
    updateRepair, 
    showStats 
} from '../controllers/repairsController.js'


repairRouter.route('/').post(createRepair).get(getAllRepairs)    //Tiyena widiha

//remember about :id
//Ona widiha
//repairRouter.route('/add-repair').post(createRepair)
//repairRouter.route('/all-repairs').get(getAllRepairs)

//
repairRouter.route('/stats').get(showStats)
repairRouter.route('/:id').delete(deleteRepair).patch(updateRepair)

export default repairRouter

