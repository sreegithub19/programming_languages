// npm install -g nunjucks

// 1
var nunjucks = require('nunjucks');
nunjucks.configure(__dirname + '/views')
var ans = nunjucks.render('sample.njk', { data: 'James' });
console.log(ans);


// 2
nunjucks.configure({ autoescape: true });
var ans = nunjucks.renderString('Hello {{ username }}', { username: 'James' });
console.log(ans)
