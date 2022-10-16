import './Image.css'

function Container({image, children}) {
  return (
    <div className='container-img' style={{backgroundImage: `url(${image}`}}>
        {children}
    </div>
  )
}

export default Container;