import React, { Component } from 'react';

class Like extends Component 
{
    state = { isLike:false } 
    
    render() 
    { 
        return (this.state.isLike?this.likeRendor():this.unLikeRendor());
    }

    unLikeRendor = () => 
    {
        return (<i className="fa fa-heart-o" onClick={()=>this.changeLikeStatus(true)} aria-hidden="true"></i>);
    }

    likeRendor = () =>
    {
        return (<i class="fa fa-heart" onClick={()=>this.changeLikeStatus(false)} aria-hidden="true"></i>);
    }

    changeLikeStatus=(isLike)=>
    {
        this.setState({isLike});
    }

}
 
export default Like;