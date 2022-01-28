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
    
    addCount(id)
    {
        let counters=this.state.counters.map((counter)=>{if(counter.id===id)counter.value++});
        this.setState({counters});
    }

    subCount(id)
    {
        let counters=this.state.counters.map((counter)=>{if(counter.id===id)counter.value--});
        this.setState({counters});
    }

    deleteCount(id)
    {
        let counters=this.state.counters.filter((counter)=>counter.id!==id);
        this.setState({counters});
    }

    resetCount()
    {
        let counters=this.state.counters.map((counter)=>counter.value=0);
        this.setState({counters});
    }

    render() 
    { 
        return (<React.Fragment>
                <NavBar allCount={this.state.counters.filter((counter)=>counter.value!==0).length}></NavBar> 
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