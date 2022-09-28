var should = require('chai').should();
var assert = require('chai').assert
const axios = require('axios');



describe("Test if the website is up and running (HTTP)", function() {
    it("should return 200", function(done) {
       axios.get('http://localhost:3000/').then(function(response) {
           response.status.should.equal(200);
		   done();
	   }).catch(function(error) { 
		   done(error);
	   });
	});
});

describe("Test if the website is up and running (HTTPS)", function() {
    it("should return 200", function(done) {
       axios.get('https://80a8895e902003.lhrtunnel.link').then(function(response) {
           response.status.should.equal(200);
		   done();
	   }).catch(function(error) { 
		   done(error);
	   });
	});
});

describe("Test if REST API for getting the news around the world (on HTTPS)", function() {
    it("should return 200", function(done) {
        axios.get('https://80a8895e902003.lhrtunnel.link/news').then(function(response) {
			response.status.should.equal(200);
			done();
		}).catch(function(error) {
			done(error);
		});
	});
});

describe("Test if REST API for getting the news around the world (on HTTP)", function() {
    it("should return 200", function(done) {
        axios.get('http://localhost:3000/news').then(function(response) {
			response.status.should.equal(200);
			done();
		}).catch(function(error) {
			done(error);
		});
	});
});