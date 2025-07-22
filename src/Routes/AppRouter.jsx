import React from 'react'
import { Route, Routes } from 'react-router-dom'
import User from '../Components/User'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Project from '../Pages/Project'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Users from '../Pages/Users'
import UserDetail from '../Pages/UserDetail'
import UserList from '../Pages/UserList'


function AppRouter() {
  return (
    
  <Routes> 
   
    <Route path='/'element={<Home/>}/>
    <Route path='/dashboard'/>
      <Route path='/profile'/>
        <Route path='/setting'/>
      
       

    

  <Route>
    <Route path="/" element={<Home/>}
   />

   <Route path="/aboutme" element={<About/>}
   />
   <Route path="/contact" element={<Contact/>}
   />
   <Route path="/projects" element={<Project/>}

   />
    <Route path="/Login" element={<Login/>}
   />
   <Route path="/Users" element={<Users/>}
   /> 
   </Route>

 
  <Route>
    <Route path='/users' element={<Users/>}>
       <Route index element={<UserList/>}/>
       <Route path=':id'element={<UserDetail/>}/>
 
    </Route>
  </Route>
  </Routes>

   
  )
}

export default AppRouter
