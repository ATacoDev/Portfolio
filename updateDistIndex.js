import fs from 'fs';
import path from 'path';

const distPath = path.resolve('dist/index.html');
const faviconPath = './images/favicon.svg';
const cssPath = './assets/index-DCoUxNct.css';
const jsPath = './assets/index-BDEPgNRf.js';

fs.readFile(distPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the index.html file:', err);
        return;
    }

    let result = data
        .replace(/<link rel="shortcut icon" href="[^"]*" type="image\/svg\+xml">/, `<link rel="shortcut icon" href="${faviconPath}" type="image/svg+xml">`)
        .replace(/<link rel="stylesheet" href="[^"]*index-DCoUxNct\.css">/, `<link rel="stylesheet" href="${cssPath}">`)
        .replace(/<link rel="stylesheet" crossorigin href="[^"]*index-DCoUxNct\.css">/, '') // Remove the duplicate link
        .replace(/<script type="module" crossorigin src="[^"]*index-BDEPgNRf\.js"><\/script>/, `<script type="module" crossorigin src="${jsPath}"></script>`);
    
    fs.writeFile(distPath, result, 'utf8', (err) => {
        if (err) {
            console.error('Error writing the updated index.html file:', err);
        } else {
            console.log('Updated index.html successfully!');
        }
    });
});
