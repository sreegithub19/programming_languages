// Code to convert pdf to html: (Pdfcrowd Error: 458 - Conversion Time Exceeded)
  // https://pdfcrowd.com/api/pdf-to-html-nodejs/

  // encyclopedia_1.pdf: https://www.pdfdrive.com/world-encyclopedia-of-dinosaurs-prehistoric-creatures-the-ultimate-visual-reference-to-1000-dinosaurs-and-prehistoric-creatures-of-land-air-and-sea-from-the-triassic-jurassic-and-cretaceous-eras-d187762457.html
  // encyclopedia.pdf: https://www.pdfdrive.com/encyclopedia-of-dinosaurs-e46112175.html
  // the above html and pdf files exceeding git file size limit.

// Website to convert pdf to html: https://pdf.io/pdf2html/

/*
// var pdfcrowd = require("pdfcrowd");

// // create the API client instance
// var client = new pdfcrowd.PdfToHtmlClient("demo", "ce544b6ea52a5621fb9d55f8b542d14d");

// // run the conversion and write the result to a file
// client.convertFileToFile(
//     "C:/Users/Padmaja/Desktop/sreedhar/new_practice/programming_languages/javascript/express_/pdf_html/encyclopedia_1.pdf",
//     "encyclopedia.html",
//     function(err, fileName) {
//         if (err) return console.error("Pdfcrowd Error: " + err);
//         console.log("Success: the file was created " + fileName);
//     });
*/

const express = require('express');
const path = require('path');
const app = express();
// http://127.0.0.1:5000/

app.get('/',function(req,res) {
  //res.sendFile(__dirname + '/encyclopedia.html');
  res.send(``);
});



app.listen(5000, () => {
  console.log('App is listening on port 5000');
});