import { Command } from '@oclif/core';

/**
 * Provides the main Oclif `test` command.
 */
class TestCommand extends Command
{
   /**
    * The main Oclif entry point to run the `test` command.
    *
    * @returns {Promise<void>}
    */
   async run()
   {
      console.log(`ran test command`);
   }
}

TestCommand.description = `An ESM test command
...
Extra documentation goes here
`;

export default TestCommand;
