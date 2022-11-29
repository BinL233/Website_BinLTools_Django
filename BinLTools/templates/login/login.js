const express=require('express');//引入express方法
const app=express();
const mysql=require('mysql');
const pool=mysql.createPool({
    host     : '127.0.0.1',       
    user     : 'root',              
    password : '123456',       
    port: '3306',            
    database: 'test',
	connectionLimit:15
});//数据库池连接数据库
app.listen(8080);//建立服务器
app.use(express.static('./'));//获取到html网页
app.use(express.urlencoded({
	extended:false
}));//将获取到的数据转化成对象
app.post('/login',(req,res,next)=>{
	//pool.query方法中写查询的数据库语句
	pool.query('select * from test1 where user_name=?',[req.body.user],(err,result)=>{
		if(err){
			next(err);
			return		
		}
			if(result.length===0){
				console.log('用户名错误！')
				res.send('<h1>用户名错误！<h1>')
			}else{
			if(result[0].password==req.body.pwd){
			console.log('登录成功！')
			res.send('<h1>登录成功！</h1><br>'+'欢迎用户：'+req.body.user)
			}else if(result[0].password!==req.body.pwd){
			console.log('密码错误！')
			console.log(result[0].password)
			res.send('<h1>密码错误！<h1>')
			}}
	})


})
//错误排出
app.use((err,req,res,next)=>{
	console.log(err);
	res.status(404).send({code:404,msg:'糟糕！出错了！'})
})
