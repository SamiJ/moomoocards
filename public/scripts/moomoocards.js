define(function(require) {
    var $ = require('jquery')
    var _ = require('_')
    require('kinetic')

    var INITIAL_CARD = "/images/card_apina.png"

    var initialize = function (container) {
        var stage = createStage(container)
        $('#' + container).prepend('<textarea></textarea><br>')

        var $message = $('#' + container + ">textarea")
        var messageLayer = new Kinetic.Layer({draggable: true})
        var message = new Kinetic.Text({
            x: 100,
            y: 60,
            fontSize: 24,
            fontFamily: 'Calibri',
            fill: '#eee',
            width: 380,
            padding: 20,
            align: 'center',
            fontStyle: 'bold'
        })

        $message.on('input propertychange', function() {
            message.text($message.val())
            messageLayer.draw()
        })

        messageLayer.add(message)

        var backgroundLayer = new Kinetic.Layer()
        var background = new Image()
        background.src= INITIAL_CARD
        background.onload = function() {
            backgroundLayer.add(new Kinetic.Image({image: background}))
            stage.add(backgroundLayer)
            stage.add(messageLayer)
            stage.draw()
        }

    }

    function createStage(container) {
        var stage = new Kinetic.Stage({
            container : container,
            width : 640,
            height : 420
        })

        return stage
    }

    return {
        initialize: initialize
    }
})
