import React,{Component } from 'react';
import '../assets/css/reg.css'
export default class Reg extends Component{
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
  

  send(){
      fetch(
          `http://localhost:3001/reg?username=${this.state.username}&password=${this.state.password}`,
        ).then(
          res=>res.json()
        ).then(
          data =>console.log(data)
        )
  }

    render(){
        return(
            <div className="body">
    <div className="dlbg">
        <div className="dl">
            <p>注册宅生活账号</p>
            <div className="srk">
                <input type="text" className="input1" placeholder="手机号" maxLength="11" id="phone" value={this.state.username} onChange={this.changeIpt.bind(this)}/><br/>
                <input type="text" placeholder="验证码" className="input2" id="code"/><input type="button" value="获取短信验证码" className="input3"/><br/>
                <input type="password" placeholder="密码" className="input1" maxLength="16" id="word"  value={this.state.password}  onChange={this.changeOn.bind(this)}/><br/>
                <a href="javascript:"><button type="button" id="btn" onClick={this.send.bind(this)}>注册</button></a>
            </div>
            <div className="beizhu">
                <ul>
                    <li>
                       点击此处<a href="javascript:" style={{color: 'green',textDecoration: 'underline'}} >下载宅生活客户端，可享受更多优惠</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
        )

    }
}