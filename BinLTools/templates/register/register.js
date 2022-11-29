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
app.post('/register',(req,res,next)=>{
	//pool.query方法中写查询的数据库语句
	pool.query('INSERT INTO test1 (user_name, password) VALUES (?,?)',[req.body.user,req.body.pwd],(err,result)=>{
		if(err){
			next(err);
			return		
		}else{
			console.log('注册成功！')
			res.send("<head><script>function jump(){location.href='index.html';}</script></head><h1>注册成功！</h1><br>"+'欢迎用户：' + req.body.user
			+ "<p style='text-align: center;'><input style='width: 100px; height: 30px;' type = 'button' onclick = 'jump()' value = 'Back'></p>")
			}
			
	})


})
//错误排出
app.use((err,req,res,next)=>{
	console.log(err);
	res.status(404).send({code:404,msg:'糟糕！出错了！'})
})
