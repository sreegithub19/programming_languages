var md = require('markdown-it')();
var result = md.render(`

# markdown-it rulezz!
## markdown-it rulezz!
### markdown-it rulezz!
#### markdown-it rulezz!

Heading level 1
===============

I just love __bold text__.
I just love **bold text**.

Italicized text is the *cat's meow*.
Italicized text is the _cat's meow_.

This text is ***really important***.

1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item

- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item

+ First item
+ Second item
+ Third item
+ Fourth item

* This is the first list item.
* Here's the second list item.

    > A blockquote would look great below the second list item.

* And here's the third list item.

My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

[![An old rock in the desert](/shiprock.avif "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)

`);
console.log(result)

const express = require('express')
const app = express()
const port = 3001

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})