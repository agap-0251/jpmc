import React from 'react'
import NavBar from './NavBar'

const MainContainer = ({children}) => {
  return (
    <div className='min-h-dvh flex flex-col items-center'>
        <NavBar />
        {children}
    </div>
  )
}

export default MainContainer