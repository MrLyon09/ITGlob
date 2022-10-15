import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar space-between">
      <div className="logo">
        <img
          src=""
          alt="logo"
          className="ImgLogo"
        />
      </div>

      <div className="section">
        <div className="section-item">
          <img src=""  alt=""/>
          <span>PUFI PUF</span>
        </div>
        <div className="section-item">
          <img src="umbrella.ico" alt=""/>
          <span> PUFI RAIN </span>
        </div>
        <div className="section-item">
          <img src="" alt="" />
          <span> PUFI CART </span>
        </div>
        <div className="section-itemlast">
          <img src="" alt=""/>
          <span> PUFI NAP </span>
        </div>
      </div>

      <div className="section-shop">
        <span>
          Mi cuenta <select> </select>{" "}
        </span>
        <span>Mi carrito</span>
      </div>
    </nav>
  );
}

export default Navbar;
