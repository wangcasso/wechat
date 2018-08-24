import React,{Component} from "react"
import UI from "./indexUI"
import {connect} from "react-redux"


class Index extends Component{
    constructor(){
        super()
        this.state
    }
    render(){
        return <UI {...this.props}/>
    }
    componentDidMount(){
        console.log(this.props)

    }
    
}
//state换成包含history location match 的 props
const mapStateToProps = ({wechat})=>{
    return{
        ...JSON.parse(JSON.stringify(wechat))
    }
}

export default connect(mapStateToProps)(Index)