import React,{Component} from 'react';
import '../assets/css/style.css'
import '../assets/css/Up.css'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux' 
 class Home extends Component{
    constructor(){
        super()
        this.state={
            list:[]
        }
        fetch(
            '/data/tuan.data'
        ).then(
            res=>res.json()
        ).then(
           
            data=>this.setState({list:data})
        )
    }
    render(){
        console.log(this.state.list)
        return(
            <React.Fragment>
                <header>
    <div>
        <a href="#">发现身边美好的生活！<button>下载宅生活</button></a>
    </div>
</header>
<div className="container">
    <div className="allLogo">
        <div className="logo"><img src="/img/u16.png" alt="logo"/></div>
        <div className="head"><a href="javascript:;"><img src="/img/u61.png" alt="头像"/></a></div>
        <div className="headInfo"><a href="#">天天猫</a></div>
    </div>

    <div className="SeckillOne">
        <div>
            <img src="/img/1.jpg" alt=""/>
        </div>
        <div id="CountMsg" className="HotDate">
            <br/><a>倒计时</a><br/>
            <span className="t_d">00天</span><br/>
            <span className="t_h">00:</span>
            <span className="t_m">00:</span>
            <span className="t_s">00</span>
        </div>
        <div className="hurry">
                <a href="Mgroup.html"><button>立即参团 <img src="/img/jian.png"/>></button></a>
        </div>
        <div className="number">
            <p>已抢 25 份 剩余 25 份</p>
        </div>
    </div>
    <div className="SeckillTwo">
        <div>
            <img src="/img/1.jpg" alt=""/>
        </div>
        <div  className="HotDate">
            <br/><a>倒计时</a><br/>
            <span className="t_d">00天</span><br/>
            <span className="t_h">00:</span>
            <span className="t_m">00:</span>
            <span className="t_s">00</span>
        </div>
        <div className="hurry">
            <a href="Mgroup.html"><button>立即参团 <img src="/img/jian.png"/></button></a>
        </div>
        <div className="number">
            <p>已抢 25 份 剩余 25 份</p>
        </div>
    </div>
    <div className="store">
        <ul>
            <li className="li1"><a href="#">商品</a></li>
            <li className="li2"><a href="javascript:;" className="xlmenu">全部&nbsp;<img src="/img/donw.png" style={{width: '12px',display: 'inline'}}/></a>&nbsp;共<span style={{color: '#e4393c',fontSize: '1.8rem'}}>40</span>件</li>
        </ul>
        <div className="ycmenu">
            <ul>
                <li><a href="allGoods.html" className="a">全部商品</a></li>
                <li><a href="nydg.html">奶油蛋糕</a></li>
                <li><a href="nydg.html">奶油蛋糕</a></li>
                <li><a href="nydg.html">奶油蛋糕</a></li>
                <li><a href="nydg.html">奶油蛋糕</a></li>
                <li><a href="nydg.html">奶油蛋糕</a></li>
                <li><a href="nydg.html">奶油蛋糕</a></li>
            </ul>
        </div>
    </div>
    <div className="clear"></div>
    <div className="border">

    </div>
    <div className="allsp">
        
         {this.state.list.map((item,index)=>{
              return ( <figure key={index}>
            <NavLink to='/detail'><img src={item.src} className="xqtp"/></NavLink>
                 
                  <p>{item.title}</p>
                  <div className="info">
                      <em className="sat">{item.price}&nbsp;<small>{item.ccc}</small></em>
                      <a href="javascript:;">
                      <img src={item.imgs}
                       alt="购物车"
                        style={{width: '30px',height: '30px'}}
                         align="right"
                         onClick={this.props.addItem.bind(this,item)}
                         /></a>
                         {/* 1.点击添加到购物车 additem函数传递给dispatch */}
                  </div>
              </figure>
              ) 
              console.log(this.props.buyCar);
         })}
      
      
        <div className="clear"></div>
    </div>
    </div>
<footer>
    <div className="footer">
        <p>没有更多了</p>
    </div>
</footer>
<div className="actGotop"><a href="javascript:;" title="返回顶部"></a> <img src="/img/fanhui.png" alt=""/></div>
<div className="theme-popover-mask"></div>
            </React.Fragment>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return{

    }   
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    return{
        //2.additem函数通过dispatch将数据 类型 item 传递到reducer
        addItem:(item)=>{
            dispatch({
                type:"ADD_ITEM",
                payload:{...item,number:1}
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps

)(Home)
