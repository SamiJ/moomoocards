require.config({
    paths: {
        jquery: 'libs/jquery-2.1.0',
        _: 'libs/underscore',
        kinetic: 'libs/kinetic-v5.1.0',
        mooMooCards: 'moomoocards'
    },
    shim: {
        kinetic: {exports: "Kinetic"}
    }

})

require(['moomoocards'], function (cards) {
    cards.initialize("mooAppContent")
})
