import './App.css';
import { useState } from 'react';
import Search from './Search';
import { searchContext } from './Contexts/SearchContext';
import Login from './Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import CoinDetail from './CoinDetail';
function App() {
  const [search, setSearch] = useState({});    //passing valyue through context provider
  const [allRecords, setRecords] = useState([]); 

  return (
    <searchContext.Provider value={{search,setSearch,allRecords,setRecords}}>   
    <Router>
    <Routes>
      
      
        <Route path='/coins' exact element={<Search />} />
        <Route path='/coinDetail/:coinId' exact element={<CoinDetail />} />
      
     
      
    </Routes>
    </Router>
    </searchContext.Provider>
    
  );
}

export default App;
