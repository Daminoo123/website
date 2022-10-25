import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './pages/login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Home from './pages/Home';
import ListPosts from '../src/pages/itemlist/ListPosts'
import Forme from './pages/Forme';
import Erreur from './pages/Erreur'
import Navbar from './comonents/NavBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { CURRENT } from './redux/Actions/Actions';
import Edit from './pages/edit/Edit';
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    if (localStorage.getItem("token")){
      dispatch(CURRENT())
    }
  },[dispatch])
  return (
    <div className="App">
      <Navbar/>
      <Routes >
        <Route className='bg' path='/Home' element={<Home/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Form' element={<Forme/>}/>
        <Route path='/*' element={<Erreur/>}/>
        <Route path='/Itemlist' element={<ListPosts/>}/>
        <Route path='/Edit/:id' element={<Edit/>}/>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </div>
     
  );
}

export default App;
