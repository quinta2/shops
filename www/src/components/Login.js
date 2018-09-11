import React,{Component } from 'react';
import '../assets/css/login.css'
import * as types from "../store/types";
import {connect} from "react-redux";
 class Login extends Component{
  constructor(){
      super()
      this.state={
          username:'',
          password:""
      }
  }
 changeIpt(e){
     this.setState({
       username:e.target.value,
     
     })
 }
 changeOn(e){
    this.setState({
        password:e.target.value
    
    })
}
//post请求数据

//  send(){
//     let params = new URLSearchParams();
//     params.append('username',this.state.username);
//     params.append('password',this.state.password);
//     fetch(
//         `http://localhost:3001/login`,
//         {
//           method:'POST',
//           headers:{'Content-Type':'application/x-www-form-urlencoded'},
//           // body:'a=1&b=2'
//           body:params
//         }
//       ).then(
//         res=>res.json()
//       ).then(
//         data =>console.log(data)
//       )
//  }

//get请求数据
send(){
    
    fetch(
        `http://localhost:3001/login?username=${this.state.username}&password=${this.state.password}`,
      ).then(
        res=>res.json()
      ).then(
        data =>{
            if(data.error==0){
                console.log(this.props)
                this.props.user_view(data)
                this.props.history.push('/home')
            }
        }
      )
}

    
    render(){
        console.log(this.props.user)
        return(
            
                  <div className="body">
            <div className="dlbg">
                <div className="dl">
                    <p>登录宅生活</p>
                    <div className="srk">
                        <input type="text" placeholder="手机号/用户名" maxLength="11" id="phone" name="phone" value={this.state.username} onChange={this.changeIpt.bind(this)}/><br/>
                        <input type="password" placeholder="密码" maxLength="16" id="word" name="passWord" value={this.state.password}  onChange={this.changeOn.bind(this)}/><br/>
                        <a href="#"><button type="button" id="btn" onClick={this.send.bind(this)}>登录</button></a>
                    </div>
                    <div className="beizhu">
                        <ul>
                            <li>
                                若忘记密码，<a href="zhmm.html" style={{color: 'green',textDecoration: 'underline'}} >点击此处找回密码</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}


const mapStateToProps=state=>({
   ...state
  });
  
  const mapDispatchToProps=dispatch=>({
      user_view:(data)=>{dispatch({type:types.USER_VIEW,payload:{auth:true,dataname:data}})}
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);