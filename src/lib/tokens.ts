import { randomBytes } from "crypto";

export function createActionToken() {
  return randomBytes(24).toString("hex");
}
