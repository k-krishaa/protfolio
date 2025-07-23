import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import WeatherApp from '../Components/Weather'
import NewsApp from '../Components/News'
import Portfolio4 from '../Components/hero'

import TypingTest from '../Components/Typingtext'
import NewsList from '../Components/NewsList'

const Home = () => {
  return (
   
    <div>
     <Portfolio4/>
     <NewsList/>
     <TypingTest/>
        
           <Link to='/users'  className='text-black underline'>
           View Users
           </Link>
           <WeatherApp/>
           <NewsApp/>

           
         
    </div>
    
  )
}

export default Home