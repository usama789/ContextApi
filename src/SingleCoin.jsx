import {React,useState} from 'react'
import { Link } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

const SingleCoin = ({singlecoin}) => {
    console.log(singlecoin);
    const [favouriteCoin,setFavourite]= useState([]);
    const [storageItem, setStorageItem] = useLocalStorage(
      "favourites",
      JSON.stringify([])
    );
  return (
    <div>
        <h1>{singlecoin.name}</h1>
        <img src={singlecoin.image}/>
        <button><Link to={`/coinDetail/${singlecoin.id}`}>Search</Link> </button>
        <button onClick={()=> {
          setStorageItem(JSON.stringify([...JSON.parse(storageItem), singlecoin.id]));
      }}>favourite</button>
        
    </div>
  )
}

export default SingleCoin