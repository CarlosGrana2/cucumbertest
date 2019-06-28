const fs = require('fs');
var config = require('../nightwatch.conf.js');


exports.assertion = function(archivo) {
    this.message = `La imagen ${archivo} se descargo de manera correcta`;

    this.expected = () => {
        return true;
    };

    this.pass = (value) => {
        return value === true;
    };

    this.value = (result) => {
        return result.value;
    };

    this.command = (callback) => {
        if(fs.readFileSync(config.pathdescarga + '\\' + archivo , 'utf8')){
            callback({ value : true  });
        }else{
            callback({ value : false  });
        }
        return this ;
    };
};
