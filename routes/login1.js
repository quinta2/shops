import React,{Component} from 'react'
import '../asserts/css/dlzsh.css'
import '../asserts/js/jquery-1.12.1'

export default class Login extends Component{
    constructor(){
        super()
        this.state={
            iptuser:"",
            iptpsd:""
        }

    }
    changeipt(ev){
        this.setState({
            iptuser:ev.target.value,
        })
        
    }
    changepsd(ev){
        this.setState({
            iptpsd:ev.target.value,
        })
       
    }
    login(){
        let params = new URLSearchParams();
        params.append('username',this.state.iptuser);
        params.append('password',this.state.iptpsd);
        fetch(
            `http://localhost:3000/login`,
            {
             credentials: 'include',  
              method:'POST',
              headers:{
                'Accept':'application/json,text/plain,*/*',
                'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
            },
              // body:'a=1&b=2'
              body:params
            }
          ).then(
            res=>res.json()
          ).then(
            (data)=>{
                console.log(data)
                if(data.error==0){
                   this.props.history.push("/home") 
                }

            }
          )
      
    }
    render() {
        
        return (
           
          <React.Fragment>
              <div className="body">
    <div className="dlbg">
        <div className="dl">
            <p>登录宅生活</p>
            <div className="srk">
                <input type="text" placeholder="手机号" maxLength="11" id="phone" name="phone" value={this.state.iptuser} onChange={this.changeipt.bind(this)}/><br/>
                <input type="password" placeholder="密码" maxLength="16" id="word" name="passWord" value={this.state.iptpsd} onChange={this.changepsd.bind(this)}/><br/>
                <a href="#"><button type="button" id="btn" onClick={this.login.bind(this)}>确定</button></a>
            </div>
            <div className="beizhu">
                <ul>
                    <li>
                        若没有账号，<a href="zhmm.html" style={{color: "green",textDecoration: "underline"}} >点击此处注册</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
          </React.Fragment>
        );
    }
    componentDidMount(){
        {  $(document).ready(function () {
            $("#btn").on("click",function() {
                
                var mob=$.trim($("#phone").val());

                if($.trim($("#phone").val())=="")
                {
                    $("#phone").val("");
                    $("#phone").focus();
                    alert("手机号码不能为空！");
                    return false;
                }
                if($.trim($("#phone").val())!="")
                {
                    var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
                    if(!reg.test($.trim($('#phone').val())))
                    {
                        $("#phone").val("");
                        $("#phone").focus();
                        alert("手机号码格式不对！");
                        return false;
                    }
                }
                
                if($("#word").val() == "" || $("#word").val() == null){
                    alert("密码不能为空");
                    $("#word").val("");
                    $("#word").focus();
                    return false;
                }
            })
        });}
    }
}