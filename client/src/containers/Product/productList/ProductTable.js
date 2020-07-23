import React,{useContext,useEffect}from 'react'
import {Link} from 'react-router-dom'
import { Popconfirm, message } from 'antd';
import ProductContext from '../../../context/productContext/productContext'
import ProductListPageWrapper from './productList.style';

const ProductTable = () => {
  const {getProduct,message,products,deleteProduct,editFormFun} = useContext(ProductContext)

  useEffect(()=>{
    getProduct()
   // eslint-disable-next-line
  },[]);


  function confirm(id) {
    deleteProduct(id);
    message.success('Delete Successfull');
  }
  
  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  }

  return (
    <ProductListPageWrapper className="isProductListPageWrapper">
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
      <table  className="table table-striped table-bordered" style={{width:"100%"}}>
     <thead>
      <tr>
        <th class="th-sm">Serial
        </th>
        <th class="th-sm" style={{}}>Image
        </th>
        <th class="th-lg" style={{}}>Product Name
        </th>
        <th class="th-sm">Unit
        </th>
        <th class="th-sm">Stock
        </th>
        <th class="th-sm">Price
        </th>
        <th class="th-sm">Total
        </th>
        <th class="th-sm">InCart
        </th>
        <th class="th-sm">Edit
        </th>
        <th class="th-sm">Delete
        </th>
      </tr>
    </thead>
    <tbody>
    {
             !products.length ? (
              <div className="container d-flex justify-content-center p-4">
              <div className="spinner-border m-auto" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            
              <p className="pl-1">Loading...</p> 
            
            </div>
       
             ) : (
               
              products.map((product,index)=>(
                <tr>
                <td className="">
                  {index+1}
                </td>
               <td className="">
               <img
                 src={`/${product.image}`}
                 style={{width:"3rem",height:"3rem"}}
                 className="img-fluid"
                 alt="product"
                 />
                 </td>
               <td className="">{product.name}</td>
               <td className="">{product.unit}</td>
               <td className="">{product.stock  == 0 ? (<span class="alert alert-danger">
   Out Of Stock
</span>) : product.stock}</td>
               <td className="">{product.price}</td>
               <td className="">{product.price*product.stock}</td>
               <td className="">
                 {product.stock  == 0 ? ( <button className="btn btn-info"
                                   disabled> <i className="fas fa-cart-plus"/></button>) : (
                    <button className="btn btn-info"
                    //  onClick={()=>addCart(_id)}
                      disabled={product.inCart ? true : false}>
                      { product.inCart ? (
                    <p className="text-capitalize mb-0"
                      disabled>
                          {""}
                          in cart
                        </p>
        ):(
            <i className="fas fa-cart-plus"/>
        )}

    </button>
                 )}
              
               </td>
               <td className=""><Link  onClick={()=>editFormFun(product)} to="/dashboard/edit-product" ><i class="fas fa-edit"></i></Link></td>
               <td>
               <Popconfirm
                 title="Are you sure delete this task?"
                 onConfirm={()=>confirm(product._id)}
                 onCancel={cancel}
                 okText="Yes"
                 cancelText="No"
               >
               <span><i class="fas fa-trash-alt"></i></span>
               </Popconfirm>
       </td>    
                
          </tr>
                )
              )
             )
           }
        
         
       
    </tbody>
  
  </table>
  </div>
  </ProductListPageWrapper>
  )
}

export default ProductTable