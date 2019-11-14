import { Flex, WhiteSpace } from 'antd-mobile';
import React, { Component } from 'react'


const FlexE = () => (
  <div className="flex-container">
    <WhiteSpace size="lg" />
    <Flex>
      <Flex.Item style={{position:'relative'}}><img style={{width:'100%'}} src={require('../imgs/住吧首页_05.jpg')}/><div style={{position:'absolute',top:'40%',left:'23%',color:'#fff'}}>热门品牌</div></Flex.Item>
      <Flex.Item style={{position:'relative'}}><img style={{width:'100%'}} src={require('../imgs/住吧首页_08.jpg')}/><div style={{position:'absolute',top:'40%',left:'18%',color:'#fff'}}>私人搭配师</div></Flex.Item>
      <Flex.Item style={{position:'relative'}}><img style={{width:'100%'}} src={require('../imgs/住吧首页_11.jpg')}/><div style={{position:'absolute',top:'40%',left:'21%',color:'#fff'}}>选购指南</div></Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
  </div>
);
export default FlexE;