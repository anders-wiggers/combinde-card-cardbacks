const merge = require('easy-pdf-merge');
const path = require('path');
const fs = require('fs');

let version = require('./version.json');

const fil = [];
let filler = 'enter name';

const directoryPath = path.join(__dirname, 'card');
const directoryPathCardBack = path.join(__dirname, 'cardback');

fs.readdir(directoryPathCardBack, (err, files) => {
	if (err) {
		return console.log('Unable to scan directory: ' + err);
	}
	files.forEach(function(file) {
		// Do whatever you want to do with the file
		if (file != '.gitkeep') {
			filler = file;
		}
	});

	fs.readdir(directoryPath, function(err, files) {
		//handling error
		if (err) {
			return console.log('Unable to scan directory: ' + err);
		}
		//listing all files using forEach
		files.forEach(function(file) {
			// Do whatever you want to do with the file
			if (file != '.gitkeep') {
				fil.push(`${__dirname}/card/${file}`);
				fil.push(`${__dirname}/cardback/${filler}`);
			}
		});

		console.log(fil);
		// version.version = version.version + 1;

		// fs.writeFile('version.json', JSON.stringify(version), function(err) {
		// 	if (err) {
		// 		console.log(err);
		// 	}
		// 	merge(fil, `finalcards_${version}.pdf`, function(err) {
		// 		if (err) {
		// 			return console.log(err);
		// 		}
		// 		console.log('Successfully merged!');
		// 	});
		// });
	});
});

//passsing directoryPath and callback function
