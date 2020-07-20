import {
    SUCCES_REGISTER,
    SUCCES_LOGIN,
    SET_MESSAHE,
    CLEAR_MESSAGE,
    LOG_OUT,
    SET_ADMIN,
} from '../type'

export default (state,action)=>{
    switch(action.type){

        case SET_ADMIN:
            return{
                ...state,
                admin:action.payload,
                message:null
            }
        case SUCCES_REGISTER:
            return{
                ...state,
                message:action.payload
            }
        case SUCCES_LOGIN:
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                adminAuth:true,
                message:action.payload
            }

        case SET_MESSAHE:
            return{
                ...state,
                message:action.payload
            }
        case LOG_OUT:
            localStorage.removeItem('token')
              return{
                  ...state,
                  admin:null,
                  adminAuth:null,
                  message:null
              }
         
        case CLEAR_MESSAGE:
                 return{
                     ...state,
                     message:null
                 }

             
        

        default:
            return state
    }
}