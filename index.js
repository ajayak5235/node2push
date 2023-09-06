// const http = require('http');
// const fs = require('fs');
// const index = fs.readFileSync('index.html','utf-8');
// const data = fs.readFileSync('data.json','utf-8');


// //const data = {age:5};
// const server = http.createServer((req,res)=>{
// console.log(req.url);
// switch(req.url){
//     case '/':
//         res.setHeader('Content-Type','text/html');
//         res.end(index);
//         break;
//         case '/api':
//             res.setHeader('Content-Type','application/json');
//             res.end(data);
//             break;
//             default:
//                 res.writeHead(404);
//                 res.end();
// }
// console.log('server started');
// //res.setHeader('Dummy','DummyValue');
// //res.setHeader('Content-Type','text/html');

// //res.end(data);
// });
// server.listen(8080)


const http = require('http');
const express = require('express')

const app = express();
app.use = ((req, res, next)=>{
    console.log(('1st middleware'));
    next();//allows the request to continue to the next middleware in line
});
app.use = ((req,res,next)=>{
    console.log(('2nd middleware'));
    res.send('<h1>Hello from Express</h1>')
    res.json(app)
});
const server = http.createServer(app);
server.listen(3000);