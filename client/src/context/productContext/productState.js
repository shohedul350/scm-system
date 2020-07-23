import React,{useReducer} from 'react'
import Axios from 'axios'
import ProductContext from '../productContext/productContext'
import ProducrReducer from '../productContext/productReducer'
import {
    GET_PRODUCT,
    SET_MESSAHE,
    UPDATE_PRODUCT,
    CLEAR_MESSAGE,
    EDIT_FORM,
    CLEAR_EDITFORM,
} from '../type'

 const ProductState=(props)=> {

    const initialState={
          products:[],
          product: null,
          message:null,
          editForm:null,
    }

    const [state,dispatch]=useReducer(ProducrReducer,initialState)

// admin get all Product
const getProduct=async()=>{
  try {
    const res=await Axios.get('/api/allProduct')
    console.log(res.data)
    dispatch({
      type:GET_PRODUCT,
      payload:res.data.docs
  })
  } catch (error) {
    console.log(error)
  }
}

  //admmin upload product
  const uploadProduct= async data=>{
    const formData = new FormData();
    Object.keys(data).forEach(key => formData.append(key, data[key]));
    const config = {
      headers: {
          'Content-type': 'multipart/form-data'
       }
     };

try{
  const res= await Axios.post('/api/uploadProduct',formData,config)
  dispatch({ 
      type:SET_MESSAHE,
      payload:res.data
  }) 

}catch (err){  
   
}
}

// delete product
const deleteProduct = async (id)=>{
  console.log(id,'delete id')
  try{
       const res=await Axios.delete(`/api/deleteProduct/${id}`)
      dispatch({
        type:SET_MESSAHE,
        payload:res.data
    })
    getProduct()
  
  }catch (err){  
    console.log(err)
  }
  }  

  //
   //update product
 const updateProduct=async(product)=>{
   console.log(product)
  const config={
      header:{
          'Content-Type':'application/json'
      }
  }
  const res=await Axios.put(`/api/updateProduct/${product._id}`,product,config)
 console.log(res)
  try {
       
      dispatch({
          type:UPDATE_PRODUCT,
          payload:res.data
      }) 
  } catch (error) {
     console.log(error)
  }
 
}

//edit product
const editFormFun=(product)=>{
      dispatch({
          type:EDIT_FORM,
          payload:product
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
        <ProductContext.Provider value={{
        products:state.products,
        getProduct,
        product:state.product,
        uploadProduct,
        deleteProduct,
        message:state.message,
        clearMessage,
        updateProduct,
        editForm:state.editForm,
        editFormFun,
        clearEditForm
    }}>
       {props.children}
    </ProductContext.Provider>
    )
}

export default ProductState;