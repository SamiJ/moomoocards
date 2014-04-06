define(['kinetic','jquery', 'underscore'], function () {
    var INITIAL_CARD = "/images/card_apina.png"

    var initialize = function (container) {
        var stage = createStage(container)

        var backgroundLayer = new Kinetic.Layer()
        var background = new Image()
        background.src= INITIAL_CARD
        background.onload = function() {
            backgroundLayer.add(new Kinetic.Image({image: background}))
            stage.add(backgroundLayer)
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
