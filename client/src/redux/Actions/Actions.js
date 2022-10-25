import axios from "axios";
import { LOAD_POSTS,GET_POST,FAIL_POSTS,GET_POSTS} from "../actiontypes.js/posts"
import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGOUT_USER, REGISTER_USER } from "../actiontypes.js/user";
export const register = (newUser)=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        let result = await axios.post("/api/users/register",newUser)
        dispatch({type:REGISTER_USER,payload:result.data})
    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.response.data.errors})
    }
}
export const login = (user) => async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        let result = await axios.post('/api/users/login',user)
        dispatch({type:REGISTER_USER,payload:result.data})
    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.response.data.errors})
        
    }
}
export const CURRENT=()=>async (dispatch)=>{

    dispatch({type:LOAD_USER})
    try {
        const config = {
            headers:{
                authorization :localStorage.getItem("token")
            },
        }
        let result=await axios.get('/api/users/current',config)
        dispatch({type:CURRENT_USER,payload:result.data})
    } catch (error) {
        dispatch({type: FAIL_USER,payload:error.response.data.errors})
    }
}

export const logout = ()=> async(dispatch)=>{
    dispatch({type:LOGOUT_USER})
} 
export const getPosts = ()=>async(dispatch)=>{
  dispatch({type:LOAD_POSTS})
    try {
      let result = await axios.get('/api/posts/all-post')
      dispatch({type:GET_POSTS,payload:result.data})
    } catch (error) {
      dispatch({type:FAIL_POSTS,payload:error.response})
    }
}

export const createPost = (newPost) => async (dispatch) => {
  try {
    await axios.post("/api/posts/add",newPost)
    dispatch(getPosts())
  } catch (error) {
    dispatch({type:FAIL_POSTS,payload:error.response})
  }
}

export const editPost = (id, newPost) => async (dispatch) => {
  try {
    await axios.put(`/api/posts/${id}`,newPost)
    dispatch(getPosts())
  } catch (error) {
    dispatch({type:FAIL_POSTS,payload:error.response})
  }
}
export const deletePost = (id) => async (dispatch) => {
  try {
     await axios.delete(`/api/posts/${id}`)
     dispatch(getPosts())
  } catch (error) {
    dispatch({type:FAIL_POSTS,payload:error.response})
  }}

  export const getPost=(id)=>async(dispatch)=>{
    dispatch({type:LOAD_POSTS})
    try {
      let result = await axios.get(`/api/posts/${id}`)
      dispatch({type:GET_POST,payload:result.data.postToGet})
    } catch (error) {
      dispatch({type:FAIL_POSTS,payload:error.response})
    }
  }