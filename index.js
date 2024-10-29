const express = require('express')
const app = express();

// すべてにレスポンス
// app.use((req, res) => {
// })

app.get('/cats', (req, res) => {
    res.send('ho')
})

app.get('/r/:sub/:id/:unch', (req, res) => {
    const {sub, id, unch} = req.params
    res.send(`sub:${sub} id:${id} unch:${unch}`)
})

app.get('/search', (req, res) => {
    const { q } = req.query
    if(!q){
        res.send(`<h1>No query</h1>`)
    }else{
        res.send(`<h1>${q}</h1>`)
    }
    
})

app.get('/', (req, res) => {
    res.send('getのみ(ブラウザで確認できるのは):root')
})

app.get('*', (req, res) => {
    res.send('ワイルドカードは一番下')
})


app.listen(8080, () => {
    console.log('8080 listen..')
})