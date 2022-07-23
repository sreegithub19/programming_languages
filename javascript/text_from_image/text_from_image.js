const ReadText = require('text-from-image')

ReadText('./text_from_image.jpeg').then(text => {
    console.log(text);
}).catch(err => {
    console.log(err);
})