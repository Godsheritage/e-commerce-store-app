import React from 'react'


interface itemProps {
    items: {id:number; name:string; description:string}
}

const shopItems: React.FC<itemProps> = ({items}) => {
  return (
    <div className='card'>
        <h1>{items.name}</h1>
        <p>{items.description}</p>
        <button className='btn btn-primary' >Add to cart</button>
    </div>
  )
}

export default shopItems