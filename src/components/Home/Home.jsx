import React from 'react'
import './Home.css'
import sombra from '../../assets/img/sombra.jpeg'
//import umbrella from '../../assets/img/umbrella.jpeg'
import Umbrella_ico from '../../assets/img/Umbrella_ico.png'
//import Info from '../Box/Info';

function Home() {
  return (
    <>
    <div className='grid-container'>
      <div className="grid-item1">
        SHOP
        <img src={sombra} alt=""/>
        <h2>WELCOME</h2>
      
      </div>

      <div className="grid-item1" >
        Pufi RAIN
        <img src={Umbrella_ico} alt=""/>
        <h2>WELCOME</h2>
      </div>
      <div className="grid-item">Pufi PUFF</div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item">Pufi CART</div>
      <div className="grid-item">Pufi NAP</div>
      <div className="grid-item"></div>
    </div>
    </>
  
  )
}

export default Home;