
/*
 * GET home page.
 */

var TwitterTrendProvider = require('../lib/TwitterTrendProvider.js');

exports.index = function(req, res){
    var twitter =  new TwitterTrendProvider();

    twitter.updateTwitterTrends(function(err, twitter) {
 /*       console.log(err);
        console.log(twitter);*/
        res.write(twitter, 'string');
    })
    //res.render('index', { msg: 'Hello' });
};