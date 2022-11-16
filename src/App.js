import './App.css';
import { useState } from 'react';
import Search from './Search';
import { searchContext } from './Contexts/SearchContext';
import Login from './Login';
function App() {
  const [search, setSearch] = useState({});    //passing valyue through context provider

  return (
    <div className="App"> 
      <searchContext.Provider value={{search,setSearch}}>   
      <Search />
      <Login />
      </searchContext.Provider>
    </div>
  );
}

export default App;
