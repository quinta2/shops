import React,{Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import * as types from "../store/types";
import {connect} from "react-redux";
const AuthUser=({component:Component,user,...rest})=>(

  <Route
    {...rest}
    render={(props)=>{
      console.log(user.auth)
      return(
        user.auth ?
        <Component {...props} data={user.data} /> :
        <Redirect to="/login"/>
      )
    
      }}
  />
);
const mapStateToProps=state=>({
  user:state.user
});

const mapDispatchToProps=dispatch=>({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthUser);