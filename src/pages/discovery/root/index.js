import React,{Component} from "react"
import UI from "./indexUI"
import {connect} from "react-redux"

class Index extends Component{
    render(){
        return <UI {...this.props} />
    }
}

const mapStateToProps = ({discovery})=>{
    return{
        ...JSON.parse(JSON.stringify(discovery))
    }
}

export default connect(mapStateToProps)(Index)