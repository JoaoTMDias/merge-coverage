import { Command, Flags } from "@oclif/core";
import { DEFAULT_COVERAGE_REPORTS_FOLDER } from "../../constants";
import { clearFolder } from "../../helpers";

export default class Clear extends Command {
	static description =
		"Clears the coverage folder before running tests. This command is useful when it runs before executing the pipeline of tests. So, on a pre-hook script like 'pretest'";

	static examples = [
		`$ <%= config.bin %> <%= command.id %>
$ <%= config.bin %> <%= command.id %> --folder custom-folder/reports
`,
	];

	static flags = {
		folder: Flags.string({
			char: "f",
			description: "Custom reports folder",
			required: false,
		}),
	};

	async run(): Promise<void> {
		const { flags } = await this.parse(Clear);
		const REPORTS_FOLDER = flags.folder ?? DEFAULT_COVERAGE_REPORTS_FOLDER;

		try {
			for (const folder of REPORTS_FOLDER.split(",")) {
				// eslint-disable-next-line no-await-in-loop
				await clearFolder(folder);
			}

			this.log(`✓ Removed folder: ${REPORTS_FOLDER}`);
		} catch (error) {
			this.log(`⚠️ Clearing coverage: `, error);
		}
	}
}
