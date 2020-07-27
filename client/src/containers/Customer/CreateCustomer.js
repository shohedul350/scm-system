import React,{useState} from 'react'
export default function CreateCustomer() {
//   const {loginUser,userAuth,errors,setError,clearError} = useContext(AuthContext);
//   useEffect(()=>{
//     if(userAuth){
// props.history.push('/')
//     }
//   },[userAuth,props.history])
  const [formData,setFormData]=useState({
          orderNo:"",
          vendor:"",
          address:"",
          mobile:"",
          email:""
       
      });
 const {orderNo,vendor,address,mobile,email}=formData

const onSubmit=e=>{
    e.preventDefault();
   console.log(formData)
    }


const onChange=e=>{setFormData({...formData,[e.target.name]:e.target.value});}
    return (
  <div className="container p-5">
          <form onSubmit={e=>onSubmit(e)}>
    <div className="form-row">

    <div className="form-group col-md-6">
      <label for="orderNo">Purchse Order No:</label>
      <input type="number"
       className="form-control"
         placeholder="Enter Order Number"
         name="orderNo"
         value={orderNo}
         onChange={e=> onChange(e)}
         />
    </div>
    <div className="form-group col-md-6">
      <label for="Vendor">Vendor</label>
      <input type="text" 
      className="form-control" 
       placeholder="Enter Vendor"
       name="vendor"
       value={vendor}
       onChange={e=> onChange(e)}
       />
    </div>
    
  </div>
  <div className="form-group  ">
    <label for="inputAddress">Address</label>
    <input type="text"
     className="form-control" 
      placeholder="Enter Address"
      name="address"
      value={address}
      onChange={e=> onChange(e)}
      />
  </div>
  <div className="form-row">
  <div className="form-group col-md-6">
      <label for="bobileNo">Bobile No:</label>
      <input type="number"
       className="form-control" 
        placeholder="Enter Mobile Number"
        name="mobile"
        value={mobile}
        onChange={e=> onChange(e)}
       />
    </div>
  <div className="form-group col-md-6">
      <label for="bobileNo">Email:</label>
      <input type="email"
       className="form-control" 
        placeholder="Enter Email"
        name="email"
        value={email}
        onChange={e=> onChange(e)}
       />
    </div>
 </div>
  <button type="submit" className="btn btn-primary">Create New Customer</button>
</form>
        </div>
    )
}
