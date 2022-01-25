import React,{ Component } from "react";
import { getMovies } from "../services/fakeMovieService";

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
        return ( <div><h1>Table Content From REACT</h1>{this.renderMoviesInTable()}</div> );
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
                {this.state.movies.map((movie) => 
                                    { 
                                            return ([<tr>
                                                <td> {movie.title} </td>,
                                                <td> {movie.genre.name} </td>,
                                                <td> {movie.numberInStock} </td>,
                                                <td> {movie.dailyRentalRate} </td>,
                                                <td><button id={movie._id}> Delete </button> </td>
                                                </tr>])
                                    }
                                    )}
             </tbody>
        </table>);
    }
}


export default TableCompenent;