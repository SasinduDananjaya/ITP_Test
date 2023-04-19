import { IoBarChartSharp } from 'react-icons/io5'       //Dashboard
import { BsFillPersonFill } from 'react-icons/bs'   //Cus
import { FiUsers } from 'react-icons/fi'            //Emp
import { MdPayment } from 'react-icons/md'          //Payment
import { FaChartLine } from 'react-icons/fa'        //Finance
import { VscPerson } from 'react-icons/vsc'         //Supplier
import { GiAutoRepair } from 'react-icons/gi'       //repair
import { TbTruckDelivery } from 'react-icons/tb'    //Delivery
import { FiCodesandbox } from 'react-icons/fi'    //Item
import { ImProfile } from 'react-icons/im'         //Profile

const links = [
    {id:1, text:'DASHBOARD', path:'/', icon:<IoBarChartSharp/>},
    //{id:2, text:'CUSTOMER MANAGEMENT', path:'', icon:<BsFillPersonFill/>},
   // {id:3, text:'EMPLOYEE MANAGEMENT', path:'', icon:<FiUsers/>},
    //{id:4, text:'PAYMENT MANAGEMENT', path:'', icon:<MdPayment/>},
   // {id:5, text:'FINANCE MANAGEMENT', path:'', icon:<FaChartLine/>},
   // {id:6, text:'SUPPLIER MANAGEMENT', path:'', icon:<VscPerson/>},
    {id:7, text:'REPAIR MANAGEMENT', path:'all-repairs', icon:<GiAutoRepair/>},
   // {id:8, text:'DELIVERY MANAGEMENT', path:'', icon:<TbTruckDelivery/>},
   // {id:9, text:'ITEM MANAGEMENT', path:'', icon:<FiCodesandbox/>},
    {id:10, text:'PROFILE', path:'profile', icon:<ImProfile/>}
]

export default links
    