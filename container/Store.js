import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { Carousel } from 'antd-mobile';
import { Flex } from 'antd-mobile';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

export default class Store extends Component {
    render() {
        return (
            <div style={{position:'relative'}}>
                <NavBar style={{backgroundColor:'#3fcccb',color:'#fff'}} rightContent={[<Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                 ]}>商店</NavBar>
                 <Carousel 
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {[1,2,3,4].map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: 180 }}
                        >
                        <img
                            src={require('../imgs/商城_02.jpg')}
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
                 <SearchBar style={{opacity:0.9,position:'absolute',width:'100%',top:40,left:0}}
                    placeholder="手动获取获取光标"
                    ref={ref => this.manualFocusInst = ref}
                />
                <WingBlank>
                <Flex style={{backgroundColor:'#fff',width:'100%',paddingTop:'5%',paddingBottom:'5%'}}>
                    <Flex.Item style={{position:'relative'}}><img style={{width:'80%'}} src={require('../imgs/椅子.jpg')}/><div style={{position:'absolute',top:'95%',left:'28%',color:'#000'}}>椅</div></Flex.Item>
                    <Flex.Item style={{position:'relative'}}><img style={{width:'80%'}} src={require('../imgs/椅子.jpg')}/><div style={{position:'absolute',top:'95%',left:'28%',color:'#000'}}>椅</div></Flex.Item>
                    <Flex.Item style={{position:'relative'}}><img style={{width:'80%'}} src={require('../imgs/椅子.jpg')}/><div style={{position:'absolute',top:'95%',left:'28%',color:'#000'}}>椅</div></Flex.Item>
                    <Flex.Item style={{position:'relative'}}><img style={{width:'80%'}} src={require('../imgs/椅子.jpg')}/><div style={{position:'absolute',top:'95%',left:'28%',color:'#000'}}>椅</div></Flex.Item>
                    <Flex.Item style={{position:'relative'}}><img style={{width:'80%'}} src={require('../imgs/椅子.jpg')}/><div style={{position:'absolute',top:'95%',left:'28%',color:'#000'}}>椅</div></Flex.Item>
                </Flex>
                {/* <WhiteSpace size="lg" /> */}
                <Flex style={{backgroundColor:'#fff',width:'100%',paddingTop:'5%',paddingBottom:'5%'}}>
                    <Flex.Item style={{position:'relative'}}><img style={{width:'80%'}} src={require('../imgs/椅子.jpg')}/><div style={{position:'absolute',top:'95%',left:'28%',color:'#000'}}>椅</div></Flex.Item>
                    <Flex.Item style={{position:'relative'}}><img style={{width:'80%'}} src={require('../imgs/椅子.jpg')}/><div style={{position:'absolute',top:'95%',left:'28%',color:'#000'}}>椅</div></Flex.Item>
                    <Flex.Item style={{position:'relative'}}><img style={{width:'80%'}} src={require('../imgs/椅子.jpg')}/><div style={{position:'absolute',top:'95%',left:'28%',color:'#000'}}>椅</div></Flex.Item>
                    <Flex.Item style={{position:'relative'}}><img style={{width:'80%'}} src={require('../imgs/椅子.jpg')}/><div style={{position:'absolute',top:'95%',left:'28%',color:'#000'}}>椅</div></Flex.Item>
                    <Flex.Item style={{position:'relative'}}><img style={{width:'80%'}} src={require('../imgs/椅子.jpg')}/><div style={{position:'absolute',top:'95%',left:'28%',color:'#000'}}>椅</div></Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />
                <Flex style={{width:'100%'}}>
                    <Flex.Item style={{position:'relative',paddingBottom:'10%'}}><img style={{width:'100%'}} src={require('../imgs/商城_05.jpg')}/><div style={{position:'absolute',top:'80%',left:'3%',color:'#000'}}>欧式风格精细加工</div><div style={{position:'absolute',top:'90%',left:'3%'}}>￥39.39</div></Flex.Item>
                    <Flex.Item style={{position:'relative',paddingBottom:'10%'}}><img style={{width:'100%'}} src={require('../imgs/商城_07.jpg')}/><div style={{position:'absolute',top:'80%',left:'3%',color:'#000'}}>欧式风格精细加工</div><div style={{position:'absolute',top:'90%',left:'3%'}}>￥39.39</div></Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />


                </WingBlank>
            </div>
        )
    }
}
