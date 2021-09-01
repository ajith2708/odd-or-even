
//bluebird promise
global.Promise = require('bluebird');
global.Promise.config({ longStackTraces: true });

Promise.resolve().
  then(fn).
  catch(err => console.log(err));

function fn() {
  return new Promise((resolve, reject) => {
    setImmediate(() => reject(new Error('Oops')));
  });
}

//Event Emitters
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()
//on is used to add a callback function that's going to be executed when the event is triggered
eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`)
  })
  //emit is used to trigger an event
  eventEmitter.emit('start', 1, 100)
  

  //eventloop
  //event queue -> first in first out
  const fs=require('fs');
  const filename='event.txt';

  fs.watch(filename,()=>{
  console.log('file changed');
  });

  //Exception handling

  let divide =(x,y,next)=> {
    // if error condition?
    if ( y === 0 ) {
      // "throw" the error safely by calling the completion callback
      // with the first argument being the error
      let err = new Error("Can't divide by zero");
      next(err);
    }
    else {
      // no error occured, continue on
      next(null, x/y);
    }
  };
  
  divide(4,2,(err,result)=>{
    // did an error occur?
    if ( err ) {
      // handle the error safely
      console.log('4/2=err', err);
    }
    else {
      // no error occured, continue on
      console.log('4/2='+result);
    }
  });
  
  divide(4,0,(err,result)=>{
    // did an error occur?
    if ( err ) {
      // handle the error safely
      console.log('4/0=err', err);
    }
    else {
      // no error occured, continue on
      console.log('4/0='+result);
    }
  });

  //Convert promise to async await

  const promiseFn = firstName => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!firstName) reject(new Error('no first name passed in!'))
  
        const fullName = `${firstName} Doe`  
  
        resolve(fullName)
      }, 2000)
    })
  }
  
  promiseFn('Jane').then(console.log)
  promiseFn().catch(console.log)
  
   let result = (async () => {
    try {
      console.log(await promiseFn('Jim')) 
    } catch (e) {
      console.log(e)
    }
  
    try {
      console.log(await promiseFn()) 
    } catch (e) {
      console.log(e)
    }
  })()
  
  /*npm modules
1.Node.js Core Modules
Core modules include bare minimum functionalities of Node.js
Core modules are compiled into its binary distribution and load automatically when Node.js process starts.
Import the core module first in order to use application.
ex:http,url,fs

2.Local Module
Local modules are modules created locally in your Node.js application.
These modules include different functionalities of your application in separate files and folders.

3.Third party module

The third party module can be downloaded by NPM.
These type of modules are developed by others and we can use that in our project.
ex:express, gulp, lodash, async, socket.io, mongoose, underscore, pm2, bower, q, debug, react, mocha etc.

*/

