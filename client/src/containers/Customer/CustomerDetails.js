import React,{useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import moment from "moment";
import Context from '../../context/invoiceContext/InvoiceContext'
export default function CustomerDetails(props) {
const {getInvoice,invoices,addCart} = useContext(Context)

    useEffect(()=>{
      getInvoice(props.match.params.id);
    //eslint disable nextline
    },[])
    return (
        <div className="container" style={{margin:"auto"}}>
            <Link to="/dashboard/create-bill">Create bill</Link>
    <table className="table table-sm text-center">
    <thead>
      <tr>
        <th scope="col">Serial</th>
        <th scope="col">Order Number</th>
        <th scope="col">Date</th>
        <th scope="col">Details</th>
        <th scope="col">Add To Bill</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
  
 


    {invoices.map((invoice,index)=>(
            <tr>
              <td className="text-uppercase">{index+1}</td>
            <td className="text-uppercase">{invoice.orderNumber}</td>
              <td className="text-uppercase">{moment(invoice.createdAt).format('MMMM Do YYYY')}</td>
            <td className=""><Link to={`invoice/${invoice._id}`}><button>view</button></Link></td>
            <td className="">
            <button className="btn btn-info"
                     onClick={()=>addCart(invoice._id)}
                      disabled={invoice.inCart ? true : false}>
                      { invoice.inCart ? (
                    <p className="text-capitalize mb-0"
                      disabled>
                          {""}
                          in cart
                        </p>
        ):(
            <i className="fas fa-cart-plus"/>
        )}

    </button>


            </td>
             <td><span><i  className="fas fa-trash-alt"></i></span></td>
            
            </tr>
 
          )
        )}

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
      <th scope="col"><Link to='dashboard/customer-bill'><button type="button" className="btn btn-info">View</button></Link></th>
    </tr>
    <tr>
    <th scope="col">1</th>
      <th scope="col">39573495</th>
      <th scope="col"><Link to='dashboard/customer-bill'><button type="button" className="btn btn-info">View</button></Link></th>
    </tr>
    <tr>
    <th scope="col">1</th>
      <th scope="col">39573495</th>
      <th scope="col"><Link to='dashboard/customer-bill'><button type="button" className="btn btn-info">View</button></Link></th>
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

