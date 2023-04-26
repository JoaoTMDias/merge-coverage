import { execSync } from "node:child_process";
const { log } = console;

/**
 * Runs a batch of node commands and returns a promise when they are done.
 */
export function runCommand(commands: string[]): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      commands.forEach((command) => {
        execSync(command, { stdio: "inherit" });
      });
      resolve();
    } catch (err) {
      log(`⚠️ Run Command ${err}`);
      reject(err);
    }
  });
}
