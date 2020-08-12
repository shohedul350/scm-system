import React, { useState, useContext, useEffect,Fragment } from "react";
import { Link, Redirect } from 'react-router-dom';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import IntlMessages from '../../components/utility/intlMessages';
import AdminContext from "../../context/adminContext/adminContext";
import SignInStyleWrapper from './signin.style';
export default function Signin(props) {

const {loginAdmin,adminAuth,message,clearMessage} = useContext(AdminContext);
 console.log(message,'message')
  useEffect(()=>{
    if(adminAuth){
props.history.push('/dashboard')
    }
  },[adminAuth,props.history])
  const [formData,setFormData]=useState({
          email:"",
          password:"",
       
      });
 const {email,password}=formData

const onSubmit=e=>{
    e.preventDefault();
    console.log({email,password})
    loginAdmin({email, password});
    clearMessage()
    }


const onChange=e=>{setFormData({...formData,[e.target.name]:e.target.value}); }
  return <div className="conatiner">

             <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-center display-6">Login Here</h1>
            <form onSubmit={e=>onSubmit(e)}>
             
              <div className="form-group">
                <label htmlFor="email"> Email: </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  name="email"
                  value={email}
                  onChange={e=> onChange(e)}
                />
               
              </div>
              <div className="form-group">
                <label htmlFor="password"> Password: </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Your Password"
                  name="password"
                  value={password}
                  onChange={e=> onChange(e)}
                />
              </div>
  
              <div className="question">
                {message !== null && <button className="danger">
                {message.msg ? message.msg : message.errors[0].msg}
                   <span onClick={()=>clearMessage()}>X</span>
                </button>
                  }
              </div>
              <Link to="/register" className="text-primary">Don no have Account? Register Here</Link>
              <button className="btn btn-primary my-3 d-block">login</button>
            </form>
          </div>
        </div>
      
  
      </div>
}



