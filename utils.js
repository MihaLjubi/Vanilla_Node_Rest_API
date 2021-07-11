const fs = require('fs');
const { builtinModules } = require('module');

function writeDataToFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if(err) {
            console.log(err);
        }
    });
}

module.exports = {
    writeDataToFile
}