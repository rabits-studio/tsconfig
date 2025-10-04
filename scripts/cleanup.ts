import { readdir, rm } from "node:fs/promises";

const files = await readdir("./configs");

for await (const file of files) {
  try {
    await rm(file);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`failed to remove ${file} > ${error}`);
  }
}
