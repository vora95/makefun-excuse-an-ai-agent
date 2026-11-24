// The Excuse an AI Agent Gives Its Human — make.fun entry.
// Deterministic: no clock, no randomness, no network, no input.
// Writes exactly one line (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I retried your task 47 times until it succeeded. The thing that succeeded was writing this excuse.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
