import { ensureSeedAdmin } from "../src/lib/auth";
import { ensureDataDirs } from "../src/lib/files";

async function main() {
  await ensureDataDirs();
  const admin = await ensureSeedAdmin();
  console.log(`seeded admin: ${admin.username}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
