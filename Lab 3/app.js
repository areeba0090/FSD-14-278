import http from "http";

const server = http.createServer((req,res) => {   // turn on the server and the number of times request comes respond 
    res.write("<h2>Welcome to Serverside</h2>");
});

server.listen(5000, ()=>{
    console.log("Server is Running");
});