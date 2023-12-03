import React from 'react'
import Card from './Card'
import './Product.css'
const Cards = ({data,search,searchProduct,setSearch}) => {
  return (
    <div className='cards'>
      <input 
        type="text"
        className='inputSearch'
        value={search}
        placeholder='Search product'
        onChange={(e) => setSearch(e.target.value)}
      />
   
    {searchProduct.length > 0 ? (
                    searchProduct.map((item, index) => (
                       <Card item={item} key={index}/>
                    ))
                ) : (
                    <p style={{margin:"50px auto", fontSize:"32px"}}>No matching products found.</p>
                )}


       </div>
  )
}

export default Cards