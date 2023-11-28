const app = require("express")()
const fs = require("fs")
// 私钥跟证书
const httpsOption = {
    key: fs.readFileSync("./ssl/server.key"),
    cert: fs.readFileSync("./ssl/server.crt"),
}
// 创建https
const https = require("https").Server(httpsOption,app)

const port = 3000

app.get("/test",(req,res)=>{
    res.send("<h1>你好啊，https</h1>")
})


https.listen(port,()=>{
    console.log("https start!!",port)
})
