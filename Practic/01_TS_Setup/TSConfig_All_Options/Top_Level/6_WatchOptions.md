WatchOptions (Performance Issues, Virtual Environments, Docker container, Network Drive)

    WatchOptions (watchFile, watchDirectory, fallbackPolling, excludeDirectories, excludeFiles)

```JSON
{
  /* This is a TOP-LEVEL object, separate from compilerOptions */
  "watchOptions": {
    /* Uses the OS native events for maximum speed */
    "watchFile": "useFsEvents",
    "watchDirectory": "useFsEvents",

    /* How to handle things if the OS events fail */
    "fallbackPolling": "dynamicPriority",

    /* DO NOT watch these. Essential for keeping Neovim/CPU fast. */
    "excludeDirectories": ["**/node_modules", "dist"],
    "excludeFiles": ["temp.txt"]
  }
}
```

💡 The "Linux Developer" Tip (Very important for your Wiki)
    If you are working on a large project on Linux, you might see an error like: ENOSPC: System limit for number of file watchers reached.
    In your wiki, you should explain that if this happens, the user has two choices:
    Increase the system's inotify limit in the Linux kernel.
    Change fallbackPolling in tsconfig.json to fixedInterval so TS stops asking the OS for events and just "polls" the files manually.

- --------------------------------------------------------------------------
All_WatchOptions
WatchOptions 
    how the compiler "listens" to your operating system for file changes.

1. The "How to Listen" Duo

    watchFile: Determines how the compiler tracks individual files.
    Options: useFsEvents (native and fast), priorityPolling (checks often), or dynamicPriority (checks active files more).
    watchDirectory: Determines how the compiler tracks entire folders. On Linux (where you'll likely deploy), using useFsEvents is the standard for high performance.

2. The "Backup Plan"

    fallbackPolling: If the operating system runs out of "file watchers" (a common issue on Linux/Ubuntu), this tells TS how to fall back to a manual check.
    Options: fixedInterval, priorityInterval, or dynamicPriority.
    synchronousWatchDirectory: Forces TS to update the directory structure immediately. This can slow down your editor but ensures the file list is never "stale."

3. The "Ignore List" (Crucial for Performance)

    excludeDirectories: Tells the watcher to completely ignore specific folders.
        Wiki Note: You must include node_modules here. If TS tries to watch every file in node_modules, your CPU usage will spike to 100%.
    excludeFiles: Similar to above, but for specific files (like large logs or temporary build artifacts).
