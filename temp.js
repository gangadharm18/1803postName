const http=require('http')
const fs = require('fs');

const app=http.createServer((req,res)=>{
   const method=req.method;
    res.setHeader('Content-type','text/html')
   if(req.url=='/'){
     res.end(
        `<form action="/message" method="POST">  
        <label>name:</label>
        <input type='text' name='username'></input>
        <button type='submit'>add</button>
        </form>`
        )
    }else{
        if(req.url=='/message'){
             res.setHeader('Content-type','text/html')
            let datachunk=[]
            req.on('data',(chunks)=>{
                console.log(chunks)
                datachunk.push(chunks)
            })
            req.on('end',()=>{
                let combinedBuffer=Buffer.concat(datachunk)
                let value=combinedBuffer.toString().split("=")[1]
                console.log(value)
                fs.writeFile('form.txt',value,(err)=>{
                    res.statusCode=302;
                    res.setHeader('location','/')
                    res.end()
                })

            })
        }else{
            if(req.url=='/read'){
                fs.readFile('form.txt',(err,data)=>{
                    console.log(data.toString())
                    res.end(`<h1>${data.toString()}</h1>`)
                })
            }
        }
    }
})
app.listen(3000,()=>{
 console.log('sever running')
})