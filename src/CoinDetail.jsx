import axios from 'axios';
import {React,useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';


const CoinDetail = () => {
  const {coinId}= useParams();
  const [coinDetail,setcoinDetail]= useState({});
  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`)
    .then((res)=> {console.log(res.data); setcoinDetail(res.data);}).catch((err)=> console.log(err));
  }, [])

  return (
    <div>CoinDetail
      <h2>My COIN is: {coinId}</h2>
      <h1>{coinDetail.name}</h1>
    </div>
  )
}

export default CoinDetail;