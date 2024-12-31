const fs = require('fs');
const UglifyJS = require('uglify-js');

function compressScript(inputFile, outputFile) {
    try {
        const inputCode = fs.readFileSync(inputFile, 'utf8');
        const minifiedCode = UglifyJS.minify(inputCode, {
            output: {
                comments: false,
                beautify: false
            },
            compress: {
                drop_console: true
            },
            mangle: true
        });

        if (!minifiedCode.error) {
            fs.writeFileSync(outputFile, minifiedCode.code);
            console.log(`Script compressed successfully. Saved to ${outputFile}`);
        } else {
            console.error('Error compressing script:', minifiedCode.error);
        }
    } catch (error) {
        console.error('Error reading input file:', error);
    }
}

const inputFile = 'original_script.js';
const outputFile = 'compressed_script.js';
compressScript(inputFile, outputFile);
