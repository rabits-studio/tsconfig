import { cp } from "node:fs/promises";

await cp("./configs", "./", { recursive: true });
