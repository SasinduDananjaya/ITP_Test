import React, {useReducer, useContext} from 'react';

import reducer from './reducer.js';
import axios from 'axios';

import { 
    DISPLAY_ALERT, 
    CLEAR_ALERT, 
 /*   REGISTER_USER_BEGIN, 
    REGISTER_USER_SUCCESS, 
    REGISTER_USER_ERROR, 
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,*/
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_ERROR,
    TOGGLE_SIDEBAR,
    LOGOUT_USER,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    HANDLE_CHANGE,
    CLEAR_VALUES,
    CREATE_REPAIR_BEGIN,
    CREATE_REPAIR_SUCCESS,
    CREATE_REPAIR_ERROR,
    GET_REPAIRS_BEGIN,
    GET_REPAIRS_SUCCESS,
    SET_EDIT_REPAIR

} from './actions'

//import { useLocation } from 'react-router-dom'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')


const initialState={
    isLoading:false,
    showAlert:false,
    alertText:'',
    alertType:'',
    user: user? JSON.parse(user):null,
    token: token,
    userLocation: userLocation || '',
    jobLocation: userLocation || '',
    showSidebar:false,

    //Add Repair Form 
    isEditing: false,
    editRepairId:'',
    customerName:'',
    repairDate:'', 
    returnDate:'', 
    email:'', 
    contactNumber:'', 
    warrantyId:'',
    repairStatusOptions:['Processing', 'Finished'],
    repairStatus:'Processing',
    repairCost:'', 
    issueDescription:'',

    //Get Repairs
    repairs:[],
    totalRepairs:0,
    numOfPages:1,
    page:1,      //Begin from page no.1



}


const AppContext = React.createContext()


const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer,initialState)

    //axios
    const authFetch = axios.create({
        baseURL:'/api/v1',
    })

    //request
    authFetch.interceptors.request.use((config)=>{
        config.headers.common['Authorization'] = `Bearer ${state.token}`
        return config
    }, 
    (error)=>{
        return Promise.reject(error)
    })


    //response
    authFetch.interceptors.response.use((response)=>{
            
        return response
    }, 
    (error)=>{
        //console.log(error.response);
        if(error.response.status === 401){
            logoutUser()
        }
        return Promise.reject(error)
    })


    const displayAlert = () =>{
        dispatch({type:DISPLAY_ALERT})
        clearAlert()
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type:CLEAR_ALERT })
        }, 2000);
    }

    const addUserToLocalStorage = ({user, token, location})=>{
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        localStorage.setItem('location', location)
    }

    const removeUserFromLocalStorage =()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('location')
    }
/*
    const registerUser = async (currentUser) =>{
        dispatch({ type : REGISTER_USER_BEGIN })

        try {
            const response = await axios.post('/api/v1/auth/register',
            currentUser)
           // console.log(response);
            const {user, token, location} = response.data
            dispatch({
                type:REGISTER_USER_SUCCESS, 
                payload:{user, token, location}
            })
            //local storage later
            addUserToLocalStorage({ user, token, location })
        } catch (error) {
            //console.log(error.response);
            dispatch({
                type: REGISTER_USER_ERROR, 
                payload:{msg:error.response.data.msg}
            })
        }
        clearAlert()
    }


    const loginUser = async (currentUser) =>{
                dispatch({ type : LOGIN_USER_BEGIN })

        try {
            const { data } = await axios.post('/api/v1/auth/login',
            currentUser)
       
            const {user, token, location} = data
            dispatch({
                type:LOGIN_USER_SUCCESS, 
                payload:{user, token, location}
            })
            //local storage later
            addUserToLocalStorage({ user, token, location })
        } catch (error) {
            
            dispatch({
                type: LOGIN_USER_ERROR, 
                payload:{msg:error.response.data.msg}
            })
        }
        clearAlert()
    }
*/
    const setupUser = async ({currentUser, endPoint, alertText}) =>{
                dispatch({ type : SETUP_USER_BEGIN })

        try {
            const { data } = await axios.post(`/api/v1/auth/${endPoint}`, currentUser)
       
            const {user, token, location} = data
            dispatch({
                type:SETUP_USER_SUCCESS, 
                payload:{user, token, location, alertText}
            })
            //local storage later
            addUserToLocalStorage({ user, token, location })
        } catch (error) {
            
            dispatch({
                type: SETUP_USER_ERROR, 
                payload:{msg:error.response.data.msg},
            })
        }
        clearAlert()
    }

    const toggleSidebar = () =>{
        dispatch({type: TOGGLE_SIDEBAR})
    }

    const logoutUser = () =>{
        dispatch({type:LOGOUT_USER})
        removeUserFromLocalStorage()
    }

    //Update User
    const updateUser = async(currentUser) =>{
        dispatch({type: UPDATE_USER_BEGIN })
        try {
            const { data } = await authFetch.patch('/auth/updateUser', currentUser)

            const { user, location, token} = data
            dispatch({type: UPDATE_USER_SUCCESS, payload:{user, location, token}})
            addUserToLocalStorage({user, location, token})
            
        } catch (error) {

            if(error.response.status !== 401){
                
                dispatch({type:UPDATE_USER_ERROR, payload:{msg:error.response.data.msg},})
            }    
        }
        clearAlert()
    }


    const handleChange = ({ name, value }) =>{
        dispatch({
            type:HANDLE_CHANGE,
            payload:{ name, value },
        })
    }

    const clearValues=() => {
        dispatch({type: CLEAR_VALUES})
    }

    //Add Repair
    const createRepair = async () => {
        dispatch({type:CREATE_REPAIR_BEGIN})
        try {
            const {customerName,repairDate, returnDate, email, contactNumber, warrantyId, repairStatus, repairCost, issueDescription} = state
            await authFetch.post('/repairs', {
                customerName,
                repairDate, 
                returnDate, 
                email, 
                contactNumber, 
                warrantyId, 
                repairStatus, 
                repairCost, 
                issueDescription,
        
            })

            dispatch({type: CREATE_REPAIR_SUCCESS})   //Successfully Added
            dispatch({type: CLEAR_VALUES})    //Clear form after success
        } catch (error) {
            console.log(error);
            if(error.response.status === 401)
                return
            dispatch({type:CREATE_REPAIR_ERROR, payload:{msg:error.response.data.msg },})
        }

        clearAlert()
    }



    //Get Repairs
    const getRepairs = async () =>{
        let url = `/repairs`
        dispatch({type:GET_REPAIRS_BEGIN})

        try {
            const {data} = await authFetch.get(url);
            const {repairs, totalRepairs, numOfPages} = data
            dispatch({
                type:GET_REPAIRS_SUCCESS,
                payload:{
                    repairs,
                    totalRepairs,
                    numOfPages,
                },
            })
        } catch (error) {
            console.log(error.response);
           // logoutUser()
        }
        clearAlert()
    }


    //Edit Repair
    const setEditRepair = (id) =>{
        dispatch({type:SET_EDIT_REPAIR, payload:{ id }})
    }


    const editRepair =()=>{
        console.log('edit repair');
    }


    //Delete Repair
    const deleteRepair = (id) =>{
        console.log(`delete repair : ${id}`);
    }

    return (
    <AppContext.Provider 
        value={
        {   ...state, 
            displayAlert, /*registerUser, loginUser,*/
            setupUser,
            toggleSidebar, 
            logoutUser, 
            updateUser, 
            handleChange, 
            clearValues,
            createRepair,
            getRepairs,
            setEditRepair,
            deleteRepair,
            editRepair
        }
        }>
        {children}
    </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}

export {AppProvider,initialState, useAppContext}