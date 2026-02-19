1.  Formatting (Prettier): Handles the "looks" (indentation, quotes). Committed to Git via .prettierrc to ensure all developers see the same style.
2.  Linting (ESLint): Handles "Code Quality." Catches logic errors like unawaited promises or unused variables. Runs as a separate LSP in Neovim.
3.  Useful Packages:
      - Zod (Validation)
      - ts-node/tsx (Execution)
      - Type-fest (Advanced Types)
      - Typesync (Type maintenance)
4.  Build Tools:
      - Compilers: Translate TS to JS (tsc, swc).
      - Bundlers: Package files together (esbuild).
      - Task Runners: Automate commands (npm scripts).
      - Dev Runners: Restart server on save (ts-node-dev).
