import { GET_POST,GET_POSTS, LOAD_POSTS, FAIL_POSTS } from "../actiontypes.js/posts"


const initialState={
  listPosts:[],
  errors:null,
  load:false,
  postToGet:{}
}
 const postreducer= (state=initialState,{type,payload}) => {
 switch(type){
  case LOAD_POSTS:
    return{...state,load:true}
  case GET_POSTS:
    return {...state,load:false,listPosts:payload.listPosts}
   case GET_POST:
    return {...state,load:false,postToGet:payload}
  case FAIL_POSTS:
  return{...state,load:false,errors:payload}
  default : 
  return state;
 }
}
export default postreducer