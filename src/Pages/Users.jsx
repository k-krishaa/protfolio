import React from 'react'
import { Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <div className='px-6'>Users
      <h2 className='text-2xl font-bold mb-4'>Users section</h2>
      <Outlet/>
    </div>
  )
}

export default Users