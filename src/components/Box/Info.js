import "./Box.css";

function Info(title,poster) {
  return (
    <div className="container-infobox">
      <img src={poster} alt="" />
      <h4>{title}</h4>
      <p>
        {""}
      </p>
      
    </div>
  );
}

export default Info;
