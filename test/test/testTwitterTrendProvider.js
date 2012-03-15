var assert = require('should');

var TwitterTrendProvider = require('../lib/TwitterTrendProvider.js');



describe('TwitterTrendProvider#prototype', function() {
    var twitterTrendProvider =  new TwitterTrendProvider();
    console.log(twitterTrendProvider);
    it('should twitterTrendProvider have correct property', function() {
        twitterTrendProvider.should.have.property('listTrendTwitter');       
    });
    it('should twitterTrendProvider.getTwitterTrends return number below 0', function() {
        var nbrTrend = 5;
        console.log(twitterTrendProvider.getTwitterTrends());
        twitterTrendProvider.getTwitterTrends(nbrTrend).should.lengthOf(nbrTrend);
    });

});