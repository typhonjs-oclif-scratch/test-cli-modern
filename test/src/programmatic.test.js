import url                 from 'url';

import { assert }          from 'chai';

import { run, Errors }     from '@oclif/core';

describe('Programmatic Test CLI', () =>
{
   let captureLog = '', originalLog;

   beforeEach(() =>
   {
      originalLog = console.log;
      console.log = (log) => { originalLog(log); captureLog += log; };
   });

   afterEach(() =>
   {
      console.log = originalLog;
      captureLog = '';
   });

   it('run command test', (done) =>
   {
      run(['test'], url.fileURLToPath(import.meta.url))
         .then(() =>
         {
            assert(captureLog, 'ran init hookran test command');
            done();
         })
         .catch(Errors.handle);
   });
});
