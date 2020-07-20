import {
    SHOW_PRODUCT,
    SINGLE_PRODUCT,
    SEARCH_PRODUCT,
    LETEST_PRODUCT,
    ADD_CART,
    CLEAR_CART,
    ADD_TOTAL,
    REMOVE_ITEM,
    INCREMENT_ITEM,
    DECREMENT_ITEM,
    ADD_CATEGORIES,
    DELETE_CATEGORIES,
    GET_CATEGORIES,
    SET_MESSAHE,
    CLEAR_MESSAGE,
    MAKE_PAYMENT
} from '../type'



export default (state,action)=>{
    switch(action.type){

        case SHOW_PRODUCT:
            return{
                ...state,
                products:action.payload,
            }
        case SINGLE_PRODUCT:
            return{
                ...state,
                product:action.payload,
            }
        case SEARCH_PRODUCT:
                return{
                    ...state,
                    searchProduct:action.payload,
                }
    case LETEST_PRODUCT:
            return{
                ...state,
                products:action.payload,
            }          
                
        case ADD_CART:
                return{
                    ...state,
                    products:action.payload.tempProduct,
                    cart:[...state.cart,action.payload.product]
                }
        case CLEAR_CART:
            
            return{
                ...state,
                cart:[],
            }
        case ADD_TOTAL:
            return{
                ...state,
                cartSubTotal:action.payload.subTotal,
                cartTax:action.payload.tax,
                cartTotal:action.payload.total
            }
         case REMOVE_ITEM:
                return{
                    ...state,
                   cart:[...action.payload.tempCart],
                }
        case INCREMENT_ITEM:
                return{
                    ...state,
                   cart:[...action.payload],
                }

        case DECREMENT_ITEM:
                return{
                    ...state,
                   cart:[...action.payload],
                }
    
        case GET_CATEGORIES:
                        return{
                            ...state,
                            categories:action.payload,
                 }
         case ADD_CATEGORIES:
                    return{
                        ...state,
                       message:action.payload,      
             }

        case  DELETE_CATEGORIES:
                return{
                    ...state,
                    message:action.payload
         }
         case SET_MESSAHE:
            return{
                ...state,
                message:action.payload
            }
        case CLEAR_MESSAGE:
                return{
                    ...state,
                    message:null
                }
                case MAKE_PAYMENT:
                    return{
                        ...state,
                        orderReceive:action.payload
                    }

        default:
            return state
    }
}