import React,{useContext,useEffect} from 'react'
// import Context from '../../context/productContext/productContext'

export default function ProductList() {
// const {products,allItemProduct,deleteProduct} = useContext(Context)
//     useEffect(()=>{
//         allItemProduct()
//     },[])
    return (
        <div className="" style={{padding:"5px"}}>
            
    <table className="table table-sm ">
    <thead>
      <tr>
      <th scope="col">Serial</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Image</th>
      <th scope="col">Product Unit</th>
      <th scope="col">Stock</th>
      <th scope="col">Price</th>
      <th scope="col">Total Price</th>
      <th scope="col">InCart</th>
      <th scope="col">Action</th>
    
      </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="col">1</th>
      <th scope="col">tair</th>
      <th scope="col">Product Image</th>
      <th scope="col">Pice</th>
      <th scope="col">60</th>
      <th scope="col">10</th>
      <th scope="col">600</th>
      <th scope="col">InCart</th>
      <th scope="col">Edit</th>
    
      </tr>

      <tr>
      <th scope="col">2</th>
      <th scope="col">tair</th>
      <th scope="col">Product Image</th>
      <th scope="col">kg</th>
      <th scope="col">60</th>
      <th scope="col">10</th>
      <th scope="col">600</th>
      <th scope="col">InCart</th>
      <th scope="col">Edit</th>
    
      </tr>

      <tr>
      <th scope="col">3</th>
      <th scope="col">tair</th>
      <th scope="col">Product Image</th>
      <th scope="col">Pice</th>
      <th scope="col">0</th>
      <th scope="col">10</th>
      <th scope="col">0</th>
      <th scope="col">InCart</th>
      <th scope="col">Edit</th>
    
      </tr>

      <tr>
      <th scope="col">4</th>
      <th scope="col">tair</th>
      <th scope="col">Product Image</th>
      <th scope="col">Pic</th>
      <th scope="col">50</th>
      <th scope="col">10</th>
      <th scope="col">500</th>
      <th scope="col">InCart</th>
      <th scope="col">Edit</th>
    
      </tr>
    

{/* 
    {products.map(product=>(
            <tr>
            <td className="text-uppercase">
            <img
              src={`/${product.image}`}
              style={{width:"5rem",height:"5rem"}}
              className="img-fluid"
              alt="product"
              /></td>
            <td className="text-uppercase">{product.title}</td>
            <td className="text-uppercase">{product.categories}</td>
             <td><span onClick={()=>deleteProduct(product._id)} ><i  className="fas fa-trash-alt"></i></span></td>
            </tr>
 
          )
        )} */}

    </tbody>
  </table>
        </div>
    )
}
