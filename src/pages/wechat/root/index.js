import React,{Component} from "react"
import UI from "./indexUI"
import {connect} from "react-redux"


class Index extends Component{
    constructor(){
        super()
    console.log(this)
        
    }
    render(){
        return <UI {...this.props}/>
    }
    
}

const mapStateToProps = ({wechat})=>{
    return{
        ...JSON.parse(JSON.stringify(wechat))
    }
}

export default connect(mapStateToProps)(Index)