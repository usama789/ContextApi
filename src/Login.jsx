import {React,useContext} from 'react'
import { searchContext } from './Contexts/SearchContext';
const Login = () => {
    const {search} = useContext(searchContext);
  return (
    <div>Login Component

        <h2>{search.name}</h2>
    </div>
  )
}

export default Login