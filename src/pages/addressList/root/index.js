import React,{Component} from "react"
import UI from "./indexUI"
import {connect} from "react-redux"

class Index extends Component{
    render(){
        return <UI {...this.props} />
    }
}

const mapStateToProps = ({addressList})=>{
    return{
        ...JSON.parse(JSON.stringify(addressList))
    }
}

export default connect(mapStateToProps)(Index)