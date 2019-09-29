
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: () => {
        document.getElementById('app').innerHTML = 'loading';
        if (session === null) {
            loginPage()
        } else {
            indexPage()
        }
    }
};

app.initialize();
