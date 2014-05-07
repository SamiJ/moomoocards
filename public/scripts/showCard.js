require(['dependencies'], function () {
    require(['jquery'], function ($) {
        var container$ = $('#cardContent')
        card = new Image()
        card.onerror = function () {
            container$.append("Sorry, your card seems to have been lost in the mail :(")
        }
        card.onload = function () {
            container$.append(card)
        }
        card.src = "/api/card/" + cardId
    })
})
