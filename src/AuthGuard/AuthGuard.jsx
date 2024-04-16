import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { UseSelector,useDispatch } from 'react-redux'
import { setToken,selectToken } from '../redux/tokenSlice'

function AuthGuard() {
    const navigate= useNavigate()
  return (
    <>
    
    </>
  )
}

export default AuthGuard