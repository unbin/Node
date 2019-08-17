const http = require('http');

function GET(url) {
	var buffer = 'NO DATA';
  //Send and HTTP request
	const options = {
		hostname: url,
		method: 'GET'
	};
	var stream = http.request(options, (res) => {
		res.setEncoding('utf8');
		res.on('data', (chunk) => {
			buffer = chunk;
		});
		res.on('end', () => {
			buffer += 'END OF RESPONSE.';
		});
	});
	stream.end();
	return buffer;
}

module.exports = GET;
