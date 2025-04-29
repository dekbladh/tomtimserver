// deklarerar deppendencies och konstanta variabler
const express = require('express');
const app = new express();
const portNr = 8085;


// hämta in fs och deklarera filsökväg
const fs = require('fs');
const jsonFilePath = './data.json';

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

// Middleware för att servera statiska filer från "bilder"-mappen
app.use('/bilder', express.static('bilder'));

// SKAPA EN LISTEN METOD
app.listen(portNr, () => {
    console.log(`Servern körs på port ${portNr}`);
})


// Skapa en GET-endpoint
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <style>
                    body {
                        font-family: "Times New Roman", serif;
                        font-size: 20px;
                        color: #333;
                        text-align: center; /* Centrera texten */
                        margin: 0;
                        padding: 0;
                    }
                    img {
                        max-width: 100%; /* Anpassa bildens storlek */
                        height: auto;
                        margin-top: 20px;
                    }
                </style>
            </head>
            <body>
                <h1>Välkommen till servern--33!</h1>
                <img src="/bilder/balkongvinter-1.jpg" alt="Balkong vinter" />
            </body>
        </html>
    `);
});

//skapa en get endpint med anna url
app.get('/about', (req, res) => {
    res.sendFile("about.html", { root: __dirname });
})

//skapa en post metod
app.post('', (req, res) => {
    // i Req.data ligger inkommande payload
    const payload = req.body;
    res.send(payload.name, + '' + payload.age);
});