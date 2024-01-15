const http = require("http")
const port = 8900

const server = http.createServer((req,res) => {
    res.write("Ebuka Obigwe Francis")
    res.end()
})

server.listen(port, () => {
    console.log(`listening for port ${port}`)
})