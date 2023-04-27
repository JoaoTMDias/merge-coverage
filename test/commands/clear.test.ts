import { expect, test } from "@oclif/test";
import { DEFAULT_REPORTS_FOLDER } from "../../src/constants";

describe("clear", () => {
	test
		.stdout()
		.command(["clear"])
		.it("should run default clear command", (ctx) => {
			expect(ctx.stdout).to.contain(`✓ Cleared coverage folder: ${DEFAULT_REPORTS_FOLDER}`);
		});

	test
		.stdout()
		.command(["clear", "--folder=custom-folder/reports"])
		.it("should run default clear command", (ctx) => {
			expect(ctx.stdout).to.contain(`✓ Cleared coverage folder: custom-folder/reports`);
		});
});
