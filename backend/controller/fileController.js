var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, '../data.js');
// cache file data
var _data;

function readFileForCache() {
    console.log(filePath)
    try {
        fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
            if (data) {
                console.log('received data: ' + data);
                _data = JSON.parse(data);
            } else {
                console.log(err);
            }
        })
    }
    catch (x) {
        console.log(x)
    }
}

function writeFile() {
    try {
        fs.writeFile(filePath, _data, (err) => {
            if (err) {
                console.error('Error writing file:', err);
            }
        })
    }
    catch (x) {
        console.log(x)
    }
}


function readCustomers() {
    if (_data !== null && _data !== undefined) {
        return _data;
    } else {
        return _data;
    }
}

function createCustomer(content) {
    let id = _data.length + 1;
    if (!content) return -1;
    let newData = { ...content, id }
    _data = [..._data, newData]
    console.log(_data)
    if (_data.length === id) {
        // write to file
        writeFile();
        return true;
    }
    else false;
}

module.exports = {
    ReadCustomers: readCustomers,
    ReadFile: readFileForCache,
    CreateCustomer: createCustomer
}