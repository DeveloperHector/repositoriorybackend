require('dotenv').config()
const http = require('http')

function requestHandler() {
    console.log('Bienvenidos al curso')
}

const server=http.createServer(requestHandler)

const PORT = process.env.PORT

server.listen(PORT, function() {
  console.log('Aplicacion corriendo en :' + PORT)
  
})