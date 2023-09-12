const fsPromises = require('fs').promises;
const path = require('path')

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, './testing.txt'), 'utf-8')
        console.log(data)
        await fsPromises.unlink(path.join(__dirname, '.promiseWrite.txt'))
        await fsPromises.writeFile(path.join(__dirname, '.promiseWrite.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'promiseWrite.txt'), 'Hello World')
        await fsPromises.rename(path.join(__dirname, 'promiseWrite.txt'), path.join(__dirname, 'anotherFile.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname, './anotherFile.txt'), 'utf-8')
        console.log(newData)
    } catch (error) {
        console.log(err)
    }
}
// fs.readFile(path.join(__dirname, './testing.txt'), 'utf-8',  (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// fs.writeFile(path.join(__dirname, 'dr asani phone number.txt'), 'Leaninig node',  (err) => {
//     if(err) throw err;
//     console.log('Write complete')

//     fs.appendFile(path.join(__dirname, 'dr asani phone number.txt'), 'Testing',  (err) => {
//         if(err) throw err;
//         console.log('Append complete')

//         fs.rename(path.join(__dirname, 'dr asani phone number.txt'), path.join(__dirname, 'newName'),  (err) => {
//             if(err) throw err;
//             console.log('Rename complete')
//         })

//     })

        

// })

fileOps();
