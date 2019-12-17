export default function request(options){
 wx.request({
url:options.url,
method:options.method||'get',
data:options.data||{},
success:function(res){
  console.log(res)
},
fail:function(err){
  console.log(err)
}

 })
}