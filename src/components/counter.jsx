import React, { Component } from 'react';

//single source of truth

class Counter extends Component 
{
    render() 
    {
        console.log(this.props.counter);
    
        
        return (<React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                        {this.renderConditionalSpan}
                        </div>
                        <div className="col">
                        <button className="btn btn-success" onClick={()=>this.props.addCount(this.props.counter.id)}>+</button>
                        </div>
                        <div className="col">
                        <button className="btn btn-secondary" onClick={()=>this.props.subCount(this.props.counter.id)}>-</button>
                        </div>
                        <div className="col">
                        <button className="btn btn-danger" onClick={()=>this.props.deleteCount(this.props.counter.id)}>X</button>
                        </div>
                    </div>
                </div>
                
                </React.Fragment>
        );
    }


    renderConditionalSpan()
    {
        if(this.props.counter.value===0) 
        {
            return <span className="badge badge-pill badge-primary">Zero</span>
        }
        else
        {
            return <span className="badge badge-pill badge-primary">{this.props.counter.value}</span>
        }
    }
}
 
export default Counter;