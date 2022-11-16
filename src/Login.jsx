import {React,useContext,useEffect,useState} from 'react';
import { searchContext } from './Contexts/SearchContext';
import axios from 'axios';
const Login = () => {
    const {search} = useContext(searchContext);
    const [record,setRecord] = useState([]);
    console.log(record);
    // useEffect(() => {
    // axios.get("https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true")
    // .then((res)=> {console.log(res.data); setRecord(res.data);}).catch((err)=> console.log(err));
    // }, [record]);    //this will help you in update of state or update of api
    
  return (
    <div>Login Component

        <h2>{record.id}</h2>
        <h2></h2>
        
    </div>
  )
}

export default Login