const express = require('express')
const path = require('path')
const app = express()

app.get('/', function (req, res) {
    //   res.send('Hello World')
    res.sendFile(path.resolve(__dirname,'index.html'))
})

app.listen(3000, () => console.log(`server running on port ${3000}\r\n`))