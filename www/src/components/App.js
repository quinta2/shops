import React, { Component } from 'react';

import Home from './Home'
import Footer from './Footer'
import {Switch, Route,Redirect} from 'react-router-dom'
import Car from './Car';
import Tuan from './Tuan';
import Login from './Login';
import Reg from './Reg';
import Error from './Error'
import Detail from './Detail'
import {connect} from 'react-redux'
import * as types from '../store/types'
import AuthUser from '../guard/AuthUser'


class App extends Component {
  render() {
    let path=this.props.location.pathname;
    let {bNav,bFoot,bLoading,view_foot,view_nav}=this.props;
   if(/home/.test(path)){
     setTimeout(()=>{ view_nav(true);view_foot(true)},0)
   }
   if(/login|reg|tuan|detail|car/.test(path)){
    setTimeout(()=>{ view_nav(false);view_foot(false)},0)
  }


    return (
   <React.Fragment>
      {bLoading && <Loading/>}
     <Switch>
       <Route path='/home' component={Home}/>
       <Route path='/login' component={Login}/>
       <Route path='/reg' component={Reg}/>
       <AuthUser path='/car' component={Car}/>
   
       
       <Route path='/tuan' component={Tuan}/>
       <Route path='/detail' component={Detail}/>

       <Redirect exact from='/' to='/Home'/>
       <Route component={Error}/>
     </Switch>
     {bFoot?<Footer/>:null}
   </React.Fragment>
    );
  }
}
const mapStateToProps=state=>({
  bNav:state.bNav,
  bFoot:state.bFoot,
  bLoading:state.bLoading
});
const mapDispatchToProps=dispatch=>({
  view_nav:(bl)=>{dispatch({type:types.NAV_VIEW,payload:bl})},
  view_foot:(bl)=>{dispatch({type:types.FOOT_VIEW,payload:bl})},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
