var assert = require('assert');

// npm install chai --save
var expect = require('chai').expect;

describe('Test suite', function () {

    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });

    describe('#some_fucking_test', function () {
        it('should lick my balls', function () {
            assert.equal(3, '3', '== these number are the same');
        });
    });


    // test asynchronous requests ##############################################

    describe('#assync call', function () {

        // G E T  test ---------------------------------------------------------
        var request = require("request");
        var base_url = "http://apis.is/petrol/"; // Iceland free API about country - an example to follow 

        it("should return results array length greater then 0 ", function (done) {
            request.get(base_url, function (error, response, body) {
                var responseJson = JSON.parse(body);
                expect(responseJson.results.length).to.be.above(0);
                done();
                console.log('      responseJson.length = ' + responseJson.results.length);
            });
        });


        // P O S T  test -------------------------------------------------------
        var base_url_2 = "http://193.136.60.48:9000/api/availableHomes"; // CISTER API about current available houses in the project 
        var postData = {
            today: new Date()
        };

        it("should return number of houses greater then 0 ", function (done) {
            request.post(base_url_2, {form: postData}, function (error, response, body) {
                var responseJson = JSON.parse(body);
                expect(responseJson.totalNumHouses).to.be.above(0);
                done();
                console.log('       responseJson.totalNumHouses = ' + responseJson.totalNumHouses);
            });
        });

        
    });


});