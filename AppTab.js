import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import Home from './container/Home';
import LingGan from './container/LingGan';
import Store from './container/Store';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0}}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i style={{fontSize:22,lineHeight:'22px'}} className="iconfont icon-shouye"></i>
            }
            selectedIcon={
                <i style={{fontSize:22,lineHeight:'22px'}} className="iconfont icon-shouye"></i>
            }
            selected={this.state.selectedTab === 'home'}
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
            <Home/>
          </TabBar.Item>
          <TabBar.Item
            icon={
                <i style={{fontSize:22,lineHeight:'22px'}} className="iconfont icon-linggan"></i>
            }
            selectedIcon={
                <i style={{fontSize:22,lineHeight:'22px'}} className="iconfont icon-linggan"></i>
            }
            title="灵感"
            key="Koubei"
            selected={this.state.selectedTab === 'lingGan'}
            // badge={'new'}
            onPress={() => {
              this.setState({
                selectedTab: 'lingGan',
              });
            }}
          >
            <LingGan />
          </TabBar.Item>
          <TabBar.Item
            icon={
                <i style={{fontSize:22,lineHeight:'22px'}} className="iconfont icon-store_icon"></i>
            }
            selectedIcon={
                <i style={{fontSize:22,lineHeight:'22px'}} className="iconfont icon-store_icon"></i>
            }
            title="商城"
            key="shangcheng"
            // dot
            selected={this.state.selectedTab === 'shangcheng'}
            onPress={() => {
              this.setState({
                selectedTab: 'shangcheng',
              });
            }}
          >
            <Store/>
          </TabBar.Item>
          <TabBar.Item
            icon={
                <i style={{fontSize:22,lineHeight:'22px'}} className="iconfont icon-wode"></i>
            }
            selectedIcon={
                <i style={{fontSize:22,lineHeight:'22px'}} className="iconfont icon-wode"></i>
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'my'}
            onPress={() => {
              this.setState({
                selectedTab: 'my',
              });
            }}
          >
            我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}