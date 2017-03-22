

/*
	given a filename (on server), return the content-type

	usage:
	var mime = require("giffo-mime");
	var ext = mime("index.html");
*/



// for more mime types:
// http://www.mime-type.net/mime-types.php
// and http://filext.com/file-extension/avi
// and http://en.wikipedia.org/wiki/Internet_media_type
// https://developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
// http://www.freeformatter.com/mime-types-list.html



var contentType = {
	"aiff":"audio/x-aiff", "au":"audio/ulaw", "avi":"video/x-msvideo", "atom":"application/atom+xml", "air":"application/vnd.adobe.air-application-installer-package+zip",
	"css":"text/css", "c":"text/x-c","cpp":"text/x-c",
	"doc":"application/msword", "dtd":"application/xml-dtd",
	"flv":"video/x-flv",
	"gif":"image/gif", "gz":"application/x-gzip", "gifv":"video/mp4",
	"html":"text/html;charset=UTF-8", "htm":"text/html", "h":"text/x-c",
	"ico":"image/x-icon",
	"jar":"application/java-archive", "java":"text/x-java-source", "jpeg":"image/jpeg", "jpg":"image/jpeg", "js":"text/javascript", "json":"application/json",
	"less":"text/css",
	"map":"application/json", "m3u":"audio/x-mpegurl","manifest":"text/cache-manifest", "midi":"audio/midi", "mp3":"audio/mp3", "mp4":"video/mp4", "mpg":"video/mpeg", "mpga":"audio/mpeg", "msi":"application/x-windows-installer",
	"mf":"text/cache-manifest", "md":"text/x-markdown",
	"ogg":"application/ogg", "opus":"audio/ogg",
	"pdf":"application/pdf", "png":"image/png", "ps":"application/postscript",
	"rar":"application/x-rar-compressed", "rtf":"text/rtf", "rss":"text/xml",
	"sgml":"text/sgml", "src":"application/x-wais-source",	"svg":"image/svg+xml",	"swf":"application/x-shockwave-flash",
	"tar":"application/x-tar",	"tiff":"image/tiff", "txt":"text/plain", "text":"text/plain",
	"wav":"audio/wave", "wrl":"model/vrml", "webm":"video/webm",
	"xml":"text/xml", "woff":"application/x-font-woff",
	"zip":"application/zip"
};

// application/octet-stream
// files without types are ttf and other fonts etc :(
// rss alt is application/rss+xml

var mime = module.exports = function(filename){
	var ext = filename.trim().split(".");
	
	// even if it is just a file extension like "html" or ".rar", this should work
	ext = contentType[ext[ext.length-1].toLowerCase()]; // returns the last array of .split(".")

	if (ext && typeof(ext) !== "undefined")
		return ext;
	return "application/octet-stream";
}

