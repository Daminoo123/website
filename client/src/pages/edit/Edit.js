import React, { useEffect } from 'react'
import {  useNavigate, useMatch } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { editPost, getPost } from '../../redux/Actions/Actions'
import {Form,Button} from 'react-bootstrap'
import { useState } from 'react'

const Edit = () => {
  console.log('hello')
  const dispatch=useDispatch()
   const match = useMatch('/Edit/:id')
   const postToGet= useSelector(state=>state.postreducer.postToGet)
   const navigate=useNavigate()
   const [newPost,setNewPost]=useState({})
   const handleChange=(e)=>{
    setNewPost({...newPost,[e.target.name]:e.target.value})
   }
   useEffect(()=>{
    dispatch(getPost(match.params.id))
   },[dispatch])
   const handleEdit=()=>{
    dispatch(editPost(match.params.id,newPost))
    navigate('/Itemlist')
   }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>title</Form.Label>
        <Form.Control  type="text" placeholder="title" onChange={handleChange} name='creator'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>creator</Form.Label>
        <Form.Control type="text" placeholder="creator" onChange={handleChange} name='title'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>paragraph</Form.Label>
        <Form.Control  type="text" placeholder="paragraph"onChange={handleChange} name='paragraph' />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleEdit}>
        edit
      </Button>
    </Form>
  )
}

export default Edit



