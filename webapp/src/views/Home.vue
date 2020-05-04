<template>
  <div class="home">
    <h3>Filecoin Network Info</h3>
    <p>Block Height: {{fileCoin.height || 'Loading...'}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import LotusRPC from '@filecoin-shipyard/lotus-client-rpc';
import BrowserProvider from '@filecoin-shipyard/lotus-client-provider-browser';
import schema from '@filecoin-shipyard/lotus-client-schema/prototype/testnet-v3';

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      fileCoin: {
        height: null
      }
    };
  },
  async created() {
    const wsUrl = 'wss://lotus.testground.ipfs.team/api/0/node/rpc/v0';

    const provider = new BrowserProvider(wsUrl)
    const client = new LotusRPC(provider, { schema })

    setInterval(async () => {
      const result = await client.chainHead()
      this.fileCoin.height = result.Height;
    }, 1000);
  }
}
</script>
