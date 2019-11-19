
const con=require('./connectdb')
const mysql=require('mysql')
const readline=require('readline-sync');

var emailid=readline.question('Enter emailid:');
var password=readline.question('Enter your password:');

var sql="select * from account where emailid=? and password=?";
var data=[emailid,password];
var sql=mysql.format(sql,data);
con.query(sql,(err,result)=>{
	if(err) throw err;
	else

		if(result.length>0)
		{
			console.log("login success");
		

var sql="select * from mail where receiver=?";
var data=[emailid];
var sql=mysql.format(sql,data);
con.query(
sql,(err,result)=>{
  if(err) throw err;
  else
  {

  console.log("result");
var command =readline.question('do you really want to delete all mails from inbox(Y/N)')
if(command=='y')
{
	var sql="delete from mail where receiver=?";
	var data=[emailid]
	var sql=mysql.format(sql,data);
	con.query(sql,(err)=>{
		if(err) throw err;
		else
			console.log("mail deleted.....");

	})
}
else{
	console.log("mail not deleted");
}
}
})
}
else console.log("login fail");
})

