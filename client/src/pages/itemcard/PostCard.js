import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'; 
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../../redux/Actions/Actions';
import { useSelector } from 'react-redux';

const PostCard = ({post}) => {
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state)=>state.useReducer.user)
  let isAdmin=false;
  if(user.email==='hamza@gmail.com'){
    isAdmin=true
  }
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{post.creator}</ListGroup.Item>
        <p>{post.paragraph}</p>
        <ListGroup.Item> post creator:{user && user.Name}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        { isAdmin?(<div>
        <Button onClick={()=>navigate(`/Edit/${post._id}`)} >edit</Button>
        <Button onClick={()=>dispatch(deletePost(post._id))}>delete</Button>
        </div>):
        null
}
      </Card.Body>
    </Card>
  )
  }

export default PostCard