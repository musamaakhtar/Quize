import React from 'react'
import "./newfile.css"
import Category from './component/Category'
import Header from './component/Header'
import HeroSection from "./component/HeroSection"
import Footer from './component/footer'
export default function App() {
  return (
    <>
     <Header/> 
     <HeroSection/> 
     <Category/>
     <Footer/>
    </>
  )
}
