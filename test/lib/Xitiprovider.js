/**
 * To Request all information from xiti
 * User: edesaintsteban
 * Date: 14/03/12
 */

var SoapClient = require('node-soap-client').SoapClient;
console.log(SoapClient);

// Override http/https to use proxy environment variables
require('./proxy');

// Instentiate the XitiProvider
function XitiProvider() {
    this.listXitiVisit = Array(12,15,45,75,25,78);
    this.listXitiPageView = Array(78,58,45,78,96);

      /*  var soapClient = new SoapClient({wsdl: 'http://api.metabus.ru/0.0.1/ws/SearchingModule?WSDL'}).init(function(err, metabus)
        {
            console.log("err");
            console.log(err);

            console.log("metabus");
            console.log(metabus);

           *//* var searchingModule = new metabus.SearchingModule();
            console.log('searchingModule');
            console.log(searchingModule);

            searchingModule.search({geoFilter: {distance: 10}, text: ''}, function(err, result) {
                if (err)
                    console.log(err.children[1].text())
                else
                    console.log(result);
            });*//*

         });

    console.log('soapClient');
    console.log(soapClient);*/
}

module.exports = XitiProvider;

XitiProvider.prototype.getVisitCount = function() {
    var countVisit = 0;
    for (var nbrElmtCount = 0; nbrElmtCount < this.listXitiVisit.length; nbrElmtCount++) {
        countVisit = countVisit + this.listXitiVisit[nbrElmtCount];
    }
    return countVisit;
};


XitiProvider.prototype.getPageView = function() {
    var countPageView = 0;

    for (var nbrElmtCouont = 0; nbrElmtCouont < this.listXitiPageView.length; nbrElmtCouont++) {
        countPageView = countPageView +  this.listXitiPageView[nbrElmtCouont];
    }

    return countPageView;
};

