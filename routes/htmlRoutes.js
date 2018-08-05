
var path = require('path');

module.exports = function(app) {

    app.get('/', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/index.html'));
    });
    app.get('/home', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/index.html'));
    });
    app.get('/artPortfolio', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/artPort.html'));
    });
    app.get('/techPortfolio', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/techPort.html'));
    });
    app.get('/aboutme', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/aboutme.html'));
    });
};

