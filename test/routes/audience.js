/*
 * GET Concurrence home page
 */
module.exports = function(app) {
    app.get('/audience/', function (req, res, next) {
        res.render('audience', { msg: 'Hello' });
    });
}