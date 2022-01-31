import React, { Component } from 'react';

class Pagination extends Component {

    render() 
    { 
        return (<nav aria-label="Page navigation example"><ul className="pagination"> 
                {this.paginationTab()}
                </ul></nav>
                )
    }

    paginationTab=()=>
    {
        // let template=<nav aria-label="Page navigation example"><ul className="pagination">;

        // for(var i=1; i<this.props.pageCount; i++)
        // {
        //     template+=<li className="page-item"><a className="page-link" href="#">{i}</a></li>
        // }

        // template+=</ul></nav>;

        // return template;

        console.log('i was mounted');

        {Array.apply(1,Array(this.props.pageCount).map(function (x,index) 
        {
            return <li className="page-item"><a className="page-link" href="#">{index}</a></li>;
        }))}

    }

}
 
export default Pagination;