import React from 'react'
import './Product.css'

const Card = ({item}) => {
  return (
    
    <div className='card'>
        <p className='id'>{item.id}</p>
        <img src="https://riverwalkcounseling.net/wp-content/uploads/2018/06/image-placeholder-female-1.png" alt="" />
        <div className='cardBody'>
<h3>{item.name}</h3>
<p><b>E-mail: </b>{item.email}</p>

        </div>
    </div>
  )
}

export default Card