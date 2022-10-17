import './Header.css';
import Navbar from "../navbar/Navbar";


function Header() {
  return (
    <header className="container-header">
        <Navbar />
        
        <h3 className='text-header'>ESTAR COMODO, <br></br>NUNCA FUE TAN FACIL</h3>

        <div className="btn-shop">
          <button>SHOP</button>
        </div>

    </header>
  )
}

export default Header;
