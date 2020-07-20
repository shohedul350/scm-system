import React from 'react'
export default function CreateCustomer() {
    return (
        <div>
            <form>
  <div class="form-row">
  <div class="form-group col-md-6">
      <label for="customerName">Customer Name</label>
      <input type="text" class="form-control"  placeholder="Enter Customer Name"/>
    </div>
    <div class="form-group col-md-6">
      <label for="mobile">Mobile</label>
      <input type="number" class="form-control"  placeholder="Enter Mobile Number"/>
    </div>
    
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control"  placeholder="Enter Customer Address"/>
  </div>
 
  <button type="submit" class="btn btn-primary">Create New Customer</button>
</form>
        </div>
    )
}
