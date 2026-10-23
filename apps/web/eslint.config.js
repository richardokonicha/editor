/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import solidPlugin from "eslint-plugin-solid";
import typegpuPlugin from "eslint-plugin-typegpu";
import globals from "globals";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default [
  js.configs.recommended,
  {
    ...typegpuPlugin.configs.recommended,
    files: ["**/*.{js,jsx,ts,tsx}"],
  }
