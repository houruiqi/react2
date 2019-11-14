import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
// import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';
import FlexE from './FlexE'
export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'#fff'}}>住吧家具</NavBar>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {[1,2].map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: 180 }}
                        >
                        <img
                            src={require('../imgs/1.jpg')}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                    <WingBlank>
                        <FlexE/>
                    </WingBlank>
                    <div style={{position:'relative'}}>
                        <div style={{backgroundColor:'#fff',width:'100%',height:50,paddingTop:15,paddingLeft:20}}>热门推荐</div>
                        <img style={{width:'100%'}} src={require('../imgs/4.jpg')}/>
                        <div style={{position:'absolute',top:'90%',left:'2%',color:'#fff'}}>什么是英伦装修风格</div>
                    </div>
                    
            </div>
        )
    }
}
