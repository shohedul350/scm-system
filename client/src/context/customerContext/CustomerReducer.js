import {
    GET_CUSTOMER,
    GET_SINGLE_CUSTOMER,
    ADD_CUSTOMER,
    SET_MESSAHE,
    UPDATE_CUSTOMER,
    CLEAR_MESSAGE,
    EDIT_FORM,
    CLEAR_EDITFORM,
} from '../type'



export default (state,action)=>{
    switch(action.type){
         case GET_CUSTOMER:
            return{
                ...state,
               customers: action.payload,
            }
          case GET_SINGLE_CUSTOMER:
            return{
                ...state,
               customer: action.payload,
            }

            case  UPDATE_CUSTOMER:
                return{
                ...state,
                customers:state.customers.map(customer=>customer._id === action.payload._id ? action.payload:customer)
                   }
         case SET_MESSAHE:
            return{
                ...state,
                message:action.payload
            }

            case EDIT_FORM:
                return{
                ...state,
                editForm:action.payload
                         
                }

          case CLEAR_EDITFORM:
                return{
                ...state,
                 editForm:null
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