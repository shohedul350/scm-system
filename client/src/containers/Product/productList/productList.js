// import React, {useEffect,useContext} from 'react'
// import Product from './ProductTable'
// import ProductContext from '../../../context/productContext/productContext'

// const ProductList = () => {
//   const {getProduct,products}=useContext(ProductContext)
//   useEffect(()=>{
//     getProduct()
//    // eslint-disable-next-line
//   },[]);
 
  
//         return (
//             <React.Fragment>
    
//                 <div className="">
//                     <div className="row">
//            {
//              !products.length ? (
//               <div className="container d-flex justify-content-center p-4">
//               <div className="spinner-border m-auto" role="status">
//                 <span className="sr-only">Loading...</span>
//               </div>
            
//               <p className="pl-1">Loading...</p> 
            
//             </div>
       
//              ) : (
               
//               products.map(product=>{
//              return  <Product key={product._id} product={product}/>
//            })
//              )
//            }
        
//                 </div>
//                 </div>
          
//         </React.Fragment>
//         )
//     }


// export default ProductList
