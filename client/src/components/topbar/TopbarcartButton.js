import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import ProductContext from '../../context/productContext/productContext'

export default function TopbarcartButton() {
    const {cart } = useContext(ProductContext)
    return (
        
               <div className="">
                  <Link to='dashboard/cart' className="">
                   
                          <span className="mr-2 "><i class="fas fa-shopping-cart"></i> {!cart.length ? null : (<span class="badge badge-success badge-pill">{cart.length}</span>)}</span>
                          
                      
                   
                    </Link>
              </div>
        
    )
}
