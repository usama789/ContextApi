import React from 'react'

const SingleCoin = ({singlecoin}) => {
    console.log(singlecoin);
  return (
    <div>
        <h1>{singlecoin.name}</h1>
        <img src={singlecoin.image}/>
    </div>
  )
}

export default SingleCoin