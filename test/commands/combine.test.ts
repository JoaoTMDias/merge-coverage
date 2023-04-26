import { expect, test } from '@oclif/test';
import { DEFAULT_REPORTS_FOLDER, DEFAULT_TEST_RUNNERS } from "../../src/constants";

const CUSTOM_RUNNERS = "vitest,cypress";
const CUSTOM_REPORTS_FOLDER = "custom-folder/reports";

describe('combine', () => {
  test
    .stdout()
    .command(['combine'])
    .it('should run default combine command', ctx => {
      expect(ctx.stdout).to.contain(`✓ Copied coverage folders from: ${DEFAULT_TEST_RUNNERS}`);
      expect(ctx.stdout).to.contain("✓ Bootstrapped folders!");
      expect(ctx.stdout).to.contain(`✓ Combined coverage to: ${DEFAULT_REPORTS_FOLDER}`);
    });

  test
    .stdout()
    .command(['combine', `--tools=${CUSTOM_RUNNERS}`])
    .it('should run combine command with custom runners', ctx => {
      expect(ctx.stdout).to.contain(`✓ Copied coverage folders from: ${CUSTOM_RUNNERS}`);
    });

  test
    .stdout()
    .command(['combine', `--folder=${CUSTOM_REPORTS_FOLDER}`])
    .it('should run combine command with custom runners', ctx => {
      expect(ctx.stdout).to.contain(`✓ Combined coverage to: ${CUSTOM_REPORTS_FOLDER}`);
    });
})
