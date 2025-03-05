import { existsSync } from "fs";
import dotenv from "dotenv";

export default async () => {
  const envLocalOnlyPath = "./.env.local";

  if (existsSync(envLocalOnlyPath)) {
    dotenv.config({ path: envLocalOnlyPath });
  }
};
