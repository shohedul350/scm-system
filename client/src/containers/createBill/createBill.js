
import React,{useContext,useEffect} from 'react'
import EmptyCart from './EmptyBillCart'
import BillItem from './BillItem'
import ProductContext from '../../context/invoiceContext/InvoiceContext'
 const CreateBill = () => {
    const {prod}=useContext(ProductContext)
    console.log(prod)
     if(prod.length>0){
        return (
   <div className="container">
      <BillItem items={prod}/>
    </div>
        )
    }
     return <EmptyCart/>
  
}

export default CreateBill