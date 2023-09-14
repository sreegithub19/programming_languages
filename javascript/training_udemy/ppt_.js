const PPTX = require('nodejs-pptx');
const html2pptxgenjs_ = require('html2pptxgenjs');
let pptx = new PPTX.Composer();

pptx.compose(pres => {
  pres.addSlide(slide => {
    slide.addText(text => {
      text
      .value('Hello you World');
    });
  });


  pres.addSlide(slide => {
        slide.addText({ value: 'Link to google.com', x: 200, y: 300, href: 'http://www.google.com' });
  });

//   pres.addSlide(slide => {
//         slide.addText(html2pptxgenjs_.htmlToPptxText('Hello, <b>world</b>!'), { x: 0.5, y: 0, w: 9.5, h: 6, valign: 'top' });
//   });

});

pptx.save(__dirname + `/hello-world.pptx`);