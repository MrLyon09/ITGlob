import './Footer.css'
import  face from '../../assets/img/face.ico'
import  inst from '../../assets/img/inst.ico'
import  twi from '../../assets/img/twi.ico'
import  bran from '../../assets/img/bran.png'
import  QR from '../../assets/img/QR.ico'
import  shield from '../../assets/img/shield.ico'



function Footer() {
  return (
    <div>
        <div className="container-main">

        <div className="footerlogo">
        
        </div>

        <div>
        <ul>
            <li>PUFI RAIN</li>
            <li>PUFI PUFF</li>
            <li>PUFI CART</li>
            <li>PUFI NAP</li>
        </ul>
        </div>

        <div>
        <ul>
            <li>CONTACTO</li>
            <li>AYUDA</li> 
            <li>CÓMO COMPRAR</li>
            <li>TÉRMINOS Y CONDICIONES</li>
        </ul>
        </div>

        <div className="secure-shop">
        <p>
            COMPRA 100% SEGURA <br></br>
            <ico icon={QR} /> {""}
            <shield icon={shield} />{" "}
            <span>
            COMPRA CON <br></br>GARANTIA DE PUFI
            </span>
        </p>
        </div>

        <div className="net">
        <p>
            SIGUENOS EN <ico icon={inst} />{" "}
            <face icon={face} />{" "}
            <ico icon={twi} />
        </p>
        </div>
        </div>

        <div className="container-copy">
        <p className="copyright">
        PUFI Copyright 2017 - Todos los derechos reservados
        </p>
        <img src={bran} alt="" className="brandlive" />
        </div>
    </div>
  )
}

export default Footer