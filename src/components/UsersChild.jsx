import { Component } from "react";

export class UsersChild extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }

    componentDidMount(){
        console.log("Child componentDidMount")
    }
    
    componentDidUpdate(){
        console.log("Child componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("Child componentWillUnmount")
    }

    increase(){
        this.setState({
            count: this.state.count+1
        })
    }    
    render(){
        return(
            <>
                <h2>Users Child-2 {this.state.count}</h2>
                <button onClick={()=>this.increase()}>Increase</button>
            </>)
    }

}