/* can also create objects like this but why would you bother */

 var cat = Object.create(Object.prototype,{
    name: {
        value:'fluffy',
        enumerable:true,
        writeable:true,
        configurable:true
    },
    color: {
        value:'white',
        enumerable:true,
        writeable:true,
        configurable:true
    }
 });

 console.log(cat);