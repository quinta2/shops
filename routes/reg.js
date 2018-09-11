var express=require('express');

  //兜库，
module.exports=(db)=>{
    var router=express.Router();
    router.get('/',function(req,res){
        console.log('获取cookies',req.session);
        console.log('获取前端提交信息',req.query);
        let username = req.query.username
        let password = req.query.password
 
        console.log(username);
        db.query(
            `SELECT * FROM user WHERE username="${username}"`,
            (err,result)=>{
                if(err) res.send("注册失败")
                else{
                    if(result.length>0){
                       
                            res.send('用户名已存在')
                    }else{
                        db.query(
                            `INSERT INTO user(id,username,password) VALUES (0,"${username}","${password}")`,
                            (err,result)=>{
                                if(!err){
                                    res.send({error:0,msg:'注册成功'})
                                }
                            }
                            
                           )
                    }
                }
            }
        )
    

    
    })
    return router
}

