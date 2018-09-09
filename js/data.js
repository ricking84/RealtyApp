const http = require('http');
const url = 'http://localhost:8080/Jan18';

let req = http.get(url, (res) => {
    let body = '';
    res.setEncoding('utf8');
    console.log("Response from server started......");
    console.log(`Server Status: ${res.statusCode} `);
    console.log("Response Headers: %j", res.headers);
    res.on("data", data => {
        body += data;
        //  console.log(body);
    });

    res.on("end", () => {
        body = JSON.parse(body);
        for (i in body.Sheet1) {
            Address = body.Sheet1[i].Address + ' Bentonville, AR 72712';
            let type = body.Sheet1[i].PermitType;
            console.log(Address + '\n' + type + '\n');  
            return address;      
        };
    });
});

