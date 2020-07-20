import React,{useReducer} from 'react'
import Axios from 'axios'
import ProductContext from '../productContext/productContext'
import ProducrReducer from '../productContext/productReducer'
import {
   SHOW_PRODUCT,
   SINGLE_PRODUCT,
   SEARCH_PRODUCT,
   LETEST_PRODUCT,
   CLEAR_CART,
   ADD_CART,
   ADD_TOTAL,
   REMOVE_ITEM,
   INCREMENT_ITEM,
   DECREMENT_ITEM,
   ADD_CATEGORIES,
   GET_CATEGORIES,
   DELETE_CATEGORIES,
   SET_MESSAHE,
   CLEAR_MESSAGE,
   MAKE_PAYMENT
   
    
} from '../type'

 const ProductState=(props)=> {

    const initialState={
          products:[],
          product: {},
          searchProduct:[],
          allProduct:[],
          cart:[],
          cartSubTotal:0,
          cartTax:0,
          cartTotal:0,
          categories:[],
          message:null,
          orderReceive:null
          
    }

    const [state,dispatch]=useReducer(ProducrReducer,initialState)

// client get product by categories 

const showproduct=async(categories)=>{
  try {
    const res=await Axios.get(`/api/getallProduct?perPage=8&page=1&categories=${categories}`)
  
    dispatch({
      type:SHOW_PRODUCT,
      payload:res.data.docs
  })
  } catch (error) {
  
  }
}


//client get single product and see details  
const singleProduct=async(id)=>{

  try {
    const res=await Axios.get(`/api/singleProduct/${id}`)
    dispatch({
      type:SINGLE_PRODUCT,
      payload:res.data
  })
  } catch (error) {
     
  }
}


// client search product by term 

const getSearchProduct=async(term)=>{
  try {
    const res=await Axios.get(`/api/search?term=${term.term}`)

    dispatch({
      type:SEARCH_PRODUCT,
      payload:res.data
  })
  } catch (error) {
   
  }
}

// client get letest product 
const getLetestProduct=async()=>{
  try {
    const res=await Axios.get('/api/geLetsetProduct?perPage=8&page=1&letest=7')
 
    dispatch({
      type:LETEST_PRODUCT,
      payload:res.data.docs
  })
  } catch (error) {
   
  }
}

// admin get all categories 
const allItemProduct=async()=>{
  try {
    const res=await Axios.get('/api/allItemProduct?perPage=20&page=1')
    dispatch({
      type:SHOW_PRODUCT,
      payload:res.data.docs
  })
  } catch (error) {
    
  }
}

//admin delete product    ( transfer admin side )
const deleteProduct = async (id)=>{
  try{
      const res=await Axios.delete(`/api/deleteProduct/${id}`)
      dispatch({
        type:SET_MESSAHE,
        payload:res.data
    })
      allItemProduct()
  
  }catch (err){  
    
  }
  }



 const getItem = id => {
  const product = state.products.find(item => item._id === id);
  return product;
};
 const addCart=(id)=>{
  let tempProduct = [...state.products]
  const index = tempProduct.indexOf(getItem(id));
  const product = tempProduct[index];
  product.inCart = true;
  const price = product.price;
  product.total = price;
  dispatch({
    type:ADD_CART,
    payload:{tempProduct,product},
})

}

 const increment=(id)=>{
  let tempCart = [...state.cart];
  const selectedProduct = tempCart.find(item =>  item._id === id);
  const index = tempCart.indexOf(selectedProduct);
  const product = tempCart[index];
  product.count = product.count + 1;
  product.total = parseFloat((product.count * product.price).toFixed(2));
  dispatch({
    type:INCREMENT_ITEM,
    payload:tempCart
})
addTotal()
 }
 const decrement=(id)=>{
  let tempCart = [...state.cart];
    const selectedProduct = tempCart.find(item => item._id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      removeItem(id);
    }else{
      product.total =product.count * product.price
      dispatch({
        type:DECREMENT_ITEM,
        payload:tempCart
    })
    addTotal()
    }}

const removeItem=(id)=>{
  let tempProducts = [...state.products];
  let tempCart = [...state.cart];
  tempCart = tempCart.filter(item => item._id !== id);
  const index = tempProducts.indexOf(getItem(id));
  let removeProduct = tempProducts[index];
  removeProduct.inCart = false;
  removeProduct.count = 0;
  removeProduct.total = 0;
  dispatch({
    type:REMOVE_ITEM,
    payload:{tempProducts,tempCart},
   
})
addTotal()
}
const clearCart=()=>{
  dispatch({
    type:CLEAR_CART
      
})
showproduct()
   
}

 const addTotal=() => {
  let subTotal = 0;
  state.cart.map(item => (subTotal += item.total));
  const tempTax = subTotal * 0.15;
  const tax = parseFloat(tempTax.toFixed(2));
  const total = parseFloat((subTotal + tax).toFixed(2));
  subTotal = parseFloat(subTotal.toFixed(2));
  dispatch({
    type:ADD_TOTAL,
    payload:{subTotal,tax,total }
})
};

    //admmin uploadData in dashboard
    const uploadData = async data=>{
      const formData = new FormData();
      Object.keys(data).forEach(key => formData.append(key, data[key]));
      const config = {
        headers: {
            'Content-type': 'multipart/form-data'
         }
       };

try{
    const res= await Axios.post('/api/uploadproduct',formData,config)
    dispatch({ 
        type:SET_MESSAHE,
        payload:res.data
    }) 

}catch (err){  
     
}
}


 //admin add categories in Dashboard
 const Addcategories = async data=>{
    
  const config = {
      headers: {
          'Content-type': 'application/json'
      }
  };

try{
  const res=await Axios.post('/api/add-categories',data,config)
  dispatch({ 
      type:ADD_CATEGORIES,
       payload:res.data
  }) 
  getCategories()

}catch (err){  
}
}


   //admin get categories in dashboard
   const getCategories = async ()=>{
    try{
        const res=await Axios.get('/api/categories')
        dispatch({ 
            type:GET_CATEGORIES,
            payload:res.data
        }) 
    
    }catch (err){  
      
    }
    }

// admin delete categories in dashboard
    const deleteCategories = async (id)=>{
      try{
          const res = await Axios.delete(`/api/categories/${id}`)
          dispatch({ 
              type:DELETE_CATEGORIES,
              payload:res.data
          }) 
          getCategories()
      
      }catch (err){  
       
      }
      }


      //payment
 const makePayment = async data=>{
    
  const config = {
      headers: {
          'Content-type': 'application/json'
      }
  };

try{
  const res=await Axios.post('/api/payment',data,config)
  dispatch({ 
      type:MAKE_PAYMENT,
       payload:res.data
  }) 

}catch (err){  
}
}

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
       product:state.product,
       showproduct,
       singleProduct,
       allItemProduct,
       searchProduct:state.searchProduct,
       getSearchProduct,
       getLetestProduct,
       deleteProduct,
       cart:state.cart,
       addCart,
       increment,
       decrement,
       removeItem,
       clearCart,
       addTotal,
       cartSubTotal:state.cartSubTotal,
       cartTax:state.cartTax,
       cartTotal:state.cartTotal,
       uploadData,
       categories:state.categories,
       allProduct:state.allProduct,
       getCategories, 
       Addcategories,
       deleteCategories,
       message:state.message,
       clearMessage,
       makePayment

    }}>
       {props.children}
    </ProductContext.Provider>
    )
}

export default ProductState;