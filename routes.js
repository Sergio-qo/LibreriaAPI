const express = require('express')
const routes = express.Router()

routes.get('/books', (req, res) => {
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('select * from books', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/addBook', (req, res) => {
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('insert into books set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.json("Ok")
        })
    })
})

module.exports = routes