import React,{Component} from "react"
import UI from "./indexUI"
import {connect} from "react-redux"

class Index extends Component{
    render(){
        return <UI {...this.props} />
    }
}

const mapStateToProps = ({me})=>{
    return{
        ...JSON.parse(JSON.stringify(me))
    }
}

export default connect(mapStateToProps)(Index)