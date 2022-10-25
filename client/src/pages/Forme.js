import React, { useState } from 'react'
import { createPost } from '../redux/Actions/Actions'
import { useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const Forme = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [newPost,setNewPost]=useState({})
  const handleChange=(e)=>{
    setNewPost({...newPost,[e.target.name]:e.target.value})
  }
  const handleAdd=()=>{
    dispatch(createPost(newPost))
    navigate('/Itemlist')
  }
  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>creator</Form.Label>
        <Form.Control  type="text" placeholder="creator" onChange={handleChange} name='creator'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>title</Form.Label>
        <Form.Control type="password" placeholder="title" onChange={handleChange} name='title'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>paragraph</Form.Label>
        <Form.Control  type="text" placeholder="paragraph"onChange={handleChange} name='paragraph' />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleAdd}>
        Submit
      </Button>
    </Form>

    </div>
  )
}
export default Forme