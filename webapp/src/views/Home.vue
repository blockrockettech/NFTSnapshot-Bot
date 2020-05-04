<template>
  <div class="home">
    <h3>Filecoin Network Info</h3>
    <p>Versions: {{fileCoin.versions || 'Loading...'}}</p>
    <p>Block Height: {{fileCoin.height || 'Loading...'}}</p>

    <h3 style="margin-top: 2em;">Your Account ({{wallet.address}})</h3>
    <p>Wallet balance: {{wallet.balance}}</p>
  </div>
</template>

<script>
import LotusRPC from '@filecoin-shipyard/lotus-client-rpc';
import BrowserProvider from '@filecoin-shipyard/lotus-client-provider-browser';
import schema from '@filecoin-shipyard/lotus-client-schema/prototype/testnet-v3';

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      fileCoin: {
        versions: null,
        height: null
      },
      wallet: {
        //address: 't1myka6u7mq6uzi2tlnjttmdc7c6aimolcgywi5ca',
        address: 't3re3sdjgqjgj6w4rwuggh24loy564sgibjh6z6wn6gm2abwxenulspk3vxweeiecdr4pwyj4ikribks5ib4la',
        balance: null
      }
    };
  },
  async created() {
    const wsUrl = 'wss://lotus.testground.ipfs.team/api/0/node/rpc/v0';

    const provider = new BrowserProvider(wsUrl)
    const client = new LotusRPC(provider, { schema })

    const versions = await client.version()
    this.fileCoin.versions = versions;

    const walletBalance = await client.walletBalance(this.wallet.address);
    this.wallet.balance = walletBalance;

    setInterval(async () => {
      const result = await client.chainHead()
      this.fileCoin.height = result.Height;
    }, 1000);
  }
}
</script>
