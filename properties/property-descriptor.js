var cat = {
    name: 'fluffy',
    color: 'white'
};

console.log((Object.getOwnPropertyDescriptor(cat, 'name')));

/* returns...
{ value: 'fluffy',
  writable: true,
  enumerable: true,
  configurable: true }
*/