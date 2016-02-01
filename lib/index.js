/*
 * singleton-uuid
 * https://github.com/eburgos/singleton-uuid
 *
 * Copyright (c) 2016 goliatone
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var uuid = require('uuid');


/**
 * Exports module
 */
var once;
module.exports = function(opts){

    if(!once){
        once = generate(opts);
    }

    return once;
};

function generate(opts){
    var out;
    if(typeof opts === 'string'){
        out = opts;
        fs.writeFileSync('./.uuid-cache', out, 'utf8');
    } else if(fileExists('./.uuid-cache') && !opts){
        out = fs.readFileSync('./.uuid-cache', 'utf8');
    } else {
        out = uuid.v4();
        fs.writeFileSync('./.uuid-cache', out, 'utf8');
    }

    return out;
}

function fileExists(filePath)
{
    try
    {
        return fs.statSync(filePath).isFile();
    }
    catch (err)
    {
        return false;
    }
}
