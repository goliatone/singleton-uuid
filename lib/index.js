/*
 * singleton-uuid
 * https://github.com/eburgos/singleton-uuid
 *
 * Copyright (c) 2016 goliatone
 * Licensed under the MIT license.
 */

'use strict';

var uuid = require('uuid');


var DEFAULTS = {
    autoinitialize: true
};

function singleton_uuid(config){
    EventEmitter.call(this);
    config = extend({}, this.constructor.DEFAULTS, config);

    if(config.autoinitialize ) this.init(config);
}

_inherit(singleton_uuid, EventEmitter);

singleton_uuid.DEFAULTS = DEFAULTS;

singleton_uuid.prototype.init = function(config){
    if(this.initialized) return;
    this.initialized = true;

    extend(this, this.constructor.DEFAULTS, config);

};

singleton_uuid.prototype.logger = console;

/**
 * Exports module
 */
module.exports = singleton_uuid;
