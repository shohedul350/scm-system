import React,{useContext,useEffect} from 'react'
import moment from "moment";
import AdminContext from '../../context/adminContext/adminContext'

export default function BillItem({items}) {
    const item = items[0]
    const allProduct=[]
    items.map(item=>{
      item.map(itm=>{
        allProduct.push=itm
      })
    })
    console.log(allProduct)
    const { adminDetails } = useContext(AdminContext);
    const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    return (
        <div class="container">
        <div class="card">
      <div class="card-header">
      Bill
      <strong>01/01/01/2018</strong> 
        <span class="float-right"> <strong>Status:</strong>create bill</span>
      
      </div>
      <div class="card-body">
      <div class="row mb-4">
      <div class="col-sm-6">
      <h6 class="mb-3">From:</h6>
      <div>
          <strong>{adminDetails.companyName}</strong>
      </div>
      <div>{adminDetails.companyDetails}</div>
                <div>Address: {adminDetails.companyAddress}</div>
                <div>Email: {adminDetails.companyEmail}</div>
                <div>Phone: {adminDetails.companyMobile}</div>
      </div>
      
      <div class="col-sm-6">
      <h6 class="mb-3">To:</h6>
      <div>
      <strong>Bob Mart</strong>
      </div>
      <div>Attn: Daniel Marek</div>
      <div>43-190 Mikolow, Poland</div>
      <div>Email: marek@daniel.com</div>
      <div>Phone: +48 123 456 789</div>
      </div>
      
      
      
      </div>
      
      <div class="table-responsive-sm">
      <table class="table table-striped">
      <thead>
      <tr>
      <th class="center">serial</th>
      <th>Product Description</th>
        <th class="center">Qty</th>
        <th class="center">Unit</th>
        <th class="center">Price</th>
     
      <th class="right">Total</th>
      </tr>
      </thead>
      <tbody>
      {  
             !allProduct ? (
                
                    <div className="container d-flex justify-content-center p-4">
                                  <div className="spinner-border m-auto" role="status">
                                   <span className="sr-only">Loading...</span>
                               </div>
                                
                                 <p className="pl-1">Loading...</p> 
                                
                                </div>
                           
                                ) : (

                                  allProduct.map((itm,index)=>(
            <tr>
              <td className="">{index+1}</td>
            <td className="">{itm.name}</td>
            <td className="">{itm.qty}</td>
            <td className="">{itm.unit}</td>
            <td className="">{itm.price}</td>
         
            <td className="">{itm.qty*itm.price}</td>
            
            </tr>
    )
          )
        )}
               
      </tbody>
      </table>
      </div>
      <div class="row">
      <div class="col-lg-4 col-sm-5">
      
      </div>
      
      <div class="col-lg-4 col-sm-5 ml-auto">
      <table class="table table-clear">
      <tbody>
      <tr>
      <td class="left">
      <strong>Subtotal</strong>
      </td>
      <td class="right">$8.497,00</td>
      </tr>
      <tr>
      <td class="left">
      <strong>Discount (20%)</strong>
      </td>
      <td class="right">$1,699,40</td>
      </tr>
      <tr>
      <td class="left">
       <strong>VAT (10%)</strong>
      </td>
      <td class="right">$679,76</td>
      </tr>
      <tr>
      <td class="left">
      <strong>Total</strong>
      </td>
      <td class="right">
      <strong>$7.477,36</strong>
      </td>
      </tr>
      </tbody>
      </table>
      
      </div>
    
    </div>
      </div>
      </div>
      </div>
    )
}
