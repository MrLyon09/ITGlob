import React from 'react'
import './Home.css'
//import sombra from '../../assets/img/sombra.jpeg'
import pufIco from '../../assets/img/pufIco.png'
import puffPlaya from '../../assets/img/puffPlaya.jpg'
import Umbrella_ico from '../../assets/img/Umbrella_ico.png'
//import Info from '../Box/Info';

const sombra = new URL('../../assets/img/sombra.jpeg', import.meta.url)


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

      <div className="grid-item">
        Pufi PUFF
        <img src={pufIco} alt="" />
        <h2>Description of product. This text is simulation</h2>
        </div>
      <div className="grid-item">
      <img src={puffPlaya} alt=""/>
        
      </div>
      <div className="grid-item"></div>
      <div className="grid-item">
        Pufi CART
        
      </div>
      <div className="grid-item">Pufi NAP</div>
      <div className="grid-item"></div>
    </div>
    </>
  
  )
}

export default Home;