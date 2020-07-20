import React,{useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
// import Context from '../../context/productContext/productContext'

export default function CustomerList() {
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
      <th scope="col">Customer Name</th>
      <th scope="col">Customer Address</th>
      <th scope="col">Mobile</th>
      <th scope="col">Details</th>
      <th scope="col">Action</th>
    
      </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="col">1</th>
      <th scope="col">shohedul</th>
      <th scope="col">Pirganj,Rangpur</th>
      <th scope="col">01710488865</th>
      <th scope="col"><Link to='/dashboard/customer-details'><button type="button" className="btn btn-info">View</button></Link></th>
      <th scope="col"><button type="button" class="btn btn-dark">Delete</button></th>
    </tr>

    <tr>
      <th scope="col">2</th>
      <th scope="col">shohedul</th>
      <th scope="col">Pirganj,Rangpur</th>
      <th scope="col">01710488865</th>
      <th scope="col"><Link to='/dashboard/customer-details'><button type="button" className="btn btn-info">View</button></Link></th>
      <th scope="col"><button type="button" class="btn btn-dark">Delete</button></th>
    </tr>

    <tr>
      <th scope="col">3</th>
      <th scope="col">shohedul</th>
      <th scope="col">Pirganj,Rangpur</th>
      <th scope="col">01710488865</th>
      <th scope="col"><Link to='/dashboard/customer-details'><button type="button" className="btn btn-info">View</button></Link></th>
      <th scope="col"><button type="button" class="btn btn-dark">Delete</button></th>
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
    )
}
