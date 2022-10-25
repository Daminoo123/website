import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar , Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/Actions/Actions';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const isAuth = useSelector((state)=>state.useReducer.isAuth)
  const user = useSelector((state)=>state.useReducer.user)
  const dispatch=useDispatch()
  let isAdmin=false;
  if(user.email==='hamza@gmail.com'){
    isAdmin=true
  }
  
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Damino</Navbar.Brand>
          <Nav className="me-auto">
           
            {isAuth?(
              <div>
                <Link to='/Home'>home</Link> 
            <Button href='/login' onClick={()=>dispatch(logout())} >logout</Button>
            <Link to="/Profile">Profile</Link>
            <Link to="/Itemlist">Posts</Link>
           {isAdmin?(
           <div>
           <Link to="/Form"> form </Link>
           </div>):null}
            
              </div>):(<div>
              <Link to="/login">Login</Link>
              <Link to='/' >register</Link>
            </div>)
            }
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  )
}

export default NavBar