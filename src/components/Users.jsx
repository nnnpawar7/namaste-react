
import React from "react";
import {UsersChild} from "./UsersChild"
let aa;
export class Users extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count1: 0,
            count2: 0,
        }
        console.log("Constructor")
    }
    componentDidMount(){
        aa = setInterval(()=>{
            console.log("Set interval")
        },4000)
        console.log("parent componentDidMount")
    }
    componentWillUnmount(){
        console.log("parent componentWillUnmount", aa)
        clearInterval(aa)
    }
    componentDidUpdate(){
        console.log("parent componentDidUpdate")
    }
    
    render(){
        console.log("render")
        return (
            <div className="user-container">
                <div className="user-card">
                    Name: Nilesh Pawar
                    <p>{this.props.name}</p>
                    count 1<p>{this.state.count1}</p>
                    count 2<p>{this.state.count2}</p>
                    <button onClick={()=>{this.setState({ count1: this.state.count1+1 })}}>Count1</button>
                    <button onClick={()=>{this.setState({ count2: this.state.count2+1 })}}>Count2</button>
                    <UsersChild></UsersChild>
                    <button onClick={()=>{this.setState({count1:0, count2:0})}}>Reset</button>
                </div>
            </div>
        )
    }
}