import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar container">
      <div className="logo">
        <img src="logo.png" alt="logo" className="ImgLogo" />
      </div>

      <div className="section">
        <div className="item">
          <img src="" alt="" />
          <span>PUFI PUF</span>
        </div>
        <div className="item">
          <img src="umbrella.ico" alt="" />
          <span> PUFI RAIN </span>
        </div>
        <div className="item">
          <img src="" alt="" />
          <span> PUFI CART </span>
        </div>
        <div className="item">
          <img src="" alt="" />
          <span> PUFI NAP </span>
        </div>
      </div>

      <div className="shop">
        <span>
          Mi cuenta <select> </select>{" "}
        </span>
        <span>Mi carrito</span>
      </div>
    </nav>
  );
}

export default Navbar;
