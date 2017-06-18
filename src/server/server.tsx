import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import * as React from 'react';
import { StaticRouter } from 'react-router';
import * as ReactDOMserver from 'react-dom/server';

// import { App } from '../index';
import ExampleRouter from '../routes/routes';
const server = express();

const port = process.env.PORT || 3000;

server.use(express.static(path.resolve('./node_modules')));
server.use(express.static(path.resolve('./dist')));

server.get('*', (req, res) => {
    const context = {};
    console.log('this context', context);
    console.log(req.url);
    const html = ReactDOMserver.renderToString(
        <StaticRouter location={req.url} context={context}>
            <ExampleRouter />
        </StaticRouter>
    );
    res.write(`
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8" />
                <title>Hello React!</title>
                <link rel="stylesheet" type="text/css" href="/style.css">
            </head>
            <body>
                <div id="example"></div>
                <!-- Main -->
                <script src="/bundle.js"></script>
            </body>
        </html>
    `);
    res.end();
  }
);

// server.get('*', (req, res) => {
//     // const context = {};
//     // console.log('this context', context);
//     // console.log(req.url);
//     // const html = ReactDOMserver.renderToString(
//     //     <StaticRouter location={req.url} context={context}>
//     //         <ExampleRouter />
//     //         {/*<App />>*/}
//     //     </StaticRouter>
//     // );
//     // res.write(`
//     //     <!doctype html>
//     //     <link rel="stylesheet" type="text/css" href="/style.css">
//     //     <div id="example">${html}</div>
//     // `);
//     // res.end();
//     res.sendFile(path.resolve('./index.html'));
//   }
// );

server.listen(port);
