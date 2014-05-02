define(function (require) {
    var $ = require('jquery')
    var _ = require('_')
    require('kinetic')

    var INITIAL_CARD = "/images/card_apina.png"

    var stage,
        $container,
        $message,
        dragLimitX, dragLimitY,
        backgroundLayer = new Kinetic.Layer(),
        background = new Image()

    var initialize = function (container) {
        createInitialPage(container)
        bindEvents()
    }

    function createInitialPage(container) {
        stage = createStage(container)
        $container = $('#' + container)
        $container.prepend('<textarea></textarea><br>')
        $container.append('<div id="js-save">Click here to save and share your card :)</div>')
        $message = $('#' + container + ">textarea")
        messageLayer.add(message)
        background.src = INITIAL_CARD
        background.onload = function () {
            updateDragLimits(background, message)
            backgroundLayer.add(new Kinetic.Image({image: background}))
            stage.add(backgroundLayer)
            stage.add(messageLayer)
            stage.draw()
        }
    }

    var message = new Kinetic.Text({
        x: 0,
        y: 0,
        fontSize: 24,
        fontFamily: 'Calibri',
        fill: '#fff',
        width: 380,
        padding: 0,
        fontStyle: 'bold'
    })

    var messageLayer = new Kinetic.Layer({
        draggable: true,
        dragBoundFunc: function (pos) {
            return {
                x: Math.max(0, Math.min(dragLimitX, pos.x)),
                y: Math.max(0, Math.min(dragLimitY, pos.y))
            }
        }
    })

    function updateDragLimits(image, message) {
        dragLimitX = image.width - message.getTextWidth()
        dragLimitY = image.height - message.getHeight()
    }


    function bindEvents() {
        $container.find('#js-save').on('click', function () {
            stage.toDataURL({
                callback: saveCardToDb
            })

            function saveCardToDb(dataUrl) {
                save($message.val(), dataUrl, function (id) {
                    var cardUrl = window.location.origin + "/card/" + id
                    var facebookShareUrl = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(cardUrl)
                    //FIXME - templates for js rendering?
                    $container.append('<div>')
                    $container.append('Card created successfully!<br>')
                    $container.append('<a target="_blank" href="' + cardUrl + '">' + cardUrl + '</a><br><br>')
                    $container.append('Share it on <a href="' + facebookShareUrl + '" target="_blank">Facebook</a>')
                    $container.append('</div>')
                })
            }
        })

        $message.on('input propertychange', function () {
            message.text($message.val())
            updateDragLimits(background, message)
            messageLayer.draw()
        })
    }

    function createStage(container) {
        return new Kinetic.Stage({
            container: container,
            width: 640,
            height: 420
        })
    }

    function save(message, dataUrl, callback) {
        $.post("api/createCard", {"message": message, "imageDataUrl": dataUrl}, function (data) {
            callback(data.cardId)
        })
    }

    return {
        initialize: initialize
    }
})
