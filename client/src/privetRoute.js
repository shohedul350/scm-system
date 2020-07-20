import React,{useContext} from 'react'
import  AuthContext from './context/adminContext/adminContext'
import {Route,Redirect} from 'react-router-dom'

const AdminPrivatetRoute=({component: Component, ...rest})=>{
    const {adminAuth}=useContext(AuthContext)
    return(
   <Route
   {...rest}
   render={props=> !adminAuth ? (<Redirect to='/signin'/>) : (<Component {...props} />)}
   
   />
    )
    
}

export default AdminPrivatetRoute