
const con=require('./connectdb')
const mysql=require('mysql')
const readline=require('readline-sync');


var emailid=readline.question('Enter your emailid:');
var cpassword=readline.question('Enter your cuurent password:');
var npassword=readline.question('Enter your new password:');

var sql="update account set password=? where emailid=? and password=?";
var data=[npassword,emailid,cpassword]
var sql=mysql.format(sql,data);
console.log(sql)
con.query(sql,(err,result)=>{
  if(err) throw err;
  else if(result.changedRows>0)
  console.log("password change successfully...")
else
	console.log("not changed");
})
