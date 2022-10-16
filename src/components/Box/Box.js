import './Box.css';

function Box({children, image}) {
  return (
    <div className='container-box' style={{backgroundImage: `url(${image}`}}>
        {children}
    </div>
  );
}

export default Box;