import React, {useContext} from 'react'
import { Moviesprovider } from './Moviescontext'
function Movieslist(){
    const obj=useContext(Moviesprovider)
    const movieslist=obj.movies.map((movie)=>{
        return <div>
            <h1> {movie.moviename}</h1>
            <p> directed By {movie.directorname}</p>
        </div>
    })
    return <div>
        <h1 style={{backgroundColor:'green'}}> Movies List</h1>
        {movieslist}
    </div>
}
export default Movieslist
