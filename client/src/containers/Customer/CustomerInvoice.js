import React from 'react'

export default function CustomerInvoice() {
    return (
        <div className="m-5 ">
            <div className="heading text-center">
                <h1>Lalminirhat Plastic</h1>
                <h3>All Kinds of  plastic rubber,bag,light manu</h3>
                <h4>136/A Dholpur,Bow Bazar,Zatrabari,Dhaka</h4>
            </div>
            <div className="customer details pt-5 m-auto text-center ">
                <table className="table table-sm ">
                <thead>
                <tr>
                    <th scope="col">Order Id</th>
                    <th scope="col">Customer Id</th>
                    <th scope="col">Customer Address</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="col">01231</th>
                    <th scope="col">020194</th>
                    <th scope="col">Pirganj,Rangpur</th>
                </tr>
                </tbody>
                </table>
            </div>

            <div className="customer product details m-auto text-center">
                <table className="table table-sm table-bordered ">
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
                    <th scope="col">01</th>
                    <th scope="col">Rubber star</th>
                    <th scope="col">5o</th>
                    <th scope="col">3</th>
                    
                </tr>
                <tr>
                    <th scope="col">01</th>
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
