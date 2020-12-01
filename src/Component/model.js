import React, {Component} from "react";
import "./model.css";
class Model extends Component{
    constructor(){
        super();
        this.state={
            "hidden":false
        }
    }
    render(){
        return(
            <div>
                <button className="open-btn" onClick={()=>{this.setState({"hidden":false})}}>Open Moled</button>
                <div className={this.state.hidden?"block-content hidden": "block-content"}>
                    <button className="btn exit" onClick={()=>{this.setState({"hidden":true})}}>x</button>
                    <p className="head-block-content"> This is a model</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="btn-control">
                            <button className="btn accept" onClick={()=>{this.setState({"hidden":true})}}>Accept</button>
                            <button className="btn decline" onClick={()=>{this.setState({"hidden":true})}}>Decline</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Model;