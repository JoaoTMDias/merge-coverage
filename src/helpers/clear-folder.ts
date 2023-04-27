import * as fsExtra from "fs-extra";

/**
 * Ensures that a directory is empty. Deletes directory contents if the directory is not empty.
 * If the directory does not exist, it is created. The directory itself is not deleted.
 */
export function clearFolder(folder: string): Promise<void> {
	return new Promise((resolve, reject) => {
		try {
			fsExtra.emptyDirSync(folder);

			resolve();
		} catch (error) {
			reject(error);
		}
	});
}
