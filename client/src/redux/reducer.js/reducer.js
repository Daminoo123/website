import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGOUT_USER, REGISTER_USER } from "../actiontypes.js/user"

const initialState ={
    user:{},
    loadUser:false,
    errors:[],
    isAuth:false
}
const useReducer=(state=initialState,{type,payload})=>{
   switch (type) {
    case LOAD_USER:
        return {...state,loadUser:true}
        case REGISTER_USER:
            localStorage.setItem("token",payload.token)
            return{...state,loadUser:false,user:payload.user,isAuth:true}
        case FAIL_USER :
            return {...state,loadUser:false,errors:payload}
        
        case CURRENT_USER:
            return {...state,user:payload,loadUser:false,isAuth:true}
        
        case LOGOUT_USER:
            localStorage.removeItem("token")
            return{user:{},loadUser:false,errors:[],isAuth:false}
    default:
        return state;
   }
}
export default useReducer