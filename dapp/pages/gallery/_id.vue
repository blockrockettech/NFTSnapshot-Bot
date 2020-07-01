<template>
  <div class="columns is-centered">
    <div v-if="tweetByStatusId">
      <div class="column is-four-fifths has-background-primary is-size-1">
        {{ tweetByStatusId }}
      </div>
      <div v-if="threadData && threadData.thread">
        <h2>Thread:</h2>
        <br/>
        <div v-for="(tweet,idx) in threadData.thread" :key="idx">
          {{threadData.thread.length-idx}}/{{threadData.thread.length}}: {{tweet.text}}
        </div>

        <br/>
        <h2>IPFS Hash:</h2>
        {{threadData.ipfsHash}}

        <br/>
        <b-button @click="buy">Buy Thread</b-button>
        <br/>
        <p>Status updates:</p>
        <div v-for="(log, idx) in logs.reverse()" :key="log.msg">
          {{ log.msg }}
        </div>
      </div>
    </div>
    <div v-else class="column">
      No tweet for {{ $route.params.id }}
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  import firebase from "firebase";
  // Required for side-effects
  import "firebase/firestore";
  import FirebaseConfig from "../../_keys/firebase.json";

  import { ffs } from "@textile/powergate-client";

  import PowergateService from '../../services/PowergateService';

  const powergateService = new PowergateService();

  export default {
    computed: {
      ...mapGetters('web3ethers', [
         'nftContract',
         'account'
      ]),
    },
    data() {
      return {
        tweetByStatusId: null,
        threadData: null,
        logs: []
      };
    },
    async asyncData({app, params}) {
      return {tweetByStatusId: params.id};
    },
    async mounted() {
      // TODO - move service initialisation out of this method. Just here visiting temporarily
      // Init firebase
      firebase.initializeApp(FirebaseConfig);
      var db = firebase.firestore();

      // Init powergate service
      let token = powergateService.getTokenFromStorage();
      if (token === null || token === 'null') {
        // we need to get a token
        console.log('getting a new ffs token...');
        token = await powergateService.requestToken();
      }

      powergateService.setToken(token);
      powergateService.setTokenInLocalStorage(token);

      // Get tweet
      const tweet = await db.collection('tweets').doc(this.tweetByStatusId).get();

      this.threadData = tweet.data();
      console.log(this.threadData);
    },
    methods: {
      async buy() {
        console.log('buy started...')

        console.log('create storage deal...')
        const jobId = await powergateService.storeIpfsDataOnFileCoin(this.threadData.ipfsHash);
        console.log('job id', jobId);

        const logCallback = (log) => {
          this.logs.push(log);

          if (log.msg === 'Cold-Storage execution ran successfully.') {
            console.log('Time to mint the rollup...');
            this.mintNft();
          }
        };

        powergateService.watchLogs(logCallback, this.threadData.ipfsHash);
      },
      async mintNft() {
        await this.nftContract.mint(this.threadData.ipfsHash, this.account);
      },
    },
    // head() {
    //   return {
    //     title: `Edition #${this.editionById.id}`,
    //     meta: [
    //       {
    //         hid: `title`,
    //         name: 'title',
    //         content: `${this.editionById.metadata.name}`
    //       },
    //       {
    //         hid: `description`,
    //         name: 'description',
    //         content: `${this.editionById.metadata.description}`
    //       },
    //       {
    //         hid: `image`,
    //         name: 'image',
    //         content: this.editionById.metadata.image
    //       },
    //       {
    //         hid: `og:title`,
    //         name: 'og:title',
    //         content: `${this.editionById.metadata.name}`
    //       },
    //       {
    //         hid: `og:description`,
    //         name: 'og:description',
    //         content: `${this.editionById.metadata.description}`
    //       },
    //       {
    //         hid: `og:image`,
    //         name: 'og:image',
    //         content: this.editionById.metadata.image
    //       },
    //       {
    //         hid: `og:url`,
    //         name: 'og:url',
    //         content: this.editionById.metadata.image
    //       },
    //       {
    //         hid: `twitter:description`,
    //         property: "twitter:description",
    //         content: `${this.editionById.metadata.description}`
    //       },
    //       {
    //         hid: `twitter:title`,
    //         property: "twitter:title",
    //         content: `${this.editionById.metadata.name}`
    //       }
    //     ]
    //   };
    // },
  };
</script>

<style>
</style>
