import React from 'react'
import Navbar from '../components/Navbar'
import bg from '../assets/images/bg.jpg'
import arrow from '../assets/images/arrow.png'
import { Link } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'

function LandingPage() {
  return (
    <div >
    <Navbar/>
    <div className='w-screen h-[633px] bg-cover ' style={{backgroundImage:`url(${bg})`}}>
        <h1 className='text-white text-7xl pl-6 pt-56 font-serif '>organic fresh</h1>
        <h1 className='text-white text-7xl pl-6 pt-4 font-serif'>food</h1>
        <h1 className='text-white text-2xl pl-6 pt-8 font-serif'>Your Farm, Your Future - Let's</h1>
        <h1 className='text-white text-2xl pl-6 pt-2 font-serif'>Grow Farmer Together</h1>
        <button className='text-white rounded-md bg-green-500 hover:bg-green-900 hover:scale-90 px-3 p-2 ml-6 mt-3'><Link to='/signup'>Get Started</Link></button>
        <h1 className='text-white text-center pt-5 text-xl font-bold'> Discover more</h1>
        <div className='flex justify-center'><img className='w-6 h-6 ' src={arrow} alt="" /></div>
    </div>
    <div><Signup/></div>
    <div><Login/></div>
    </div>
  )
}

export default LandingPage