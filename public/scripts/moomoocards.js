define(function (require) {
    var $ = require('jquery')
    var _ = require('_')
    require('kinetic')

    var INITIAL_CARD = "/images/card_apina.png"

    var initialize = function (container) {
        var stage = createStage(container)
        $('#' + container).prepend('<textarea></textarea><br>')
        $('#' + container).append('<div id="js-save">Save and share your card</div>')

        var $message = $('#' + container + ">textarea")

        var messageLayer = new Kinetic.Layer(
            {
                draggable: true,
                dragBoundFunc: function (pos) {
                    return {
                        // FIXME: limits to precalculated vars
                        x: Math.max(0, Math.min(background.width-message.getTextWidth(), pos.x)),
                        y: Math.max(0, Math.min(background.height-message.getHeight(), pos.y))
                    }
                }
            })
        var message = new Kinetic.Text({
            x: 0,
            y: 0,
            fontSize: 24,
            fontFamily: 'Calibri',
            fill: '#eee',
            width: 380,
            padding: 0,
            fontStyle: 'bold'
        })

        $message.on('input propertychange', function () {
            message.text($message.val())
            messageLayer.draw()
        })

        $('#js-save', '#' + container).on('click', function() {
            stage.toDataURL({
                    callback: function(dataUrl) {save($message.val(), dataUrl, function(id) {alert(id)})}
                })
        })

        messageLayer.add(message)

        var backgroundLayer = new Kinetic.Layer()
        var background = new Image()
        background.src = INITIAL_CARD
        background.onload = function () {
            backgroundLayer.add(new Kinetic.Image({image: background}))
            stage.add(backgroundLayer)
            stage.add(messageLayer)
            stage.draw()
        }
    }

    function createStage(container) {
        return new Kinetic.Stage({
            container: container,
            width: 640,
            height: 420
        })
    }

    function save(message, dataUrl, callback) {
        $.post("api/createCard", {"message": message, "imageDataUrl": dataUrl}, function(data) {callback(data.cardId)})
    }

    return {
        initialize: initialize
    }
})
