/*
 * GET top Contenus home page
 */
module.exports = function(app) {
    app.get('/topContenus/', function (req, res, next) {
        res.render('topContenus', { msg: 'Hello' });
    });
}