import React from 'react'

const Button = (prop) => {
  return (
    <div className='btn'>
        <button  onClick={prop.callAPI}> Joke Genrator</button>
    </div>
  )
}

export default Button
