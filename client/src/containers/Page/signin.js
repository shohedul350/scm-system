import React,{useState,useContext,useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import IntlMessages from '../../components/utility/intlMessages';
import SignInStyleWrapper from './signin.style';
import AdminContext from "../../context/adminContext/adminContext";
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
  return (
    <div>
            <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
             
                <IntlMessages id="LogIn Your Account" />
           
            </div>
            <form onSubmit={e=>onSubmit(e)}>
            <div className="isoSignInForm">
              <div className="isoInputWrapper">
                <Input size="large" 
                placeholder="Username"
                name="email"
                value={email}
                onChange={e=> onChange(e)} />
              </div>

              <div className="isoInputWrapper">
                <Input size="large" 
                type="password" 
                placeholder="Password" 
                name="password"
                value={password}
                onChange={e=> onChange(e)}/>
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>
                  <IntlMessages id="page.signInRememberMe" />
                </Checkbox>
                <Button type="primary" htmlType="submit">
          Login
        </Button>
              </div>

              {/* <p className="isoHelperText">
                <IntlMessages id="email d" />
              </p> */}

              <div className="isoCenterComponent isoHelperWrapper">
                <Link to="/forgotpassword" className="isoForgotPass">
                  <IntlMessages id="page.signInForgotPass" />
                </Link>
            
              </div>
              <div className="question">
            
           
              {message !== null && <button className="alert alert-danger">
              {message.msg ? message.msg : message.message[0].msg}
                 <span onClick={()=>clearMessage()}>X</span>
              </button>
                }
            </div>  
                
            </div>
            </form>
          </div>
        </div>
      </SignInStyleWrapper>
    </div>
  )
}



