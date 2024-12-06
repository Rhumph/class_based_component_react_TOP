import { Component } from "react";

class ClassCounter extends Component { 
    render(){
        return(
        <div>
            {this.props.array.length}
        </div>
        )
    }
}

export default ClassCounter;