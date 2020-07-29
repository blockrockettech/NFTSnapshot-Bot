# NFTSnapshot-Bot
Filecoin and ethereum-based twitter thread tokenisation bot.

Simply reply to a twitter thread with @EthTimestamp and wait for the bot to let you know when the thread has been rolled up ready for purchase.

## Project breakdown

*  [documentation](./documentation) - Some high level docs on how it works
*  [bot](./bot) - A twitter bot which rolls up a twitter thread ready for tokenising
*  [smart-contracts](./smart-contracts) - The ETH smart contracts which are responsible for issuing the NFTs
*  [dapp](./dapp) - An SSR webapp where a user purchase and tokenise rolled up threads

## Running the NFTSnapshot stack

* [bot](./bot/README.md) - Getting the thread rollup bot up and running
* [dapp](./dapp/README.md) - Getting the dapp up and running
* [powergate](https://github.com/textileio/powergate) - Getting powergate going

## License

This work is dual-licensed under Apache 2.0 and MIT.

`SPDX-License-Identifier: Apache-2.0 OR MIT`
