var express = require('express')
var router = express.Router()

router.post('/createCard', function(req,res) {
    var db = req.db
    var message = req.body.message
    var imageDataUrl = req.body.imageDataUrl

    var collection = db.get('cards')
    collection.insert({
        "message": message,
        "imageDataUrl": imageDataUrl //FIXME - store in binary png
    }, function(err, doc) {
        if (err) {
            res.send('There unfortunately was an error when storing your card to the service, please try again later.')
        } else {
            res.send({"cardId": doc._id})
        }
    })
})


module.exports = router