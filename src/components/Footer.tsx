import React from 'react'

const Footer:React.FC = () => {
 
  const d = new Date();
  let year = d.getFullYear();



  return (
    <div className='footer'>
        <h5> &copy; {year} All Rights reserved</h5>
    </div>
  )
}

export default Footer