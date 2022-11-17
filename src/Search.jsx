import {React,useContext,useEffect,useState} from 'react'
import { searchContext } from './Contexts/SearchContext';
import axios from 'axios';
import SingleCoin from './SingleCoin';
import { Link } from 'react-router-dom';

const Search = () => {
    const {search,setSearch,allRecords,setRecords} = useContext(searchContext); 
    
    const [input,setInput]= useState("");

    console.log(input);
    const searchRecord = (input)=>{
      console.log(input);
      axios.get(`https://api.coingecko.com/api/v3/coins/${input}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`)
        .then((res)=> {console.log(res.data); setSearch(res.data);}).catch((err)=> console.log(err));
    }
      //getting global state from App.js
      useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
        .then((res)=> {setRecords(res.data);}).catch((err)=> console.log(err));
      }, []);
      console.log(search.name);
    console.log(allRecords);

  return (
    <div>
        <input type="text" placeholder='enter here' onChange={(e)=> setInput(e.target.value)} />

        <h2>{search.name}</h2>
        <button onClick={()=> {searchRecord(input)}} ><Link to={`/coinDetails/${search.name}`}>Search</Link> </button>
        
        {allRecords.map((coin,index)=> (
          <SingleCoin singlecoin={coin} key={index}/>
        ))}
       
        
    </div>
  )
}

export default Search