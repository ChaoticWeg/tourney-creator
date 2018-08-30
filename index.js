const express = require('express');
const morgan  = require('morgan');
const path    = require('path');

(() => {
    // get port from env, default to 3000
    let port = process.env['PORT'] || 3000;

    // create test app that serves static from docs/
    let app  = express();
    app.use(express.static(path.join(__dirname, 'docs')));
    app.use(morgan('dev'));

    // listen
    app.listen(port, () => {
        console.log('listening on port ' + port);
    });
})();
