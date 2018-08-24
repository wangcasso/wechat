import React from "react"
import "./index.css"

const defaultList = [
    {
        title:"新的朋友",
        img:"./images/addressList/01.png",
        class:"newfriends",
    },
    {
        title:"群聊",
        img:"./images/addressList/02.png",
        class:"grouptalk",

    },
    {
        title:"标签",
        img:"./images/addressList/03.png",
        class:"tag",

    },
    {
        title:"公众号",
        img:"./images/addressList/04.png",
        class:"public",

    }
]

export default (props)=>{
    return(
        <div className="page bcolor">
            
            <div className="fixTop">
                {defaultList.map((item)=>{
                    return(
                        <div className={"fixitem"+" "+item.class} key={item.title}>
                            <div style={{background:"url("+item.img+") 0 0/.33rem .33rem  no-repeat  "}}>
                            <p>{item.title}</p>
                            </div>
                         </div>
                    )
                })}
                {/* <div className="fixitem newfriends">
                    <div ></div>
                </div>
                <div className="fixitem grouptalk"></div>
                <div className="fixitem tag"></div>
                <div className="fixitem public"></div> */}

            </div>
        </div>
    )
}