define(['jquery', 'underscore'], function () {
    var INITIAL_CARD = "/images/card_apina.png"
    var initialize = function (container) {
        $(container).html("<canvas class='moomooCards'></canvas>")
        var canvas = $(container + " .moomooCards")[0]
        var context = canvas.getContext('2d')
        var img = new Image()
        img.src = INITIAL_CARD
        img.onload = function () {
            canvas.width = this.width
            canvas.height = this.height
            context.drawImage(this, 0, 0)
        }
    }

    return {
        initialize: initialize
    }
})
