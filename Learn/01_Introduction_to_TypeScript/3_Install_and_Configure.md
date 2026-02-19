Install_and_Configure
To install and configure TypeScript in your project, you need to perform the following steps:
Initialize npm in your project directory by running the following command:
```Bash
npm init
```

Install TypeScript as a project dependency by running the following command:
```Bash
npm install --save-dev typescript
```

Create a tsconfig.json file in your project directory to specify the compiler options for building your project. For example:
```TypeScript
{ 
    "compilerOptions": 
        { 
            "target": "es5", 
            "module": "commonjs", 
            "strict": true, 
            "outDir": "./dist", 
            "rootDir": "./src" 
        }, 
    "exclude": ["node_modules"] 
}
```

Compile your TypeScript code using the following command:
```Bash
npx tsc
```

Note: You can also compile individual TypeScript files by specifying the file path after the tsc command. For example:
```Bash
npx tsc ./src/index.ts
```

And you're all set! You can now start writing TypeScript code in your project.
