  
import React from 'react'

const EmptyBillCart = () => {
   return (
       <div className="continer mt-5" style={{height:"350px"}}>
          <div className="row">
              <div className="col-10 mx-auto text-center text-title">
                  <h1>Your bill cart is currently empty</h1>
              </div>
          </div>
       </div>
   )
}

export default EmptyBillCart