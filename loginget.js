﻿http=require('http');
url=require('url');
querystring = require('querystring');

function onRequest(request,response)
{
	var path = url.parse(request.url).pathname;
	console.log('Request for '+path+' received.');
	var query =url.parse(request.url).query;
	console.log(query);
    var fname = querystring.parse(query)["FName"];
    var lname = querystring.parse(query)["LName"];
	var email=querystring.parse(query)["email"];
	response.write(`Hello ${fname}${lname}, your email id ${email} has been registered successfully`);
	response.end();
}
http.createServer(onRequest).listen(8000);
console.log('Server has Started…….');