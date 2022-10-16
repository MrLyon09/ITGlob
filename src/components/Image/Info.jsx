import "./Images.css";

function Info() {
  return (
    <div className="container-image">
      <img src={img} alt="umbrella" />
      <h4>{title}</h4>
      <p>
        {" "}
        Paraguas Strombergbrand Umbrellas, estilo popular, cierre automático, pequeño, ligero, portátil, compacto, plegable, para viaje, unisex, Negro, 42EZF
        {" "}
      </p>
      <Link to={"/"} className="info">
        VER MÁS
      </Link>
    </div>
  );
}

export default Info;
