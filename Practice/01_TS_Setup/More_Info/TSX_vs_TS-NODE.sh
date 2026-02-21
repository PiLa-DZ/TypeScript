#!/bin/bash
: '
Feature       | tsx                          | ts-node
Engine        | esbuild (Very Fast)          | tsc (Standard TS Compiler)
Type Checking | No (It ignores type errors). | "Yes (By default, it will stop if theres a type error)."
Speed         | Instant startup.             | Slower (especially on large projects).
ESM Support   | Native/Seamless.             | Requires manual config.
Best For...   | Rapid development & scripts. | Projects where you want the runner to catch type bugs.
'

# Which one should you use?
# Since you are a Neovim user, you likely already have ts_ls (LSP) and eslint highlighting errors in your editor. Because of this:
# You don't really need your runner to check types again (it just slows you down).
# tsx is generally the better choice for your Express/MariaDB development because it starts almost instantly and doesn't get confused by modern import/export (ESM) syntax.

