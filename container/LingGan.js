import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import Tuijian from './Tuijian'
import { WingBlank } from 'antd-mobile';


const tabs = [
  { title: <Badge>推荐</Badge> },
  { title: <Badge>冬季</Badge> },
  { title: <Badge>宜家</Badge> },
  { title: <Badge>小清新</Badge> },
  { title: <Badge>小户型</Badge> },
  { title: <Badge>个性色彩</Badge> },
];
export default class LingGan extends Component {
    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'#fff'}} rightContent={[<Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                 ]}>灵感</NavBar>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div style={{ backgroundColor: '#fff' }}>
                        
                        <WingBlank><Tuijian/></WingBlank>
                    </div>
                    <div style={{ backgroundColor: '#fff' }}>
                        冬季
                    </div>
                    <div style={{  backgroundColor: '#fff' }}>
                        宜家
                    </div>
                    <div style={{  backgroundColor: '#fff' }}>
                        小清新
                    </div>
                    <div style={{  backgroundColor: '#fff' }}>
                        小户型
                    </div>
                    <div style={{  backgroundColor: '#fff' }}>
                        个性色彩
                    </div>
                    
                    </Tabs>
            </div>
        )
    }
}
