const utils = require('./utils');


it('should add two numbers',()=>{
  var res =  utils.add(33,11);
  if(res !== 44){

    throw new Error(`expectes 44 , but `)
  }
});
