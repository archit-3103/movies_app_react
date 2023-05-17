import React, {useContext} from 'react'
import { Moviesprovider } from './Moviescontext'

function Navbar(){

    const obj=useContext(Moviesprovider)
    return <div>
    <h1 style={{backgroundColor:'teal'}}> No of Movies:{obj.movies.length}</h1>
    </div>
}
export default Navbar
