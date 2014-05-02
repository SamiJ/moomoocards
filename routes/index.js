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
    var imageDataUrls = new Array()
    cards.find({})
        .each(function(doc) {
            imageDataUrls.push(doc.imageDataUrl)})
        .success(function() {
            var params = {"imageDataUrls": imageDataUrls}
            console.log("params:" + JSON.stringify(params))
            res.render('allCards', params)})
})

module.exports = router
