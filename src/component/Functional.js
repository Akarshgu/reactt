import React from 'react'

const FunctionalComponent = () => {
  return (
     <div id="boxFunc">
          <h3 style={{padding:"10px"}}>It was made by using Functional Component</h3>
          <p className='externalcss'>This is done by using external CSS</p>
          <p style={{color:"white", fontSize:"18px"}}>This is done by using internal CSS</p>
     </div>
  )
}

export default FunctionalComponent
