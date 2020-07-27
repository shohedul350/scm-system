import React from 'react'
import moment from "moment";
export default function CustomerInvoice() {
    const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    return (
        <div className="text-center m-5">
        <div class="d-flex justify-content-around pt-5">
                <div class="">
                <strong>SL NO-</strong>
                </div>
                <div class="">
                <strong>Chalan</strong>
                </div>
                <div class="">
               <strong>{currentDate}</strong>
                </div>
        </div>
            <div className="heading text-center p-4">
                <h3>LALMONIRHAT PLASTIC</h3>
                <h4>All Kinds of  Plastic,Rubber,Bag & Light Manufacturer & Suppliers.</h4>
                <h5>136/A Dholpur,Bow Bazar,Zatrabari,Dhaka</h5>
            </div>
         

            <div className="customer product details m-auto text-center">
                <table className="table  table-sm table-bordered table-striped text-center" style={{}}>
                <thead>
                <tr>
                   
                    <th scope="col">Order NO-01245A56</th>
                    <th scope="col">Address-Pirganj,Rangpur</th>
                    <th colspan="2"></th>
                    
                </tr>
                </thead>
                <thead>
                    
                <tr>
                    <th scope="col">Serial No</th>
                    <th scope="col">Product Details</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total Packing</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="col">01</th>
                    <th scope="col">Rubber star</th>
                    <th scope="col">5o</th>
                    <th scope="col">3</th>
                    
                </tr>
                <tr>
                    <th scope="col">02</th>
                    <th scope="col">Rubber star</th>
                    <th scope="col">5o</th>
                    <th scope="col">3</th>
                    
                </tr>
                <tr>
                    <th scope="col">03</th>
                    <th scope="col">Rubber star</th>
                    <th scope="col">5o</th>
                    <th scope="col">3</th>
                    
                </tr>
                <tr>
                    <th scope="col">04</th>
                    <th scope="col">Rubber star</th>
                    <th scope="col">5o</th>
                    <th scope="col">3</th>
                    
                </tr>
                <tr>
                    <th scope="col">05</th>
                    <th scope="col">Rubber star</th>
                    <th scope="col">5o</th>
                    <th scope="col">3</th>
                    
                </tr>
                <tr>
                    <th scope="col">06</th>
                    <th scope="col">Rubber star</th>
                    <th scope="col">5o</th>
                    <th scope="col">3</th>
                    
                </tr>
                </tbody>
                </table>
            </div>
        

            

        </div>
    )
}
