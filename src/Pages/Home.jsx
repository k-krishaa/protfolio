import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import WeatherApp from '../Components/Weather'
import NewsApp from '../Components/News'

const Home = () => {
  return (
   
    <div>
     
        
           <Link to='/users'  className='text-black underline'>
           View Users
           </Link>
           <WeatherApp/>
           <NewsApp/>
           
         
    </div>
    
  )
}

export default Home