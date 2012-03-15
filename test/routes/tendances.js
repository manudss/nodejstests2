/*
 * GET tendances home page
 */
module.exports = function(app) {
    app.get('/tendances/', function (req, res, next) {
        res.render('tendances', { msg: 'Hello' });
    });
}