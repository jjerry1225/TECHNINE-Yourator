const express = require('express')

const port = 3000
const app = express()

const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(routes)

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`)
})