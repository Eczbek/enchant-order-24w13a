import * as http from 'node:http';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as mime_types from 'mime-types';

http.createServer((request, response) => {
	fs.createReadStream(path.join('.', request.url))
		.on('open', function() {
			response.setHeader('Content-Type', mime_types.lookup(path.parse(request.url).ext));
			this.pipe(response);
		})
		.on('error', () => response.writeHead(404).end());
}).listen(8080);
