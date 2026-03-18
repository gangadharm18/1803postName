const fs = require('fs');
const requesthandler=(req,res)=>{
 const method=req.method;
    res.setHeader('Content-type','text/html')
   if(req.url=='/' && method=="GET"){
     res.end(
        `<form action="/" method="POST">  
        <label>name:</label>
        <input type='text' name='username'></input>
        <button type='submit'>add</button>
        </form>`
        )
    }else if(req.url=='/' && method=="POST"){
        let chunkData=[];
        req.on('data',chunk=>{
           chunkData.push(chunk)
        })
        req.on('end',()=>{
            let name=Buffer.concat(chunkData).toString().split("=")[1];
            console.log(name)
            res.end(
                `<h1>${name}</h1>
                <form action="/" method="POST">  
                 <label>name:</label>
                 <input type='text' name='username'></input>
                <button type='submit'>add</button>
               </form>`
                
            )
        })
    }


}
function anotherFunction(){
    console.log("another function called")
}
module.exports.handler=requesthandler;
module.exports.another=anotherFunction;

//     else{
//         if(req.url=='/message'){
//              res.setHeader('Content-type','text/html')
//             let datachunk=[]
//             req.on('data',(chunks)=>{
//                 console.log(chunks)
//                 datachunk.push(chunks)
//             })
//             req.on('end',()=>{
//                 let combinedBuffer=Buffer.concat(datachunk)
//                 let value=combinedBuffer.toString().split("=")[1]
//                 console.log(value)
//                 fs.writeFile('form.txt',value,(err)=>{
//                     res.statusCode=302;
//                     res.setHeader('location','/')
//                     res.end()
//                 })

//             })
//         }else{
//             if(req.url=='/read'){
//                 fs.readFile('form.txt',(err,data)=>{
//                     console.log(data.toString())
//                     res.end(`<h1>${data.toString()}</h1>`)
//                 })
//             }
//         }
//     }
// })