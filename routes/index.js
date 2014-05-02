var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.render('index', { title: 'Moo Moo Cards' })
})

router.get('/card/:id', function(req, res) {
    res.render('card', {"cardId": req.params.id})
})

router.get('/cards', function(req, res) {
    var cards = req.db.get('cards')
    var allCards = new Array()
    cards.find({})
        .each(function(doc) {
            allCards.push(doc._id)
        })
        .success(function() {
            res.render('allCards', {"cards": allCards})
        })
})

module.exports = router
