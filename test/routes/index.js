
/*
 * GET home page.
 */

var TwitterTrendProvider = require('../lib/TwitterTrendProvider.js');

exports.index = function(req, res){
    var twitter =  new TwitterTrendProvider();


    twitter.updateTwitterTrends(function(err, twitter) {
       console.log(err);
        if (err != null) {
            res.write(err.message);
        } else  if (twitter != null) {
            console.log(twitter);
            var twitterTrends = twitter.getTwitterTrends(5);
            console.log(twitterTrends);
            res.render('tendances', { topTwitter:  twitterTrends });
        }

    })


};