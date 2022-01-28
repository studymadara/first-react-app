import React, { Component } from 'react';

class NavBar extends Component { 
    render() { 
        return (<ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href='#'>{this.props.allCount}</a>
        </li>
      </ul>);
    }
}
 
export default NavBar;