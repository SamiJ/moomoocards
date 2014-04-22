var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.render('index', { title: 'Moo Moo Cards' })
})

router.get('/card/:id', function(req, res) {
    var cards = req.db.get('cards')
    cards.findById(req.params.id, function(err, doc) {
        res.render('card', {"imageDataUrl": doc.imageDataUrl})
    })
})

module.exports = router



