import React,{useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import CustomerContext from '../../context/customerContext/CustomerContext'

export default function CustomerList() {
const {getCustomer,customers} = useContext(CustomerContext)
    useEffect(()=>{
      getCustomer()
    },[])
    return (
        <div className="container p-5" >
            
    <table className="table table-sm ">
    <thead>
      <tr>
      <th scope="col">Serial</th>
      <th scope="col">OrderNumber</th>
      <th scope="col">Customer Address</th>
      <th scope="col">Mobile</th>
      <th scope="col">E-mail</th>
      <th scope="col">Details</th>
      <th scope="col">Action</th>
    
      </tr>
    </thead>
    <tbody>
    {
             !customers.length ? (
              <div className="container d-flex justify-content-center p-4">
              <div className="spinner-border m-auto" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            
              <p className="pl-1">Loading...</p> 
            
            </div>
       
             ) : (
               
              customers.map((customer,index)=>(
                <tr>
                <td className="">{index+1}</td>
               <td className="">{customer.orderNumber}</td>
               <td className="">{customer.address}</td>
               <td className="">{customer.mobile}</td>
               <td className="">{customer.email}</td>
               <td className=""><Link to={`customer-details/${customer.orderNumber}`}><button>view</button></Link></td>
               <td className=""><button>delete</button></td>
          </tr>
                )
              )
             )
           }

    </tbody>
  </table>
        </div>
    )
}
