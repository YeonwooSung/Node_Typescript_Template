# Node.js with Typescript

## Install typescipt for both local and global

1. Install Typescirpt globally

```bash
$ npm install -g typescript
```

2.Install Typescript as a local dependency

```bash
$ npm install -D typescript
```

## Initialize npm and tsc

1. Init Node.js project with npm

```bash
$ npm init
```

2. Init typescript config

```bash
$ tsc --init
```

By running `tsc init`, you will get a file "tsconfig.json", which is a config for compiling all typescript files into JS format.

## Generate compiled js files for deploy

By using `tsc` command, you could compile ts files into equivalent js files.

```bash
$ tsc
```

You could configure the path of source directory (dir that contains all ts files) and output directory (dir that contains all generated js files) by modifying variables in the `tsconfig.json` file:

    - rootDir: Specify the root folder within your source files.
    - outDir:  Specify an output folder for all emitted files.
