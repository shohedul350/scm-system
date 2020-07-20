import React from 'react'

export default function Bill() {
  return (
               <div class="container">
        <div class="card">
      <div class="card-header">
      Invoice
      <strong>01/01/01/2018</strong> 
        <span class="float-right"> <strong>Status:</strong>Delivered</span>
      
      </div>
      <div class="card-body">
      <div class="row mb-4">
      <div class="col-sm-6">
      <h6 class="mb-3">From:</h6>
      <div>
      <strong>Webz Poland</strong>
      </div>
      <div>Madalinskiego 8</div>
      <div>71-101 Szczecin, Poland</div>
      <div>Email: info@webz.com.pl</div>
      <div>Phone: +48 444 666 3333</div>
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
        <th class="center">Price</th>
        <th class="center">Unit</th>
      <th class="right">Total</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="center">1</td>
        <td class="left strong">Origin License</td>
        <td class="center">10</td>
        <td class="center">50</td>
        <td class="center">pices</td>
        <td class="right">500</td>
      </tr>
      <tr>
        <td class="center">1</td>
        <td class="left strong">Origin License</td>
        <td class="center">10</td>
        <td class="center">50</td>
        <td class="center">pices</td>
        <td class="right">500</td>
      </tr>
      <tr>
        <td class="center">1</td>
        <td class="left strong">Origin License</td>
        <td class="center">10</td>
        <td class="center">50</td>
        <td class="center">pices</td>
        <td class="right">500</td>
      </tr>
      <tr>
        <td class="center">1</td>
        <td class="left strong">Origin License</td>
        <td class="center">10</td>
        <td class="center">50</td>
        <td class="center">pices</td>
        <td class="right">500</td>
      </tr>
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
