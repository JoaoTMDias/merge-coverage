import { DEFAULT_JUNIT_REPORTS_FILE, DEFAULT_JUNIT_REPORTS_FOLDER } from "../../constants";
import appRoot from "app-root-path";
import { mergeFiles } from "junit-report-merger";
import { Command, Config, Flags } from "@oclif/core";

/**
 * Combines multiple junit xml files
 */
export default class CombineReports extends Command {
	static description = "Combines multiple junit xml files";

	static examples = [
		`$ <%= config.bin %> <%= command.id %>
$ <%= config.bin %> <%= command.id %> --folder custom-folder
$ <%= config.bin %> <%= command.id %> --outputFile custom-file.xml
$ <%= config.bin %> <%= command.id %> --folder custom-folder --outputFile custom-file.xml
`,
	];

	static flags = {
		folder: Flags.string({
			char: "f",
			description: "Custom reports folder",
			required: false,
		}),
		outputFile: Flags.string({
			char: "f",
			description: "Custom output XML file destination",
			required: false,
		}),
	};

	private reportsFolder: string;
	private outputFile: string;

	constructor(argv: string[], config: Config) {
		super(argv, config);

		this.reportsFolder = `./${DEFAULT_JUNIT_REPORTS_FOLDER}/*.xml`;
		this.outputFile = DEFAULT_JUNIT_REPORTS_FILE;
	}

	/**
	 * Merges the reports and creates a summary
	 */
	async mergeReports(): Promise<void> {
		const OUTPUT_FILE = `${appRoot}/${this.outputFile}`;
		const INPUT_FILES = [this.reportsFolder];

		try {
			await mergeFiles(OUTPUT_FILE, INPUT_FILES);

			this.log(`✓ Combined reports to: ${OUTPUT_FILE}`);
		} catch (error) {
			console.error(error);
		}
	}

	async run(): Promise<void> {
		const { folder, outputFile } = (await this.parse(CombineReports)).flags;

		if (folder) {
			if (typeof folder !== "string") {
				throw new TypeError("helpers/combine-reports: type of folder flag is not string");
			}

			this.reportsFolder = `./${folder ?? DEFAULT_JUNIT_REPORTS_FOLDER}/*.xml`;
		}

		if (outputFile) {
			if (typeof outputFile !== "string") {
				throw new TypeError("helpers/combine-reports: type of outputFile flag is not string");
			}

			this.outputFile = `${outputFile}.xml`;
		}

		// And then attempt to combine both reports into a single output
		await this.mergeReports();
	}
}
