import * as types from './types'
const reducer = (state,{type,payload}) => {
  switch (type){
    case types.NAV_VIEW:
      return Object.assign({},state, {bNav:payload});
    case types.FOOT_VIEW:
      return Object.assign({},state, {bFoot:payload});
    case types.LOADING_VIEW:
      return Object.assign({},state, {bLoading:payload});
    // case types.UPDATE_HOME:
    //   return Object.assign({},state, {homeData:payload});
    // case types.UPDATE_FOLLOW:
    //   return Object.assign({},state, {followData:payload});
    case types.USER_VIEW:
      return Object.assign({},state, {user:payload});

      case types.SUM_VIEW:
      return Object.assign({},state, {sum:payload});


      //3. 将dispatch传递过来的数据进行业务逻辑处理 (购物车 里面的数据++)
      case 'ADD_ITEM':
         let find=false;
         state.buyCar.forEach((item,index)=>{
           //判断id是否与库里面的id相等
             if(item.id===payload.id){
               //若相等就数字++
               find=true;
               item.number++;
             }
         }) 
         if(!find){
           //如果find为false执行
           payload.number=1;
           state.buyCar.push(payload)
         }
         return Object.assign({},state,{
           buyCar:[...state.buyCar]
         });

         case 'JIAN_ITEM':
         state.buyCar.forEach((item,index)=>{
             if(item.id===payload.id){
               if(item.number<=1){
                 item.number=1
               }else{
                item.number--;
                console.log(1)
               }
              
             }
             
   
         }) 
         return Object.assign({},state,{
          buyCar:[...state.buyCar]
        });

         case 'REMOVE_ITEM':
         state.buyCar.forEach((item,index)=>{
           if(item.id===payload.id){
             state.buyCar.splice(index,1)
           }
           
         })
       return Object.assign({},state,{
        buyCar:[...state.buyCar]
       })
       case 'REMOVE_ALL':
       return Object.assign({},state,{
              buyCar:[]
       })
       

    default:
      return state;
  }
};

export default reducer