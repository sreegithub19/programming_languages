
const express = require('express');
const path = require('path');
var public = path.join(__dirname, 'public');

const app = express();
// http://127.0.0.1:5000/

app.use("/",express.static('public'));


// app.get('/',function(req,res) {
//   res.send(` 
//   <embed src="https://afgjilibrary.files.wordpress.com/2020/07/how-i-taught-my-grandmother-to-read-and-other-stories-pdfdrive.com-1.pdf" width="100%" height="1500px" />
//   <hr>
//   <embed src="http://www.4newmum.com/[Dorling_Kindersley]_Encyclopedia_of_Dinosaurs_and(BookFi).pdf" width="100%" height="1500px" />
//   <hr>
//   <embed src="https://ia904509.us.archive.org/18/items/visual-encyclopedia-by-dk-z-lib.org_202109/Visual%20Encyclopedia%20by%20DK%20%28z-lib.org%29.pdf" width="100%" height="1500px" />
//   <hr>
//   <embed src="http://giove.isti.cnr.it/demo/eread/Libri/joy/TSawyer.pdf" width="100%" height="1500px" />
//   <hr>
//   <embed src="https://www.gutenberg.org/cache/epub/76/pg76-images.html" width="90%" height="1500px" />
//   `);
// });

app.get('/next',function(req,res) {
  //res.sendFile(__dirname + '/encyclopedia.html');
  res.sendFile(path.join(public, 'TS_and_JS_products.pdf'));
});



app.listen(5000, () => {
  console.log('App is listening on port 5000');
});