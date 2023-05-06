const express = require('express');

const admire = express();

admire.use(express.static('public'));

admire.get('/home', (request, response) => {
    console.log(request);
    response.send('<h1> Welcome to page Kobe! 🏀 </h1>');
});

admire.get('/about', (request, response) => {
    console.log(request);
    response.send('<h1> About </h1>');
});

admire.get('/works', (request, response) => {
    console.log(request);
    response.send('<h1> Works </h1>');
});

admire.get('/photogallery', (request, response) => {
    console.log(request);
    response.send('
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Photo Gallery</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <h1>Cat</h1>
        <p>This is my second route</p>
        <img src="/images/cool-cat.jpg" />
      </body>
    </html>');
});


admire.listen(0824, () => console.log('3...2...1...Kobe! 🏀'));

