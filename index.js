require('dotenv').config()
const http = require('http')
const fs = require('fs')
const path = require('path')

function requestHandler(req, res) {
    const filePath = path.join(__dirname, 'public', 'index.html')

    fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
            res.end('Error al cargar la página')
            return
        }

        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(content)
    })
}

const server = http.createServer(requestHandler)
const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Aplicación corriendo en http://localhost:${PORT}`)
})