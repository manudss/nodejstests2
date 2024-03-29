/**
 * To Request all information from twitter trend
 * User: edesaintsteban
 * Date: 14/03/12
 */


// Override http/https to use proxy environment variables
require('./proxy');
var http = require('http');

// Instentiate the TwitterTrendProvider
function TwitterTrendProvider() {
    this.listTrendTwitter = Array("carolina penthers", "facebook ipo", "irs", "ground hog day", "shaum white", "test autre", "test other");


    /**
     * Get all maxNbrTrends last twitter trends
     * @param maxNbrTrend
     * @return {Array}
     */
    this.getTwitterTrends = function (maxNbrTrend) {
        var returnListTrend = Array(maxNbrTrend);
        console.log(this.listTrendTwitter);
        for (var currentTrend = 0; currentTrend < this.listTrendTwitter.length; currentTrend++) {
            if (currentTrend == maxNbrTrend) {
               break;
            }
            returnListTrend[currentTrend] = this.listTrendTwitter[currentTrend];
            console.log(this.listTrendTwitter[currentTrend]);
        }
        return returnListTrend;
    }

    this.updateTwitterTrends = function (callBackFunction) {
       /* if ( typeof callBackFunction !== 'function' && callBackFunction != null) {
            throw 'FAIL: INVALID CALLBACK.';
            return this;
        }*/
        //Create a client (need to pass it these values??)
        var client = http.createClient('80', 'edesaintsteban.devpalm.tf1.fr');
       // var client = http.createClient(8090, 'httpproxy.tf1.fr');

//Request with headers for basic auth, which Twitter also accepts in addition to oAuth
//Note that we're using method 'statuses/filter' and parameter 'track'
//@Link http://dev.twitter.com/pages/streaming_api_methods#statuses-filter

        // /1/trends/23424819.json

        var request = client.request('GET', '/src/23424819.json', {
            "host":"edesaintsteban.devpalm.tf1.fr"
            //"host":"api.twitter.com"
        });

        var self = this;


        request.on('response', function(response) {
            response.on('data', function(chunk) {
                console.log('Twitter data ok');
                var jsonString = chunk.toString();
                console.log(jsonString); //should be object with tweet information


             var  TwitterJson = JSON.parse(jsonString);
               console.log(TwitterJson[0].trends);
                  if (TwitterJson[0].trends === undefined) {
                 var error = new Error('trends is n ot defined in twitter trends');
                 callBackFunction(error, null);
                 }

                var saveListTrend = [];

                // Traitement de la réponse twitter, si le nombre max de request par hour n'est pas atteinds
                for (var trend = 0; trend < TwitterJson[0].trends.length; trend++) {
                    saveListTrend[trend] = TwitterJson[0].trends[trend].name;
                }

                self.listTrendTwitter = saveListTrend;


                // Appel de la fonction de collback
                callBackFunction(null, self);
            });
            response.on('error', function(error) {
                console.log('error');
                console.log(error);
                callBackFunction(error, this);
            });
            response.on('end', function () {
                console.log('request end');
            });
        });
        request.on('error', function(error) {
            console.log(error);
        });
        request.end();

    }

}

module.exports = TwitterTrendProvider;



