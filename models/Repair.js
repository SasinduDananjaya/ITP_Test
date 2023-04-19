import mongoose from 'mongoose'
import validator from "validator";

const RepairSchema = new mongoose.Schema({
    
    customerName:{ 
        type: String, 
        required:[true, 'Please provide customer name'],     
        maxlength:20,    
    },

    repairDate:{ 
        type: Date, 
        required:[true, 'Please provide date'],             
    },

    returnDate:{ 
        type: Date, 
        required:[true, 'Please provide return date'],             
    },

    email:{ 
        type: String, 
        required:[true, 'Please provide email'], 
        validate:{
            validator:validator.isEmail,
            message:'Please provide a valid email',
        },

        unique: false,
    },

    contactNumber:{ 
        type: String, 
        required:[true, 'Please provide contact number'], 
        maxlength:10,    
                
    },

    warrantyId:{
        type: String,
        //ref:'',                      ///////////////////refer to maliths warranty IDs
        required:[true, 'Please provide warranty ID'],
        maxlength:30,
    },

    repairStatus:{
        type: String,
        enum:['Processing', 'Finished'],
        default:'Processing',
    },

    repairCost:{
        type: String,
        required:[true, 'Please provide repair cost'],
        maxlength:20,
    },

    issueDescription:{
        type: String,
        required:[true, 'Please provide description about issue'],
        maxlength:30,
    },

    createdBy:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        required:[true, 'Please provide user'],
    },

    //date
    //return date
    //email
    //cont number
    //warranty id
    //repair status
    //repair cost
    //description about issue
},
    {timestamps: true}
)

export default mongoose.model('Repair', RepairSchema)