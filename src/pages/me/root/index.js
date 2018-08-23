import React,{Component} from "react"
import UI from "./indexUI"
import {connect} from "react-redux"

class Index extends Component{
    render(){
        return <UI/>
    }
}

const mapStateToProps = ({me})=>{
    return{
        title:me.title
    }
}

export default connect(mapStateToProps)(Index)