import React,{useReducer} from 'react'
import Axios from 'axios'
import InvoiceContext from '../invoiceContext/InvoiceContext'
import InvoiceReducer from '../invoiceContext/InvoiceReducer'
import {
  GET_INVOICE,
  GET_SINGLE_INVOICE,
  ADD_INVOICE,
  UPDATE_INVOICE,
  DELETE_INVOICE,
  EDIT_FORM,
  CLEAR_EDITFORM,
  CLEAR_SUCCESS,
  SET_ERROR,
  CLEAR_ERROR
} from '../type'

 const InvoiceState=(props)=> {

    const initialState={
          invoices:[],
          invoice: null,
          success:false,
          editForm:null,
          error:null
    }

    const [state,dispatch]=useReducer(InvoiceReducer,initialState)

// admin get induvisula customer Invoice
const getInvoice=async(orderNumber)=>{

  try {
    const res=await Axios.get(`/api/allInvoice/${orderNumber}`)
    dispatch({
      type:GET_INVOICE,
      payload:res.data.docs
  })
  } catch (error) {
    console.log(error)
    dispatch({
      type:SET_ERROR,
      payload:error
   });
  }
}


// admin get single Invoice
const getSingleInvoice=async(invoiceId)=>{
  try {
    const res=await Axios.get(`/api/singleInvoice/${invoiceId}`)
    dispatch({
      type:GET_SINGLE_INVOICE,
      payload:res.data
  })
  }catch (error) {
    console.log(error)
    dispatch({
      type:SET_ERROR,
      payload:error
   });
  }
}

  //admmin add Invoice
  const addInvoice= async data=>{
     console.log(data)
    const config = {
      headers: {
          'Content-type': 'application/json'
       }
     };

try{
  const res= await Axios.post('/api/addInvoice',data,config)
  dispatch({ 
      type:ADD_INVOICE,
      payload:res.data
  }) 

} catch (error) {
  console.log(error)
  dispatch({
    type:SET_ERROR,
    payload:error
 });
}
}

// delete Invoice
const deleteInvoice = async (id)=>{
  try{
       const res=await Axios.delete(`/api/deleteInvoice/${id}`)
      dispatch({
        type:DELETE_INVOICE,
        payload:res.data
    })
    getInvoice()
  
  }catch (error) {
    console.log(error)
    dispatch({
      type:SET_ERROR,
      payload:error
   });
  }
  }  

  //
   //update Invoice
 const updateInvoice=async(invoice)=>{

  const config={
      header:{
          'Content-Type':'application/json'
      }
  }
  const res=await Axios.put(`/api/updateInvoice/${invoice._id}`,invoice,config)
  try {
       
      dispatch({
          type:UPDATE_INVOICE,
          payload:res.data
      }) 
  } catch (error) {
     console.log(error)
  }
 
}

//edit Invoice
const editFormFun=(invoice)=>{
      dispatch({
          type:EDIT_FORM,
          payload:invoice
      })  
  }
  
  //clear edit form
  const clearEditForm=()=>{
      dispatch({
          type:CLEAR_EDITFORM,
          
      }) 
  }
  

  


//clear success
 const clearSuccess =()=>{
        setTimeout(() => { 
        dispatch({
           type:CLEAR_SUCCESS,
        })
       }, 3000);
     }
// clear error
 const clearError =()=>{
      setTimeout(() => { 
      dispatch({
         type:CLEAR_ERROR,
      })
     }, 3000);
   }
  
    return (
        <InvoiceContext.Provider value={{
       invoices:state.invoices,
       invoice:state.invoice,
       getInvoice,
       getSingleInvoice,
       addInvoice,
       success:state.success,
       editForm:state.editForm,
       deleteInvoice,
       updateInvoice,
       editFormFun,
       clearEditForm,
       error:state.error
    }}>
       {props.children}
    </InvoiceContext.Provider>
    )
}

export default InvoiceState;
