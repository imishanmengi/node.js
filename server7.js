const http = require('http');
const server= http.createServer((req,res)=>{
    const url= req.url;
    if(url==='/home'){
        res.write('<html>');
        res.write('<head><title>hello</title></head>');
        res.write('<body><h1>welcome to home</h1></body>');
        res.write('</html>');
        return res.end();

    }
    else if(url==='/about'){
        res.write('<html>');
        res.write('<head><title>hello</title></head>');
        res.write('<body><h1>welcome to about</h1></body>');
        res.write('</html>');
        return res.end();

    }
    else if(url==='/node'){
        res.write('<html>');
        res.write('<head><title>hello</title></head>');
        res.write('<body><h1>welcome to node</h1></body>');
        res.write('</html>');
        return res.end();

    }
    


});
server.listen(2000);

