import React,{useReducer} from 'react'
import Axios from 'axios'
import CustomerContext from '../customerContext/CustomerContext'
import CustomerReducer from '../customerContext/CustomerReducer'
import {
    GET_CUSTOMER,
    GET_SINGLE_CUSTOMER,
    SET_MESSAHE,
    UPDATE_CUSTOMER,
    CLEAR_MESSAGE,
    EDIT_FORM,
    CLEAR_EDITFORM,
} from '../type'

 const CustomerState=(props)=> {

    const initialState={
          customers:[],
          customer: null,
          message:null,
          editForm:null,
    }

    const [state,dispatch]=useReducer(CustomerReducer,initialState)

// admin get all customer
const getCustomer=async()=>{
  try {
    const res=await Axios.get('/api/allCustomer')
    console.log(res.data)
    dispatch({
      type:GET_CUSTOMER,
      payload:res.data
  })
  } catch (error) {
    console.log(error)
  }
}


// admin get single customer
const getSingleCustomer=async(id)=>{
  console.log(id,'state')
  try {
    const res=await Axios.get(`/api/singleCustomer/${id}`)
    console.log(res.data)
    dispatch({
      type:GET_SINGLE_CUSTOMER,
      payload:res.data
  })
  } catch (error) {
    console.log(error)
  }
}

  //admmin add customer
  const addCustomer= async data=>{
    
    const config = {
      headers: {
          'Content-type': 'application/json'
       }
     };

try{
  const res= await Axios.post('/api/addCustomer',data,config)
  dispatch({ 
      type:SET_MESSAHE,
      payload:res.data
  }) 

}catch (err){  
   
}
}

// delete customer
const deleteCustomer = async (id)=>{
  console.log(id,'delete id')
  try{
       const res=await Axios.delete(`/api/deleteCustomer/${id}`)
      dispatch({
        type:SET_MESSAHE,
        payload:res.data
    })
    getCustomer()
  
  }catch (err){  
    console.log(err)
  }
  }  

  //
   //update customer
 const updateCustomer=async(customer)=>{

  const config={
      header:{
          'Content-Type':'application/json'
      }
  }
  const res=await Axios.put(`/api/updateCustomer/${customer._id}`,customer,config)
 console.log(res)
  try {
       
      dispatch({
          type:UPDATE_CUSTOMER,
          payload:res.data
      }) 
  } catch (error) {
     console.log(error)
  }
 
}

//edit customer
const editFormFun=(customer)=>{
      dispatch({
          type:EDIT_FORM,
          payload:customer
      })  
  }
  
  //clear edit form
  const clearEditForm=()=>{
      dispatch({
          type:CLEAR_EDITFORM,
          
      }) 
  }
  

  


//clear message
 const clearMessage =()=>{
        setTimeout(() => { 
        dispatch({
           type:CLEAR_MESSAGE,
        })
       }, 3000);
     }
  
    return (
        <CustomerContext.Provider value={{
       customers:state.customers,
       customer:state.customer,
       getCustomer,
       getSingleCustomer,
       addCustomer,
       message:state.message,
       editForm:state.editForm,
       deleteCustomer,
       updateCustomer,
       editFormFun,
       clearEditForm
    }}>
       {props.children}
    </CustomerContext.Provider>
    )
}

export default CustomerState;
