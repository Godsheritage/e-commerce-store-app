import React from 'react'

const Footer:React.FC = () => {
 
  const d = new Date();
  const year = d.getFullYear();



  return (
    <div className='footer'>
        <h6> &copy; {year} All Rights reserved</h6>
    </div>
  )
}

export default Footer