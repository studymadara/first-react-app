import React, { Component } from 'react';
import Counter from './counter';
import NavBar from './navBar';

class MainCounter extends Component 
{
    state = { 
            counters:[
                {id:1,value:0},
                {id:2,value:0},
                {id:3,value:0},
                {id:4,value:0}
            ] 
        } 
    
    addCount = (id) =>
    {
        let newCounter=this.state.counters.map((counter) => 
                                            {
                                                if(counter.id===id)
                                                    counter.value++
                                                return counter;
                                            });
        this.setState({counters:newCounter});
    }

    subCount = (id) =>
    {
        let counters=this.state.counters.map((counter)=>
        {
            if(counter.id===id)
                counter.value-- 
            return counter;
        });
        this.setState({counters});
    }

    deleteCount= (id) =>
    {
        let counters=this.state.counters.filter(function(counter){return counter.id!==id});
        this.setState({counters});
    }

    resetCount = () =>
    {
        let counters=this.state.counters.map((counter)=>
        {
            counter.value=0 
            return counter;
        });
        this.setState({counters});
    }

    render() 
    { 
        return (<React.Fragment>
                <NavBar allCount={this.state.counters.filter((counter)=>counter.value!==0).length}></NavBar> 
                <button className="btn btn-primary" onClick={()=>this.resetCount()}>Reset</button>
                {this.state.counters.map((c) => (<Counter 
                                                            key={c.id} 
                                                            addCount={()=>this.addCount(c.id)}    
                                                            subCount={()=>this.subCount(c.id)} 
                                                            deleteCount={()=>this.deleteCount(c.id)} 
                                                            counter={c}>

                                                </Counter>)
                                        )
                }
                </React.Fragment>
                ); 
    }
}
 
export default MainCounter;