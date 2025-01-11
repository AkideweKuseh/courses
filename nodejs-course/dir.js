const fs = require('fs');
const path = require('path');

// NB: in runding this script the directed is crested and deleted you can comment one out at a time to see how each works :)

if (!fs.existsSync('./new')) {
    fs.mkdir(path.join(__dirname, 'New Folder'), (err) => {
        if (err) throw err;
        console.log('Directory created');
    });
}

if (!fs.existsSync('./new')) {
    fs.rmdir(path.join(__dirname, 'New Folder'), (err) => {
        if (err) throw err;
        console.log('Directory deleted');
    });
}

process.on('uncaughtException', (err) => {
    console.log(`There was an uncaught error: ${err}`);
    process.exit(1);
});
