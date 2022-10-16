import './Image.css'

function Container({image, children}) {
  return (
    <div className='container-image' style={{backgroundImage: `url(${image}`}}>
        {children}
    </div>
  )
}

export default Container;