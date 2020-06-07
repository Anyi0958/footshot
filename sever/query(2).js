//创建query 的promise函数 
var pool=require("./pool.js");
module.exports=function(sql,params){
  return new Promise(function(open,err){
    pool.query(sql,params,(error,result)=>{
      if(error) err(error);
      else open(result); 
    })
  })
}