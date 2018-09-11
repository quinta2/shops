import React,{Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import Login from '../components/Login';
//component组件本身===变量
//component:user()
// component:Component 字面量  可以用来当做组件
// ...rest 剩余参数
// const AuthUser=({component:Component,...rest})=>{
//    return (
//     <Route {...rest}
//     render={(props)=>(
//         Math.random()<.5 ?
//         <Component {...props}/>:<login/>
//     )}
//     />
//    )
// }
// return (
//     <Route {...rest}
//     render={(props)=>(
//         Math.random()<.5 ?
//         <Component {...props}/>:
//         <Redirect to='/login'/>
//     )}
//     />
//    )
// }


class AuthUser extends Component{
    constructor(){
        super()
        this.state={
            hasAuth:false,
            auth:false,
            userData:{}
        }
    }
    componentDidMount(){ //渲染结束触发挂载后 数据返回  更改数据 重新渲染
        fetch(
            'data/user.json'
        ).then(
            res=>res.json()
        ).then(
            data=>this.setState({
                hasAuth:true,
                auth:data.auth,
                userData:data.userdata
            })
        )
    }
    render(){
        let {component:Component,...rest}=this.props
        if (!this.state.hasAuth) return null
        return (
    <Route 
         {...rest}
    render={(props)=>(
        Math.random()<.5 ?
        <Component {...props} userData={this.state.userData}/>:
        <Redirect to='/login'/>
        //授权不通过跳转到这个页面
    )}
    />
   )

    }
}
export default AuthUser;