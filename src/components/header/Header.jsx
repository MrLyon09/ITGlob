import './Header.css';
import Navbar from "../navbar/Navbar";


function Header() {
  return (
    <header className="container-header">
        <Navbar />
        <h2 className='text-header'>ESTAR COMODO, <br></br>NUNCA FUE TAN FACIL</h2>
        <div className="inside-btn">SHOP</div>
    </header>
  )
}

export default Header;
