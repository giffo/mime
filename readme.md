###giffo-mime

My method of getting the content-type of files from their filename


###install

	npm install giffo-mime


###usage 

	var mime = require("giffo-mime");

	var contentType = mime(filename);


###example
	
	console.log(mime("hello.html"));

	console.log(mime("super.png"));

results in:

	text/html;charset=UTF-8
	image/png