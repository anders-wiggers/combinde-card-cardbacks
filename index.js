const merge = require('easy-pdf-merge');
const path = require('path');
const fs = require('fs');

let version = require('./version.json');

const fil = [];
const filler = 'Procedure for overdragelse af et domaenenavn.pdf';

const directoryPath = path.join(__dirname, 'card');

//passsing directoryPath and callback function
fs.readdir(directoryPath, function(err, files) {
	//handling error
	if (err) {
		return console.log('Unable to scan directory: ' + err);
	}
	//listing all files using forEach
	files.forEach(function(file) {
		// Do whatever you want to do with the file
		fil.push(`${__dirname}/card/${file}`);
		fil.push(`${__dirname}/cardback/${filler}`);
	});

	version.version = version.version + 1;

	fs.writeFile('version.json', JSON.stringify(version), function(err) {
		if (err) {
			console.log(err);
		}
		merge(fil, `finalcards_${version}.pdf`, function(err) {
			if (err) {
				return console.log(err);
			}
			console.log('Successfully merged!');
		});
	});
});
