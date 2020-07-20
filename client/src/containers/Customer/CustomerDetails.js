import React,{useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
// import Context from '../../context/productContext/productContext'
export default function CustomerDetails() {
// const {products,allItemProduct,deleteProduct} = useContext(Context)
//     useEffect(()=>{
//         allItemProduct()
//     },[])
    return (
        <div className="" style={{padding:"5px"}}>
            
    <table className="table table-sm ">
    <thead>
      <tr>
        <th scope="col">Serial</th>
        <th scope="col">Invoice Id</th>
        <th scope="col">Customer Name</th>
        <th scope="col">Details</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="col">1</th>
      <th scope="col">39573495</th>
      <th scope="col">shohedul</th>
      <th scope="col"><Link to='/dashboard/customer-details/customer-invoice'><button type="button" className="btn btn-info">View</button></Link></th>
    </tr>
    <tr>
      <th scope="col">1</th>
      <th scope="col">39573495</th>
      <th scope="col">shohedul</th>
      <th scope="col"><Link to='/dashboard/customer-details/customer-invoice'><button type="button" className="btn btn-info">View</button></Link></th>
    </tr>
    <tr>
      <th scope="col">1</th>
      <th scope="col">39573495</th>
      <th scope="col">shohedul</th>
      <th scope="col"><Link to='/dashboard/customer-details/customer-invoice'><button type="button" className="btn btn-info">View</button></Link></th>
    </tr>

{/* 
    {products.map(product=>(
            <tr>
            <td className="text-uppercase">
            <img
              src={`/${product.image}`}
              style={{width:"5rem",height:"5rem"}}
              className="img-fluid"
              alt="product"
              /></td>
            <td className="text-uppercase">{product.title}</td>
            <td className="text-uppercase">{product.categories}</td>
             <td><span onClick={()=>deleteProduct(product._id)} ><i  className="fas fa-trash-alt"></i></span></td>
            </tr>
 
          )
        )} */}

    </tbody>
  </table>

  {/* bill */}
  <div>
  <table className="table table-sm ">
    <thead>
      <tr>
        <th scope="col">Serial</th>
        <th scope="col">Bill Id</th>
        <th scope="col">Details</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="col">1</th>
      <th scope="col">39573495</th>
      <th scope="col"><Link to='/dashboard/customer-details/customer-bill'><button type="button" className="btn btn-info">View</button></Link></th>
    </tr>
    <tr>
    <th scope="col">1</th>
      <th scope="col">39573495</th>
      <th scope="col"><Link to='/dashboard/customer-details/customer-bill'><button type="button" className="btn btn-info">View</button></Link></th>
    </tr>
    <tr>
    <th scope="col">1</th>
      <th scope="col">39573495</th>
      <th scope="col"><Link to='/dashboard/customer-details/customer-bill'><button type="button" className="btn btn-info">View</button></Link></th>
    </tr>

{/* 
    {products.map(product=>(
            <tr>
            <td className="text-uppercase">
            <img
              src={`/${product.image}`}
              style={{width:"5rem",height:"5rem"}}
              className="img-fluid"
              alt="product"
              /></td>
            <td className="text-uppercase">{product.title}</td>
            <td className="text-uppercase">{product.categories}</td>
             <td><span onClick={()=>deleteProduct(product._id)} ><i  className="fas fa-trash-alt"></i></span></td>
            </tr>
 
          )
        )} */}

    </tbody>
  </table>
  </div>
        </div>
    )
}

