import { Command, Flags } from "@oclif/core";
import { DEFAULT_REPORTS_FOLDER } from "../../constants";
import { clearFolder } from "../../helpers";

export default class Clear extends Command {
	static description = "Clears the coverage folder";

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
		const REPORTS_FOLDER = flags.folder ?? DEFAULT_REPORTS_FOLDER;

		try {
			await clearFolder(REPORTS_FOLDER);

			this.log(`✓ Cleared coverage folder on: ${REPORTS_FOLDER}`);
		} catch (error) {
			this.log(`⚠️ Clearing coverage: `, error);
		}
	}
}
