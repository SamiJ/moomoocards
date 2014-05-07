require.config({
    paths: {
        jquery: 'libs/jquery-2.1.0',
        underscore: 'libs/underscore',
        kinetic: 'libs/kinetic-v5.1.0'
    },
    shim: {
        kinetic: {exports: "Kinetic"}
    }
})