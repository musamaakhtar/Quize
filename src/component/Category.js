import React from 'react'
import GeoGraphy from '../image/geoGraphy.png'
import Phy from '../image/phy.png'
import History from '../image/history.png'
import Lamp from '../image/lampppp.png'
import Bio from '../image/bio.png'
import Che from '../image/chemistry.png'


export default function Category() {
  return (
    <div>
        <center id='category_head'>Choice your best Quiz Category</center>
        <center id='category_p'>Make learning fun for your students, trainees, and attendees with a <br/> modern take on quizzes.</center>
      <div className="container">
        <div className="row category_container">
            <div className="col-10 mx col-md-4 col-lg-3">
                <img src={GeoGraphy} alt="" />   
                <h1>Geography</h1>  
                <button>Get Started</button>       
            </div>
            <div className="col-10 mx col-md-4 col-lg-3">
            <img src={Phy} alt="" />   
                <h1>Physics</h1>  
                <button>Get Started</button> 
            </div>
            <div className="col-10 mx col-md-4 col-lg-3">
            <img src={History} alt="" />   
                <h1>History</h1>  
                <button>Get Started</button> 
            </div>
            
            <div className="col-10 mx col-md-4 col-lg-3">
            <img src={Che} alt="" />   
                <h1>Biology</h1>  
                <button>Get Started</button> 
            </div>
            <div className="col-10 mx col-md-4 col-lg-3">
            <img src={Bio} alt="" />   
                <h1>Chemistry</h1>  
                <button>Get Started</button> 
            </div>
            <div className="col-10 mx col-md-4 col-lg-3">
            <img src={Lamp} alt="" />   
                <h1>Literature</h1>  
                <button>Get Started</button> 
            </div>
        </div>

      </div>
    </div>
  )
}
