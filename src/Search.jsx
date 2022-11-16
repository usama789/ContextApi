import {React,useContext,useEffect,useState} from 'react'
import { searchContext } from './Contexts/SearchContext';
import axios from 'axios';

const Search = () => {
    const {search,setSearch} = useContext(searchContext); 
    const [input,setInput]= useState("");

    console.log(input);
    const searchRecord = (input)=>{
      console.log(input);
      axios.get(`https://api.coingecko.com/api/v3/coins/${input}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`)
        .then((res)=> {console.log(res.data); setSearch(res.data);}).catch((err)=> console.log(err));
    }
      //getting global state from App.js
      useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${input}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`)
        .then((res)=> {console.log(res.data); setSearch(res.data);}).catch((err)=> console.log(err));
      }, []);
      console.log(search);
  return (
    <div>
        <input type="text" placeholder='enter here' onChange={(e)=> setInput(e.target.value)}/>
        <h2>{search.name}</h2>
        <button onClick={()=> {searchRecord(input)}} >Search </button>
        
    </div>
  )
}

export default Search