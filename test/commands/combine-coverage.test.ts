import fs from "node:fs";
import rootPath from "app-root-path";
import { expect, test } from "@oclif/test";
import {
	DEFAULT_COVERAGE_FOLDER,
	DEFAULT_COVERAGE_REPORTS_FOLDER,
	DEFAULT_TEST_RUNNERS,
} from "../../src/constants";

const CUSTOM_RUNNERS = "vitest,cypress";
const CUSTOM_REPORTS = "custom-folder";
const CUSTOM_REPORTS_FOLDER = `${CUSTOM_REPORTS}/reports`;

const TEST_REPORTS_FOLDER = `${rootPath.path}/${DEFAULT_COVERAGE_REPORTS_FOLDER}`;
const TEST_COVERAGE_FOLDER = `${rootPath.path}/${DEFAULT_COVERAGE_FOLDER}`;
const TEST_CUSTOM_FOLDER = `${rootPath.path}/${CUSTOM_REPORTS}`;
const TEST_FINAL_COVERAGE_FOLDER = `${rootPath.path}/coverage`;

function createSampleFolderStructure(runners: string[]): Promise<void> {
	return new Promise<void>((resolve) => {
		for (const runner of runners) {
			const RUNNER_PATH = `${TEST_COVERAGE_FOLDER}/${runner}`;
			const SAMPLE_FILE = `${RUNNER_PATH}/coverage-final.json`;

			fs.promises.mkdir(RUNNER_PATH, { recursive: true }).then(() => {
				fs.promises.appendFile(
					SAMPLE_FILE,
					JSON.stringify({
						key: "property",
					}),
				);
			});
		}

		resolve();
	});
}

function clearFolders(folders: string[]) {
	return new Promise<void>((resolve) => {
		for (const folder of folders) {
			fs.promises.rm(folder, { recursive: true });
		}

		resolve();
	});
}

describe("combine-coverage", () => {
	beforeEach(async () => {
		try {
			await fs.promises.mkdir(TEST_REPORTS_FOLDER, { recursive: true });
			await createSampleFolderStructure(DEFAULT_TEST_RUNNERS);
		} catch (error) {
			console.error(error);
		}
	});

	afterEach(() => {
		return clearFolders([TEST_COVERAGE_FOLDER, TEST_CUSTOM_FOLDER, TEST_FINAL_COVERAGE_FOLDER]);
	});

	it("should run default combine-coverage command", () => {
		test
			.stdout()
			.command(["combine-coverage"])
			.it("Default command", (ctx) => {
				expect(ctx.stdout).to.contain(`✓ Copied coverage folders from: ${DEFAULT_TEST_RUNNERS}`);
				expect(ctx.stdout).to.contain(`✓ Combined coverage to: ${DEFAULT_COVERAGE_REPORTS_FOLDER}`);
			});
	});

	it("should run combine command with custom runners", () => {
		test
			.stdout()
			.command(["combine", `--tools=${CUSTOM_RUNNERS}`])
			.it("Custom runners", (ctx) => {
				expect(ctx.stdout).to.contain(`✓ Copied coverage folders from: ${CUSTOM_RUNNERS}`);
			});
	});

	it("should run combine command with custom runners", () => {
		test
			.stdout()
			.command(["combine-coverage", `--folder=${CUSTOM_REPORTS_FOLDER}`])
			.it("Custom reports folder", (ctx) => {
				expect(ctx.stdout).to.contain(`✓ Combined coverage to: ${CUSTOM_REPORTS_FOLDER}`);
			});
	});
});
