import React,{Component } from 'react';
import '../assets/css/tuan.css'
import ReactSwipe from 'react-swipe';
import {NavLink} from 'react-router-dom'
export default class Tuan extends Component{
    render(){
        return(
            <React.Fragment>
 <div className="up"><a href="javascript:;"  onClick={()=>{this.props.history.go(-1)}}><img src="/img/up.png" alt="返回上一层"/></a></div>
<div className="share"><a href=""><img src="/img/share.png" alt="分享"/></a></div>
<div className="container">
    
        
            <ReactSwipe className="carousel" swipeOptions={{continuous: true, auto:2000}}>
        <div><img src="/img/1.jpg" title="" alt="" /></div>
        <div ><img src="/img/2.jpg" title="" alt="" /></div>
        <div ><img src="/img/3.jpg" title="" alt="" /></div>
        <div ><img src="/img/4.jpg" title="" alt="" /></div>
        <div ><img src="/img/4.jpg" title="" alt="" /></div>
      </ReactSwipe>
       
        {/* <script type="text/javascript" src="js/jsdaima.js"></script> */}
   
<section>
    <div className="t_container">
        <p className="p_service"><img src="/img/shangjia.png" alt="" style={{width: '10px',display: 'inline'}}/>&nbsp;货品由<span>社区服务•零点店</span>提供，并提供售后服务!</p>
        <p className="p_detail">【预售，3.27】发货东北精品大米/2500G官方正品2500G官方正品</p>
        <div className="bg_hg">
        <p className="new"><span>团购价</span>￥111</p>
        <p className="old">原价￥200</p>
        </div>
        <p className="p_count">已团：100份&nbsp;&nbsp;剩余17份</p>
        <p className="p_time"><span>时间：</span>2016.9.13&nbsp;-&nbsp;2016.9.26</p>
    </div>
</section>
</div>
<div className="cancel">
    <div className="alert">
        <a href="#"><img src="/img/xq.jpg" alt="" className="img1"/></a>
        <div  className="text">
            <p className="G500">东北精品大米/500G</p>
            <hr/>
            <table>
               <tbody>
               <tr>
                    <td className="same">单价</td>
                    <td className="one">￥99.00</td>
                </tr>
               </tbody>
               <tbody>
               <tr>
                    <td className="same">数量</td>
                    <td className="many"><a className="reduce" id="reduce">-</a><input type="text" value="1" className="num" disabled="disabled"/><a className="plus" id="plus">+</a></td>
                </tr>
               </tbody>
               <tbody>
                    <tr>
                    <td className="same">合计</td>
                    <td className="red" id="red"></td>
                </tr>
               </tbody>
            </table>
        </div>
        <div className="WeChat">
            <p><a href="#" id="apply"><i></i> 微信支付</a></p>
        </div>
        <div className="t_warn">
            <p><i></i> 支付成功后不能取消，若参团人数不足时，活动有可能被取消；取消后，支付金额将会退款至宅生活账户余额里；</p>
        </div>
        <a href="#" className="btn"><img src="/img/X.png" alt="" className="img3"/></a>
    </div>
</div>
<div className="false">
    <img src="/img/false.png" alt=""/>
    <p>支付失败!</p>
</div>
<div className="theme-popover-mask"></div>
<div className="index">
   <NavLink to='/home'>
   <img src="/img/6.png" alt="" style={{maxWidth: '20px',display: 'block'}}/>首页
   </NavLink>
</div>
<div className="footer_bg">
    <img src="/img/color.png" alt=""/>
    <div className="button">
        <a href="#" className="Apply">立即报名</a>
    </div>
    </div>
            </React.Fragment>
        )
    }
}