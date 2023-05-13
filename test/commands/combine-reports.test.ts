import fs from "node:fs";
import rootPath from "app-root-path";
import { expect, test } from "@oclif/test";
import { runCommand } from "../../src/helpers";
import { DEFAULT_JUNIT_REPORTS_FILE, DEFAULT_JUNIT_REPORTS_FOLDER } from "../../src/constants";

const CUSTOM_OUTPUT_FILE = "custom-file.xml";
const CUSTOM_REPORTS_FOLDER = `custom-folder`;

const EXPECTED = {
	REPORTS_FOLDER: `${rootPath.path}/${DEFAULT_JUNIT_REPORTS_FOLDER}`,
	MOCK_RESULTS_FOLDER: `test/__mocks__/results`,
	CUSTOM_REPORTS_FOLDER: `${rootPath.path}/${CUSTOM_REPORTS_FOLDER}`,
	OUTPUT_FILE: `${rootPath.path}/${DEFAULT_JUNIT_REPORTS_FILE}`,
	CUSTOM_REPORTS_FILE: `${rootPath.path}/${CUSTOM_OUTPUT_FILE}`,
};

async function createSampleFolderStructure(originFolder = EXPECTED.REPORTS_FOLDER): Promise<void> {
	await fs.promises.mkdir(originFolder, { recursive: true });

	const COPY_COMMAND = `cp -r ${EXPECTED.MOCK_RESULTS_FOLDER} ${originFolder}`;

	return runCommand([COPY_COMMAND]);
}

function clearFolders(folders: string[]) {
	return new Promise<void>((resolve) => {
		for (const folder of folders) {
			fs.promises.rm(folder, { recursive: true });
		}

		resolve();
	});
}

describe("combine-reports", () => {
	beforeEach(async () => {
		try {
			await createSampleFolderStructure();
		} catch (error) {
			console.error(error);
		}
	});

	afterEach(() => {
		return clearFolders([
			EXPECTED.CUSTOM_REPORTS_FILE,
			EXPECTED.CUSTOM_REPORTS_FOLDER,
			EXPECTED.OUTPUT_FILE,
			EXPECTED.REPORTS_FOLDER,
		]);
	});

	it("should run default combine-reports command", () => {
		test
			.stdout()
			.command(["combine-reports"])
			.it("Default command", (ctx) => {
				expect(ctx.stdout).to.contain(`✓ Combined reports to: ${EXPECTED.OUTPUT_FILE}`);
			});
	});

	it("should run combine command with custom reports folder", () => {
		test
			.stdout()
			.command(["combine", `--folder=${EXPECTED.CUSTOM_REPORTS_FOLDER}`])
			.it("Custom runners", (ctx) => {
				expect(ctx.stdout).to.contain(`✓ Combined reports to: ${EXPECTED.OUTPUT_FILE}.xml`);
			});
	});

	it("should run combine command with custom output file", () => {
		test
			.stdout()
			.command(["combine-reports", `--folder=${EXPECTED.OUTPUT_FILE}`])
			.it("Custom reports folder", (ctx) => {
				expect(ctx.stdout).to.contain(`✓ Combined reports to: ${EXPECTED.OUTPUT_FILE}.xml`);
			});
	});
});
