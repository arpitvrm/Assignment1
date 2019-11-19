
const con=require('./connectdb')
const mysql=require('mysql')
const readline=require('readline-sync');


var emailid=readline.question('Enter emailid:');
var password=readline.question('Enter your password:');

var sql="select * from account where emailid=? and password=?";
var data=[emailid,password]
var sql=mysql.format(sql,data);
//console.log(sql)
con.query(sql,(err,result)=>{
  if(err) throw err;
  else 
  	{
  		if(result.length>0)
{
  console.log("login successfully...");

var receiver=readline.question('Enter  receiverid:');
var subject=readline.question('Enter subject:');
var message=readline.question('Enter your message:');

var sql="insert into mail(sender,receiver,subject,message) values(?,?,?,?)";
var data=[emailid,receiver,subject,message]
var sql=mysql.format(sql,data);

con.query(sql,(err)=>{
	if(err)  throw err;
	else
		console.log("Mail Send Successfully...");


})


}else
    console.log("Login Fail");
  }
})







