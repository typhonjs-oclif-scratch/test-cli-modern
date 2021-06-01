import spawn      from 'cross-spawn';

import { onExit } from '@rauschma/stringio';

import { assert } from 'chai';

describe('Spawn Test CLI', () =>
{
   it('run local CLI - command test', async () =>
   {
      let data = '';
      const cli = spawn('./bin/run.js', ['test']);
      cli.stdout.on('data', (chunk) => { data += chunk; });

      await onExit(cli);

      assert(data, 'ran init hook\nran test command');
   });
});
