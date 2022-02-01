import React, { Component } from 'react';
import _ from 'lodash';

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

        console.log('i was mounted',this.props.pageCount);

        let rangeData =_.range(1,this.props.pageCount+1);

        return rangeData.map(x=> 
        (<li className="page-item"><a className="page-link" href="#">{x}</a></li>))

    }

}
 
export default Pagination;