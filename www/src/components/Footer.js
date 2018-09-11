import React,{Component } from 'react';
import {NavLink} from 'react-router-dom'
import '../assets/css/footer.css'
export default class Footer extends Component{
    render(){
        return(
        
                 <div className="wx_nav" id="wx_nav">
          <NavLink activeClassName='nav_index' to='/home' id="nav_index" >首页</NavLink>       
          <NavLink activeClassName='nav_index' to='/tuan' id="nav_fav">我的团</NavLink>       
          <NavLink activeClassName='nav_index' to='/car' id="nav_shopcart">购物车</NavLink>       
          <NavLink activeClassName='nav_index' to='/login' id="nav_me on">用户</NavLink>         
    </div>
         
        )
    }
}
