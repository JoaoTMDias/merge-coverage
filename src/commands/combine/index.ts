import { throwError } from "@jtmdias/js-utilities";
import { DEFAULT_COVERAGE_FOLDER, DEFAULT_REPORTS_FOLDER, DEFAULT_TEST_RUNNERS, FINAL_OUTPUT_FOLDER } from "../../constants";
import { clearFolder, runCommand } from "../../helpers";
import { Command, Config, Flags } from '@oclif/core'

/**
 * Creates a copy-to-destination command for a test runner coverage json file
 */
function setCopyToDestinationCommand(tool: string, coverage: string, reports: string) {
  return `cp ${coverage}/${tool}/coverage-final.json ${reports}/from-${tool}.json`
}

/**
 * Copies each coverage file to the reports folder
 *
 * @param tools
 * @param coverage
 * @param reports
 * @returns Promise<void> | undefined
 */
export function copyFolders(
  tools: string[] | string = DEFAULT_TEST_RUNNERS,
  coverage = DEFAULT_COVERAGE_FOLDER,
  reports = DEFAULT_REPORTS_FOLDER): Promise<void> | undefined {
  try {
    if (Array.isArray(tools)) {
      const cmd = tools.map((tool) => setCopyToDestinationCommand(tool, coverage, reports));

      return runCommand(cmd);
    }

    if (typeof tools === "string") {
      return runCommand([
        setCopyToDestinationCommand(tools, coverage, reports)
      ]);
    }
  } catch (error) {
    throwError("helpers", "copy-folders", `tools type is not a string: ${error}`);
  }
}

/**
 * Combines coverage from different test runners
 */
export default class Combine extends Command {
  static description = 'Combines coverage from different test runner tools'

  static examples = [
    `$ <%= config.bin %> <%= command.id %>
$ <%= config.bin %> <%= command.id %> --tools vitest,cypress
`,
  ]


  static flags = {
    tools: Flags.string({
      char: 'f',
      description: 'Test runner tools',
      required: false
    }),
    folder: Flags.string({
      char: 'f',
      description: 'Custom reports folder',
      required: false
    }),
  }

  private reportsFolder: string;
  private outputFolder: string;
  private testRunners: string | string[];

  constructor (argv: string[], config: Config) {
    super(argv, config);

    this.reportsFolder = DEFAULT_REPORTS_FOLDER;
    this.outputFolder = FINAL_OUTPUT_FOLDER;
    this.testRunners = DEFAULT_TEST_RUNNERS;
  }


  /**
 * Create the reports folder and move the reports from various test runners
 */
  boostrapFolders(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        await copyFolders(this.testRunners);

        this.log(`✓ Copied coverage folders from: ${this.testRunners}`);

        // Cleans the nyc folder and the coverage folder
        await clearFolder(".nyc_output");
        await clearFolder(this.outputFolder);

        this.log("✓ Bootstrapped folders!");

        resolve();
      } catch (err) {
        this.log(`⚠️ Folder Bootstrap: ${err}`);

        reject();
      }
    });
  }

  /**
   * Merges the coverage reports and creates a summary
   */
  mergeReports(): Promise<void> {
    // Merge the reports folder's json
    const MERGE_REPORTS_CMD = `nyc merge ${this.reportsFolder}`;

    // Move merged coverage.json to .nyc_output
    const MOVE_COVERAGE_TO_OUTPUT = `mv coverage.json .nyc_output/out.json`;

    // Create text-summary+html report and output to coverage directory
    const CREATE_REPORT_SUMMARY = `nyc report --reporter=html --report-dir=${FINAL_OUTPUT_FOLDER}`;

    const MERGE_COMMANDS = [
      MERGE_REPORTS_CMD,
      MOVE_COVERAGE_TO_OUTPUT,
      CREATE_REPORT_SUMMARY
    ];

    return runCommand(MERGE_COMMANDS);
  }

  async run(): Promise<void> {
    const { tools, folder } = (await this.parse(Combine)).flags;

    if (tools) {
      if (typeof tools !== "string") {
        throwError("helpers", "combine", "type of tools flag is not string");
      }

      this.testRunners = tools.split(",") ?? DEFAULT_TEST_RUNNERS;
    }

    if (folder) {
      if (typeof folder !== "string") {
        throwError("helpers", "combine", "type of folder flag is not string");
      }

      this.reportsFolder = folder;
    }

    // First, bootstrap the reports folder structure
    await this.boostrapFolders();

    // And then attempt to combine both reports into a single output
    await this.mergeReports();

    this.log(`✓ Combined coverage to: ${this.reportsFolder}`);
  }
}
