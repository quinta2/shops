
import React,{Component} from 'react'
import '../assets/css/car.css'
import {connect} from 'react-redux'

 class Car extends Component{
  
  
    render(){
        let sum=0;
        this.props.buyCar.map(({price,number})=>{
            sum+=price*number
        })

        setTimeout(()=>{
              this.props.sumView(sum)
        },0)
        let {buyCar,removeItem,clearBuyCar,addItem,jianItem}=this.props
        // console.log(buyCar)
        return (
        <React.Fragment>
            <div className="body">
        <div className="tour">
            <a href="javascript:;" onClick={()=>{this.props.history.go(-1)}} className="tour1"><img src="img/back.png" alt="" style={{height: "26px",width: "20px"}}/></a>
            <p>购物车</p>
            <a href="javascript:;" className="tour2"><i className="btn"></i></a>
        </div>
            {
              buyCar.map((item)=>{
                return   (<div className="spxz" key={item.id}>                     
                        <ul>                        
                            <li className="li1"><input type="checkbox"  name="box"/> {item.id}</li>
                            <li className="li2"><a href="spxq.html"><img src={item.src}  alt="" style={{width: "60px",height: "60px"}}/></a></li>
                            <li className="li3"><span>{item.title}</span><br /><span style={{color: "red"}} >￥{item.price}</span><input type="text"  className="one" disabled="disabled"/></li>
                            <li className="li4"><div><a className="reduce"onClick={this.props.jianItem.bind(this,item)} >-</a><input type="text"  className="num"/>{item.number}<a className="plus" onClick={this.props.addItem.bind(this,item)}>+</a></div></li>
                        </ul>
                 </div>)
            })}     
    </div>
    <div className="clear: both"></div>
    <div className="footing">
    <ul >
                        <li className="li5"><input type="checkbox" id="checkbox" defaultValue="1" onClick={this.check} />全选</li>
            
                        <li className="li6">合计：<span className="red">￥{this.props.sum}</span></li>
                
           <li className="li7"><a href="Pay.html"><button type="button">结算</button></a></li>
                        </ul>
      
    </div>
        <div className="alert">
           <table border="1" cellSpacing="0"  style={{width: "100%",textAlign: "center",borderSpacing:0,BORDERCOLLAPSE: "collapse"}}>
           <tbody>
               <tr>
                   <td colSpan="2">
                       <div style={{padding:" 0.5rem 0 0.5rem 0",fontSize: "1.6rem"}}>提示</div>
                       <div style={{padding:" 0.5rem 0 0.5rem 0",fontSize: "1.6rem"}}>确定删除当前商品?</div>
                   </td>
               </tr>
               <tr>
                   <td><button type="button" className="delete" style={{border: "none",outline: "none",backgroundColor:"white",fontSize: "1.6rem",padding: "0.5rem 0 0.5rem 0",width:"100%"}}>确定</button></td>
                   <td><button type="button" className="none" style={{border: "none",outline: "none",backgroundColor:"white",fontSize: "1.6rem",padding: "0.5rem 0 0.5rem 0",width:"100%"}}>取消</button></td>
               </tr>
               </tbody>
           </table>
        </div>
    <div className="theme-popover-mask"></div>
    </React.Fragment>
        )
    }

 }
const mapStateToProps=(state)=>({
    ...state
 })
 
 const mapdispatchToProps=(dispatch)=>{
     return{
         addItem:(item)=>{
            dispatch({
                type:'ADD_ITEM',
                payload:item
            })
         },
         jianItem:(item)=>{
            dispatch({
                type:'JIAN_ITEM',
                payload:item
            })
         },
        sumView:(item)=>{
            dispatch({
                type:'SUM_VIEW',
                payload:item
            })
         }
     }
 }
 
 export default connect(mapStateToProps,mapdispatchToProps)(Car)
