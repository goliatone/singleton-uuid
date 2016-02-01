var opts = process.argv[2];
if(opts && opts === 'true') opts = true;
if(opts && opts === 'false') opts = false;

console.log(require('..')(opts));
console.log(require('..')(opts));
console.log(require('..')(opts));
console.log(require('..')(opts));

