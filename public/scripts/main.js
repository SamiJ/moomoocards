require.config({
    paths: {
        jquery: 'libs/jquery-2.1.0',
        underscore: 'libs/underscore'
    }
})

require(['moomoocards'], function (Cards) {
    Cards.initialize("#mooAppContent")
})
