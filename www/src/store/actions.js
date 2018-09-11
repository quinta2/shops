import * as types from './types'
const asyncAction=(url,dispath,type)=>{
  dispath({type:types.LOADING_VIEW,payload:true});
  setTimeout(()=>{
    fetch(
      url
    ).then(
      res=>res.json()
    ).then(
      payload=>{
        dispath({type:types.LOADING_VIEW,payload:false});
        dispath({type,payload})
      }
    )
  },1000)
};


export default asyncAction;