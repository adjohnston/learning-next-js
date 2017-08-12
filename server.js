const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/post/:id', (req, res) => {
      const page = '/post'
      const params = { title: req.params.id }
      app.render(req, res, page, params)
    })

    server.get('*', handle)

    server.listen(3000, err => {
      if (err) throw err

      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
