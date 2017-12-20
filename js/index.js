
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        app.amendLinks('external-link');
        

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
amendLinks: function(className) {
var n = 0,
links = document.getElementsByClassName(className);
for (; n < links.length; n++) {
links[n].onclick = function(e) {
e.preventDefault();
window.open(''.concat(this.href), '_blank');
}
}
}
};


    var feed = 'http://feeds.feedburner.com/RenewedLifeFellowship';
    $('#feed').yrss(feed, {
        ssl: false,
        limit: 20,
        reverse: false,
        cache: true,
        maxage: 3600,
        showerror: true,
        errormsg: '',
        tags: true,
        date: true,
        dateformat: 'spellmonth',
        titletag: 'h4',
        content: true,
        image: true,
        snippet: true,
        snippetlimit: 120,
        linktarget: '_blank',
        logging: false
    }, function () {
        // optional callback function
    });

//app.initialize();



