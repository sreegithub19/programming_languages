var md = require('markdown-it')();
var result = md.render(`
# markdown-it rulezz!
## markdown-it rulezz!
### markdown-it rulezz!
#### markdown-it rulezz!
`);
console.log(result)

const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})