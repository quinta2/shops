import React,{Component } from 'react';
import '../assets/css/detail.css'
import ReactSwipe from 'react-swipe';
export default class Detail extends Component{
    render(){
        return(
            <div className="body">
    <div className="tour">
        <a href="javascript:;" className="tour1" onClick={()=>{this.props.history.go(-1)}}><img src="/img/back.png" alt="" style={{height: '26px',width: '20px'}}/></a>
        <p>商品详情</p>
        <a href="myList.html" className="tour2"><img src="/img/u65.png" alt="" style={{width: '35px',height: '35px'}}/></a>
    </div>
    <div id='haha'>
      <ReactSwipe className="carousel" swipeOptions={{continuous: true, auto:2000}}>
        <div><img  className="img-responsive" src="/img/u67.png" title="" alt="" /></div>
        <div><img  className="img-responsive" src="/img/u67.png" title="" alt="" /></div>
        <div><img  className="img-responsive" src="/img/u67.png" title="" alt="" /></div>
        
      </ReactSwipe>
        <div className="addWrap">
            <ul id="position">
                <li className="cur"></li>
                <li className=""></li>
                <li className=""></li>
            </ul>
        </div>
    
    
        <p>全部商品</p>
        <div className="info">
        <em className="sat">￥100</em>
            <a href="shopping.html"><button type="button" className="btn">加入购物车</button></a>
        </div>
    </div>
    <hr/>
    <div className="sjxx">
        <p className="pclass1">商家信息</p>
    </div>
    <hr/>
    <div className="sjxx">
        <p className="pclass2">地址：张磊是个大傻子哈哈哈哈</p>
        <p className="pclass2">电话：11111111111</p>
    </div>
   
   
    </div>
        )
    }
}