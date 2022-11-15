import {React,useContext} from 'react'
import { searchContext } from './Contexts/SearchContext';

const Search = () => {
    const {search,setSearch} = useContext(searchContext);
  return (
    <div>
        <input type="text" placeholder='enter here' />
        <h2>{search.name}</h2>
        
    </div>
  )
}

export default Search