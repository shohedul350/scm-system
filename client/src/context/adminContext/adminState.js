import React,{useReducer} from 'react'
import axios from 'axios'
import AdminContext from '../adminContext/adminContext'
import AdminReducer from '../adminContext/adminReducer'
import setToken from '../../utils/setAdminToken'
import {
    SUCCES_REGISTER,
    SUCCES_LOGIN,
    SET_MESSAHE,
    CLEAR_MESSAGE,
    LOG_OUT,
    SET_ADMIN,
    
} from '../type'

 const AdminState=(props)=> {

    const initialState={
        admin:{},
        adminAuth:true,
        message:null,
    }

    const [state,dispatch]=useReducer(AdminReducer,initialState)



    
// get Admin

 const getAdmin= async ()=>{
    if(localStorage.token){
        setToken(localStorage.token)
      }

      try{
          const res=await axios.get('/api/admin')

          console.log(res)
          dispatch({
              type:SET_ADMIN,
              payload:res.data
          })

      }catch (err){

        console.log(err)
         dispatch({
             type:SET_MESSAHE,
             payload:err.response.data
         })
      }
 }
//  if(state.adminAuth){
//     getAdmin() 
//  }
    //register
const registerAdmin = async adminData=>{
const config={
    header:{
        'Content-Type':'application/json'
    }
}
try{
    const res=await axios.post('/api/admin/register',adminData,config)
    dispatch({
   type:SUCCES_REGISTER,
    payload:res.data
    })

}catch (err){  
   console.log(err) 
   dispatch({
       type:SET_MESSAHE,
       payload:err.response.data
   })
}
}


  
    //Login
    const loginAdmin = async adminData=>{
        console.log(adminData,'admindata');
        const config={
            header:{
                'Content-Type':'application/json'
            }
        }
        try{
            const res=await axios.post('/api/admin/login',adminData,config)
            console.log(res)
            dispatch({
        type:SUCCES_LOGIN,
        payload:res.data,
       
            })
            getAdmin()
        
        }catch (err){
          console.log(err)  
           dispatch({
               type:SET_MESSAHE,
               payload:err.response.data
           })
        }

        }

        // log out

        const logout=()=>{
            dispatch({
                type:LOG_OUT
            })
        }

        // const setError= err=>{
        //     dispatch(
        //         {
        //             type:SET_ERROR,
        //             payload:err
        //         }
        //     )
        // }

        const clearMessage=()=>{
            dispatch(
                {
                    type:CLEAR_MESSAGE,
                    
                }
            )
        }
    
    return (
        <AdminContext.Provider value={{
         admin:state.admin,
         adminAuth:state.adminAuth,
        message:state.message,
        getAdmin,
        registerAdmin,
        loginAdmin,
        logout,
        clearMessage
    }}>
       {props.children}
    </AdminContext.Provider >
    )
}

export default AdminState;