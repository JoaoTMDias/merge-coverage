import { execSync } from "node:child_process";
const { log } = console;

/**
 * Runs a batch of node commands and returns a promise when they are done.
 */
export function runCommand(commands: string[]): Promise<void> {
	return new Promise((resolve, reject) => {
		try {
			for (const command of commands) {
				execSync(command, { stdio: "inherit" });
			}

			resolve();
		} catch (error) {
			log(`⚠️ Run Command ${error}`);
			reject(error);
		}
	});
}
