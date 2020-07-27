import React,{useContext,useState,useEffect}from 'react'
 import productContext from '../../context/productContext/productContext'

export default function CartItem(props) {
  const {items}=props
 
  

  const [orderNumber, setOrderNumber] = useState(114195);
  const [address, setAddress] = useState('pirganj');
  const [products, setProducts] = useState(items);
  const [qty, setQty] = useState(1);
  const [totalPacking, setTotalPacking] = useState(1);

  //   const getItem = id => {
  //   const product = products.find(item => item._id === id);
  //   return product;
  // };

  const increment=(id,incre)=>{
    let tempProduct = [...products];
    const selectedProduct = tempProduct.find(item =>  item._id === id);
    const index = tempProduct.indexOf(selectedProduct);
    const product = tempProduct[index];
    product.count = product.count + incre;
    setProducts(tempProduct)
   }
   const decrement=(id,decre)=>{
    let tempProduct = [...products];
    const selectedProduct = tempProduct.find(item =>  item._id === id);
    const index = tempProduct.indexOf(selectedProduct);
    const product = tempProduct[index];
    product.count = product.count - decre;
    
   }

 
 const newChalan={orderNumber,address,products}

  // const onChange=e=>{setFormData({...formData,[e.target.name]:e.target.value})}



const onSubmit=e=>{
  e.preventDefault();
console.log(newChalan)
  alert('oky')
  // updateProduct(formData);
  // clearEditForm();
  // props.history.push('/dashboard/stock')
  // message.success('Update Successfull');
}



    return (
        
        <div className="customer product details m-auto text-center">
           <div className="form-group">
                      <label htmlFor="OrderNumber"> OrderNumber: </label>
                      <input
                        type="number"
                        className="form-control"
                        name="orderNumber"
                         value={orderNumber}
                         required
                         disabled
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name"> Address: </label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={address}
                         disabled
                         required
                      />
                    </div>
                   
        <table className="table  table-sm table-bordered table-striped text-center" style={{}}>
        <thead>
    
        </thead>
        <thead>
            
        <tr>
            <th scope="col">Serial No</th>
            <th>Image</th>
            <th scope="col">Product Details</th>
            <th scope="col">Unit</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total Packing</th>
            <th scope="col">Remove Product</th>
        </tr>
        </thead>
    
        <tbody>
        
     
        {items.map((product,index)=>(
        <tr>
             <th scope="col">{index+1}</th>
              <th> <img
                 src={`/${product.image}`}
                 style={{width:"3rem",height:"3rem"}}
                 className="img-fluid"
                 alt="product"
                 />
                 </th>
            <th scope="col">{product.name}</th>
            <th scope="col">{product.unit}</th>
            <th scope="col"> 
                <div class="form-group ">
                  <select id="inputState"
                  class="form-control"
                  name='qty'
                  onChange={()=>increment(product._id,qty)}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  </select>
                </div>
              </th>
            <th scope="col">
            <div class="form-group">
                <select id="inputState"
                class="form-control"
                name="totalPacking" 
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
            </th>
            <th><button>remove</button></th>
            
        </tr>
        ))}
     
        <button onClick={(e)=>onSubmit(e)} className="btn btn-primary my-3 d-block">Save</button>
     
        </tbody>
    
        </table>
       
    </div>
    )
}