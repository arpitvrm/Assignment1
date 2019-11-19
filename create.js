
const con=require('./connectdb')
const mysql=require('mysql')
const readline=require('readline-sync');


var name=readline.question('Enter your Name:');
var emailid=readline.question('Enter emailid:');
var password=readline.question('Enter your password:');

var sql="insert into account(name,emailid,password) values(?,?,?)";
var data=[name,emailid,password]
var sql=mysql.format(sql,data);
con.query(sql,(err)=>{
  if(err) throw err;
  else
  console.log("Data inserted...");
})
