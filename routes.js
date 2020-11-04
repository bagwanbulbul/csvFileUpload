const express = require("express");

const app = express();
const bodyParser = require("body-parser");


app.get('/upload', function(request, response) {
    response.render('.uploadFile.html');
    // response.redirect(".uploadFile.html")
});

app.post('/uploadCsv', uploadFileController.uploadCsv);


app.listen(3500, () => {
    console.log("server started on port 3500")
})