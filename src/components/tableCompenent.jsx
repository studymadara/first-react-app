import React,{ Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like";

class TableCompenent extends Component 
{
    constructor() 
    {
        super();
    }
    
    state = {  
        movies : getMovies()
    }
    
    render() 
    { 
        return ( <React.Fragment><h1>Table Content From REACT</h1>{this.renderSpan()}{this.renderMoviesInTable()}</React.Fragment> );
    }

    renderSpan()
    {
        return (this.state.movies.length!=0?<h1>Content Size is {this.state.movies.length}</h1>:<h1>There are no movies to display</h1>);
    }

    renderMoviesInTable()
    {
        return (<table>
            <thead>
            <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {this.state.movies.map((movie) => ( <tr>
                                                <td> {movie.title} </td>
                                                <td> {movie.genre.name} </td>
                                                <td> {movie.numberInStock} </td>
                                                <td> {movie.dailyRentalRate} </td>
                                                <td><Like/></td>
                                                <td><button onClick={()=>this.removeElement(movie._id)}> Delete </button> </td>
                                                </tr>)
                                    )
                }
             </tbody>
        </table>);
    }

    removeElement = (movieId) =>
    {
        this.setState({movies:this.state.movies.filter(function(movie){return movie._id!==movieId})});
    }
}


export default TableCompenent;