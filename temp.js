const http=require('http')
const routes=require("./routes")

const app=http.createServer(routes.handler)
routes.another()

app.listen(3000,()=>{
 console.log('server running')
})