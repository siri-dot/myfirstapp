import React from 'react'

class ClassBasedcomponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    inc=()=>{
        return this.setState({count:this.state.count+1}
        )
    }
  
render(){
    return(
        <>

        <h1>this is {this.props.name} from</h1>
            
            <button onClick={()=>this.inc()}>INC</button>
            <h1> count is {this.state.count}</h1>
            </>
    );
    }

}
export default ClassBasedcomponent;

        
            
    
    

