import React from 'react'
import Vertical from './Vertical'
import { Outlet } from 'react-router-dom'

const Page = () => {
  return (
    <div className='grid grid-flow-col'>
    <Vertical/>
      <Outlet/>
    </div>
  )
}

export default Page
