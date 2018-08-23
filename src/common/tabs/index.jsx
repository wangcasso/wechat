import React,{Component} from "react"
import {TabBar} from "antd-mobile"
import "./index.css"

const tabsData = [
  {id: 1, title: '微信', path: '/wechat', badge: '',
  SVG: '../../../public/svg/talk.svg',
  selectSVG: 'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg'
 
  },
  {id: 2, title: '通讯录', path: '/addresslist', badge: '',SVG: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
  selectSVG: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg'
 
  },
  {id: 3, title: '发现', path: '/discovery', badge: '',
  SVG: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg',
  selectSVG: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg'
      
  },
  {id: 4, title: '我', path: '/me', badge: '',
  SVG: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
  selectSVG: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'
      
  },
];

export default class Tab extends Component {
    constructor({history,location}) {
      super();
      let item=tabsData.find((item)=>item.path===location.pathname);
      this.state = {
        selectedTab: item?item.title:"微信",
        hidden: false,
      };
    }

    getTab(itemInfo){
      return (
        <TabBar.Item
            title={itemInfo.title}
            key={itemInfo.id}
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url('+itemInfo.SVG+') center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url('+itemInfo.selectSVG+') center center /  21px 21px no-repeat ' }}
            />
            }
            selected={this.state.selectedTab === itemInfo.title}
            badge={itemInfo.badge}
            onPress={this.selectTab.bind(this, itemInfo.title, itemInfo.path)}
          >
        </TabBar.Item>
      )
  }

  selectTab(title, path){
    // console.log(title, path);
    this.setState({selectedTab: title});
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="app-tabs">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#48c11e"
          barTintColor="white"
          hidden={this.state.hidden}
        >
        {
            tabsData.map((item)=>{
                return this.getTab(item);
            })
        }
        </TabBar>
      </div>
    );
  }
    }