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
<div className='bg-rose-200 dark:bg-rose-900 text-rose-900 dark:text-rose-100 min-h-screen flex flex-col transition-colors duration-300'>
  <Navbar/>
  <AppRouter/>
<Footer/>

</div>
)



}
export default App;