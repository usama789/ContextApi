import React from 'react'

const Favourite = () => {
    let favourite= localStorage.getItem('favourite');
  return (
    <div>Favourite
        <h2>{favourite}</h2>
    </div>
  )
}

export default Favourite