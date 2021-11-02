const PORT = 1337
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())


const url = 'https://www.warmane.com/'

app.get('/', function (req, res) {
    res.json('This is my webscraper')
})

app.get('/results', (req, res) => {
    axios(url)
        .then(response => {
            const body = response.data
            /* const $ = cheerio.load(body) */
            const article = [body]
            
           
            /* console.log(Style) */
            res.json(article)
        }).catch(err => console.log(err))

})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))