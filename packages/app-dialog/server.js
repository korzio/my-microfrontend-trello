'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const distPath = './dist/app-dialog/'

http
    .createServer((req, res) => {
      if (req.url == '/') {
        return fs.createReadStream(path.join(__dirname, distPath, 'index.html')).pipe(res)
      }
      
      const filePath = path.join(__dirname, distPath, req.url)
      if (fs.existsSync(filePath)) {
        res.setHeader('Content-Type', 'application/javascript');
        return fs.createReadStream(filePath).pipe(res);
      }

        // if (req.url === '/script.js') {
        //     res.setHeader('Content-Type', 'application/javascript');
        //     return res.end(
        //         'c=!setInterval(\'document.getElementById("c").innerHTML=c++;\', 1e3)'
        //     );
        // }

        // 

        // // and some css
        // if (req.url === '/styles.css') {
        //     res.setHeader('Content-Type', 'text/css');
        //     return res.end('body { background: #303F9F; color: white }');
        // }

        // // Every Fragment sends a link header that describes its resources - css and js
        // const css = '<http://localhost:4200/styles.css>; rel="stylesheet"';
        // // this will be fetched using require-js as an amd module
        // const js = '<http://localhost:4200/main.js>; rel="fragment-script"';

        // res.writeHead(200, {
        //     Link: `${css}, ${js}`,
        //     'Content-Type': 'text/html'
        // });

        // <link rel="preconnect" href="https://fonts.gstatic.com">
        // <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
        // <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        // fragment content
        
        

        // res.writeHead(200, {
        //   'Content-Type': 'text/html',
        //   'Link': `<http://localhost:${PORT}/public/bundle.js>; rel="fragment-script"`
        // })
    })
    .listen(3001, function() {
        console.log('Fragment Server listening on port 3001');
    });