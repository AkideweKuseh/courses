const fsPromises = require('fs').promises;
const path = require('path');

const fileOperations = async () => {
    try {
        const data = await fsPromises.readFile(
            path.join(__dirname, 'files', 'starter.txt'),
            'utf8'
        );
        console.log(data);
        await fsPromises.writeFile(
            path.join(__dirname, 'files', 'promiseWrite.txt'),
            data
        );
        await fsPromises.appendFile(
            path.join(__dirname, 'files', 'promiseWrite.txt'),
            '\n\nAppended:  Appeded Text'
        );
        await fsPromises.rename(
            path.join(__dirname, 'files', 'promiseWrite.txt'),
            path.join(__dirname, 'files', 'promiseRename.txt')
        );
        const newData = await fsPromises.readFile(
            path.join(__dirname, 'files', 'promiseRename.txt'),
            'utf8'
        );
        // console.log(data);
        console.log(newData);
    } catch (error) {
        console.error(error);
    }
};

fileOperations();
console.log('hello');
// fs.readFile(
//     path.join(__dirname, 'files', 'starter.txt'),
//     'utf8',
//     (err, data) => {
//         if (err) throw err;
//         console.log(`Read: ${data.toString()}`);
//     }
// );

// fs.writeFile(
//     path.join(__dirname, 'files', 'reply.txt'),
//     'Write:  Nice to meet you Mike',
//     (err) => {
//         if (err) throw err;
//         console.log('WriteFile completed');

//         fs.appendFile(
//             path.join(__dirname, 'files', 'reply.txt'),
//             '\n\nAppended:  Appeded Text',
//             (err) => {
//                 if (err) throw err;
//                 console.log('Apppend completed');

//                 fs.rename(
//                     path.join(__dirname, 'files', 'reply.txt'),
//                     path.join(__dirname, 'files', 'replyRenamed.txt'),
//                     (err) => {
//                         if (err) throw err;
//                         console.log('Rename completed');
//                     }
//                 );
//             }
//         );
//     }
// );

//exit on uncaught errors
// process.on('uncaughtException', (err) => {
//     console.log(`There was an uncaught error: ${err}`);
//     process.exit(1);
// });
