var express = require('express')
var router = express.Router()

router.get('/card/:id', function(req, res) {
    var cards = req.db.get('cards')
    cards.findById(req.params.id, function(err, doc) {
        if (err) console.log(err)
        res.type('png')
        res.send(doc.imageData.buffer)
    })
})

router.post('/card', function(req,res) {
    var db = req.db
    var message = req.body.message
    var imageDataBase64 = req.body.imageDataUrl.split(',')[1]
    var imageData = new Buffer(imageDataBase64, 'base64')

    var collection = db.get('cards')
    collection.insert({
        "message": message,
        "imageData": imageData
    }, function(err, doc) {
        if (err) {
            res.send('There unfortunately was an error when storing your card to the service, please try again later.')
        } else {
            res.send({"cardId": doc._id})
        }
    })
})

module.exports = router