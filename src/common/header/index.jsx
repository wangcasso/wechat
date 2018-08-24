import React,{Component} from "react"
import "./index.css"

export default class Header extends Component{
    render(){
        return(
            <div id="header">
                <div className="title">微信</div>
                <div className="tip">
                    <div>Q</div>
                    <div>+</div>
                </div>
            </div>
        )
    }
}