import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AppRouter from './Routes/AppRouter';
import { useTheme } from './hooks/useTheme';
import { useEffect } from 'react';
 function App() {
  const { theme } = useTheme();
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);



return (
<div className='bg-white dark:bg-black text-black dark:text-white min-h-screen flex flex-col transition-colors duration-300'>
  <Navbar/>
  <AppRouter/>
<Footer/>

</div>
)



}
export default App;