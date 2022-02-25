import React from 'react'


interface itemProps {
    items: {id:number; name:string; description:string}
}

const shopItems: React.FC<itemProps> = ({items}) => {
  return (
    <div>shopItems</div>
  )
}

export default shopItems