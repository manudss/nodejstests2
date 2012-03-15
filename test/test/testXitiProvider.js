var assert = require('should');

var XitiProvider = require('../lib/XitiProvider.js');



describe('testXitiProvider#prototype', function() {
    var xiti =  new XitiProvider();
    console.log(xiti);
    it('should xiti have correct property', function() {
        xiti.should.have.property('listXitiVisit');
        xiti.should.have.property('listXitiPageView');
    });
    it('should xiti.getPageView. return number below 0', function() {
        console.log(xiti.getPageView());
        xiti.getPageView().should.be.above(0);
    });
    it('should xiti.getVisitCount. return number below 0', function() {
        console.log(xiti.getVisitCount());
        xiti.getVisitCount().should.be.above(0);
    });
});