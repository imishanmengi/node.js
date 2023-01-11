const http = require('http');
const server= http.createServer((req,res)=>{
    res.write("ishan mengi");
    res.end();
    process.exit();

});
server.listen(19000);

