var http = require('http');
var https = require('https');
var url = require('url');

var httpRequest = http.request;
var httpsRequest = https.request;

if (process.env.http_proxy) {
  var httpProxy = url.parse(process.env.http_proxy);
    console.log('httpProxy');
    console.log(httpProxy);

  http.request = function(options) {
    options.path = "http://" + options.host + ":" + (options.port || 80) + options.path;
    options.host = httpProxy.hostname;
    options.port = httpProxy.port;

    if (httpProxy.protocol === 'https') {
      return httpsRequest(options);
    } else {
      return httpRequest(options);
    }
  };
}

if (process.env.https_proxy) {
  var httpsProxy = url.parse(process.env.https_proxy);
    console.log('httpsProxy');
    console.log(httpsProxy);

  https.request = function(options) {
    options.path = "https://" + options.host + ":" + (options.port || 443) + options.path;
    options.host = httpsProxy.hostname;
    options.port = httpsProxy.port;

    if (httpsProxy.protocol === 'https') {
      return httpsRequest(options);
    } else {
      return httpRequest(options);
    }
  };
}
