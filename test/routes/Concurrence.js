
/*
 * GET Concurrence home page
 */
module.exports = function(app) {
    app.get('/concurrence/', function (req, res, next) {
        res.render('concurrence', { msg: 'Hello' });
    });
}

