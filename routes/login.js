var express=require('express');

  //兜库，看有无用户名,有才种,并取用户信息
module.exports=(db)=>{
    var router=express.Router();
    router.get('/',function(req,res){
        console.log('获取cookies',req.session);
        console.log('获取前端提交信息',req.query);
        var username = req.query.username
        var password = req.query.password
 
        console.log(username);
    
            db.query(
                `SELECT * FROM user WHERE username="${username}" AND password="${password}"`,
                (err,result)=>{
                    if(err) throw error;
                    else{
                        if(result.length>0){
                            
                            // console.log('获取cookies',req.session);
                            console.log('获取前端提交信息',req.query);
                          //种  库里面用户的 ID
                            res.send({error:0,msg:'成功',data:{a:'用户信息'}});//把session传给前端
                        }else{
                            res.send('登录失败')
                        }
                    }
                }
            )
    
    
    
    
    
    })
    return router
}

