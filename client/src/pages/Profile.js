import React from 'react'
import "./Pages.css"
import { useSelector } from 'react-redux'
const Profile = () => {
  const user = useSelector((state)=>state.useReducer.user)
  const LOAD_USER = useSelector((state)=>state.useReducer.LOAD_USER)
  return (
    <div className='bg'>Profile
      {
      LOAD_USER?<h1>loading</h1>:(<h1>welcome {user && user.Name}</h1>)}
      
    </div>
  )
}

export default Profile