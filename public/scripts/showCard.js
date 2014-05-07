require(['dependencies'], function() {
    require(['jquery'], function($) {
            card = new Image()
            card.src = "/api/card/" + cardId
            $('#cardContent').append(card)
        })
})
