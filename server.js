const http = require('http');
const server= http.createServer((req,res)=>{
    res.write("ishan mengi");
    res.end();

});
server.listen(18000);

