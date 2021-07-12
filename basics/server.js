const http =  require('http');

const server = http.createServer((req, res) => {
    res.end("Namastey! Welcome to the Real Developing World Updated!!");
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server has started at port: ${PORT}`)
})