# Quick Start

::: tip
New to EVMts?

- [Read the introduction](../getting-started/introduction.md)
- [Try out our beginners tutorial](../tutorial/overview.md)
- [Try the live online demo](https://stackblitz.com/github/evmts/evmts-monorepo?configPath=examples/vite)
:::

## Starting a new project with EVMts

To start a new project with EVMts you can scaffold a new project using wagmi cli or use one of our existing [example projects](https://github.com/evmts/evmts-monorepo/tree/main/examples). These instructions will use Wagmi cli. 

1. Install wagmi cli

```bash
npm install @wagmi/cli --global
```

2. Create a new project.   For more options run `npx create-wagmi --help`

```bash
npx create-wagmi --template vite-react-rainbowkit my-project
```

3. Next cd to your new project and initialize a new EVMts config

```bash
cd my-project 
npm install --save-dev @evmts/cli
npx evmts config --init
```

EVMts recognizes wagmi templates and will [set up your bundler](../guides/overview.md) for you automatically

4. You are now ready to use EVMts. To add your first contract follow the [hello world](../tutorial/hello-world.md) step of the tutorial

::: tip
Looking to contribute to EVMts?   Consider [TODO link to issue] making an [EVMts scaffolding cli](https://github.com/evmts/evmts-monorepo/issues)
:::

## Adding EVMts to an existing project

To add a EVMts to an existing tool you must configure 3 things

1. Your EVMts config

The `evmts.config.ts` file can be generated by installing the cli and then initializing a new config in the folder where your project package.json is

```bash
npm install --save-dev @evmts/cli # alternatively install globally
npx evmts config --init
```

2. Your Typescript language server

The language server will give you support in your editor for things like autoimport, autocomplete, information on hover, and TypeSafety.

**important** - If your application or library generates .d.ts files or runs `tsc --emit` you will need to see our [typescript docs](../tutorial/typescript) for additional instruction.

Install the typescript plugin
```bash
npm install --save-dev @evmts/ts-plugin
```

And then configure it in your ts-config (note the cli on previous step may have already done this step)

```json
{
  compilerOptions: {
    plugins: ["@evmts/plugin"]
  }
}
```

Additional steps may be needed to configure your specific editors language server. If you use vscode see [vscode guide](../guides/vscode)

3. Your bundler

Contract imports require a bundler such as esbuild, webpack, vite, rspack, or rollup. Many projects already have a bundler.

If you are unsure which bundler to use [esbuild](../guides/esbuild.md) is a good place to start as it's the most analogous to just using `ts-node` or `tsc`.

Find [your specific bundlers guide](../guides/overview.md) for instructions on how to configure it. Bundlers don't require configuration as the `evmts.config.ts` file will be used for configuration

## Additional info

[File an issue](https://github.com/evmts/evmts-monorepo/issues) if you run into problems

- **See also**

[EVMts tutorial](../tutorial/overview.md)

