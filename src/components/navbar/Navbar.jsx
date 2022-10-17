import "./Navbar.css";
import logo from '../../assets/img/logo.png'

function Navbar() {
  return (
    <nav className="navbar container">
      <div className="logo">
        <img src={logo.png} alt="logo" className="ImgLogo" />
      </div>

      <div className="section">
        <div className="item">
          <span>PUFI PUF</span>
        </div>
        <div className="item">
          <span> PUFI RAIN </span>
        </div>
        <div className="item">
          <span> PUFI CART </span>
        </div>
        <div className="item">
          <span> PUFI NAP </span>
        </div>
      </div>

      <div className="shopping">
        <span>
          Mi cuenta <select> </select>{" "}
        </span>
        <span>Mi carrito</span>
      </div>
    </nav>
  );
}

export default Navbar;
