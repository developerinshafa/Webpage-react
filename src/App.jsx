import { useState } from 'react'
import viteLogo from '/vite.svg'
import Header from "./components/Header"
import Section from "./components/Section"
import ListItem from './components/ListItem'
import Content from './components/Content'
import Footer from "./components/Footer"
import './App.css'

function App() {

  return (
    <>
   
    <Header/>

    <Section/>

    <h2 className="text-3xl p-2 font-bold bg-amber-100 "> Explore Top Destination:</h2>
    <ul className="text-xl grid gap-2 bg-amber-100 font-semibold ">

      {/* <ListItem place="Sigiriya Rock Fortress"/>
      <ListItem place="Kandy"/>
      <ListItem place ="Galle"/>
      <ListItem place ="Nuwara Eliya"/>
      <ListItem place ="Ella"/>
      <ListItem place ="Dambulla Cave Temple"/> */}
     
      <li className='bg-amber-900 text-white hover:bg-amber-400 space-x-2 p-2'>Dubai</li>
      <li className='bg-amber-900 text-white hover:bg-amber-400 space-x-2 p-2'>Sri Lanka</li>
      <li className='bg-amber-900 text-white hover:bg-amber-400 space-x-2 p-2'>Thailand</li>
      <li className='bg-amber-900 text-white hover:bg-amber-400 space-x-2 p-2'>Malaysia</li>
      <li className='bg-amber-900 text-white hover:bg-amber-400 space-x-2 p-2'>Singapore</li>
      <li className='bg-amber-900 text-white hover:bg-amber-400 space-x-2 p-2'>Bangkok</li>
    </ul>

    <Content/>
   
      <div className='flex space-x-5 p-2'>
        <img src="./public/-Maldives.webp" alt=""  className='w-60'/>
        <img src="./public/Malaysia.jpg" alt="" className='w-60'/>
        <img src="./public/Tajmahal.avif" alt="" className='w-60'/>
        <img src="./public/Segriya.jpg" alt="" className='w-60'/>
      </div>

    <Footer/>


      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      
    </>
  )
}

export default App
