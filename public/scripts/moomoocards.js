define(function(require) {
    var $ = require('jquery')
    var _ = require('_')
    require('kinetic')

    var INITIAL_CARD = "/images/card_apina.png"

    var initialize = function (container) {
        var stage = createStage(container)
        var message = $('#' + container).append('<textarea></textarea>')

        var messageLayer = new Kinetic.Layer({draggable: true})
        var message = new Kinetic.Text({
            x: 100,
            y: 60,
            text: 'COMPLEX TEXT\n\nAll the world\'s a stage, and all the men and women merely players. They have their exits and their entrances.',
            fontSize: 18,
            fontFamily: 'Calibri',
            fill: '#555',
            width: 380,
            padding: 20,
            align: 'center'
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
