# Hello world

::: info You will learn

1. How to create a simple EVMts script
2. How to setup your EVMts client
3. How to import your script to create a `Script` instance
4. How to execute your script

:::

## 1. Create a script

The power of EVMts comes in it's ability to write simple [Scripts](../reference/script.md). Scripts execute clientside and have access to [cheat codes](../guide/cheat-codes.md).

Let's create a simple hello-world contract `src/HelloWorld.s.sol`.

The `.s.sol` is a convention from [forge scripts](https://book.getfoundry.sh/reference/forge/forge-script). It is convention to name scripts that execute clientside only `.s.sol` while contracts that are deployed to a live chain `.sol`.

```solidity HelloWorld.s.sol
pragma solidity 0.8.13;
contract HelloWorld {
    function greet() public pure returns (string memory) {
        return "Hello World";
    }
}
```

## 2. Create an EVMts client

The EVMts client is build on top of [viem](https://viem.sh/docs/clients/intro.html) clients and add the ability to execute scripts and simulate contracts clientside.

```typescript evmts.ts
import { forkUrl, createPublicClient, optimism } from "@evmts/core";

export const evmts = createPublicClient({
  chain: optimism,
  transport: forkUrl({
    url: `https://mainnet.optimism.io`,
  }),
});
```

## 3. Create a new script instance

To create a new contract instance simply [import your contract](./plugin-configuration.md) and pass it into [client.script](../reference/public-client).

```typescript helloWorld.ts
import { evmts } from "./evmts";
import { HelloWorld } from "./HelloWorld.s.sol"; // [!code focus]

const helloWorldScript = evmts.script(HelloWorld); // [!code focus]
```

## 4. Now execute the HelloWorld.s.sol script

Now simply call `run()` to execute the script in the clientside evm.

```typescript
import { evmts } from "./evmts";
import { HelloWorld } from "./HelloWorld.s.sol";

const helloWorldScript = evmts.script(HelloWorld);

helloWorldScript // [!code focus]
  .greet() // [!code focus]
  .then((res) => { // [!code focus]
    console.log(res.data); // [!code focus]
  }); // [!code focus]
```
