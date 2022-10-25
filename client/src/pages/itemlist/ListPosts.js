import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import PostCard from '../itemcard/PostCard'
import { getPosts } from '../../redux/Actions/Actions'
import './Cards.css'
const ListPosts = () => {
    const dispatch = useDispatch()
    const listPosts= useSelector(state=>state.postreducer.listPosts)
    const load =useSelector(state=>state.postreducer.loadUser)
    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch])
  return (
    <div className='postlist'>
     {load?<h1>loading</h1>:listPosts.map((el)=><PostCard post={el} key={el._id}/>) }  
    </div>
  
)  }

export default ListPosts