const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((request, response) => {
        //console.log("Recieved an incoming request!");
        console.log("There's another starship coming in... ");
        response.writeHead(httpStatus.StatusCodes.OK, {     //httpStatus.OK <- deprecated
            "Content-Type": "text/html"
        });

        //let responseMsg = "<h1>Hello World!</h1>";
        let responseMsg = "<h1>It's the Enterprise!!!</h1>";
        response.write(responseMsg);
        response.end();
        console.log(`Sent a response : ${responseMsg}`);
    });

app.listen(port);
console.log(`The server has started listening on port number: ${port}`);