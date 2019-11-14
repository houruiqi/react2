import React,{Fragment,Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';

// 容器组件、UI组件
// 智能组件、木偶组件（和上面对应的）
// 容器组件（container/pages）：类组件，逻辑，功能
// UI组件（components）：写函数组件，展示，返回React元素
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)