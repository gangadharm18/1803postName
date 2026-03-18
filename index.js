const http=require('http')
const app=http.createServer((req,res)=>{
    console.log("created server")
    res.setHeader('Content-type','text/html')
   if(req.url=='/'){
     res.end("<h1>Hello World!</h1>")
   }else{
    if(req.url=='/pizza'){
     res.end("<h1>This is Your pizza</h1>")
   }else if(req.url=='/home'){
     res.end("<h1>Welcome home</h1>")
   }else if(req.url=='/about'){
     res.end("<h1>Welcome to about us</h1>")
   }else if(req.url=='/node'){
     res.end("<h1>Welcome to node js </h1>")
   }else if(req.url=='/about'){
     res.end("<h1>Welcome to about us</h1>")
   }else{
    res.end("<h1>page not found</h1>")
   }
}
})

app.listen(3000,()=>{
 console.log('sever running')
})
