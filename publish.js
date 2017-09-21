const ghpages = require('gh-pages')

const files = [
  'index.html',
  'bundle.js',
  'extrategy-styleguide.css'
]

ghpages.publish('.', {src: files}, err => {
  if (err) {
    console.log(err)
  } else {
    console.log('Published')
  }
})
