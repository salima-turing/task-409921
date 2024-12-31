const fs = require('fs');
const Terser = require('terser');

async function minify() {
    const code = fs.readFileSync('script.js', 'utf-8');

    // Use Terser to compress and minify the JavaScript code
    const result = await Terser.minify(code, {
        compress: {
            // Terser options can go here
            dead_code: true, // Remove dead code
        },
        mangle: true // Shorten variable names
    });

    // Save the minified code to a new file
    fs.writeFileSync('script.min.js', result.code);
    console.log('Script minified successfully and saved to script.min.js');
}

minify();
