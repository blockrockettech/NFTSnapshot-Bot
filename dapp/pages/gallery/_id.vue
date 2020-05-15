<template>
  <div class="columns is-centered">
    <div v-if="tweetByStatusId" class="column is-four-fifths has-background-primary is-size-1">
      {{ tweetByStatusId }}
    </div>
    <div v-else class="column">
      No tweet for {{ $route.params.id }}
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        tweetByStatusId: null,
      };
    },
    async asyncData({app, params, $axios}) {
      // const thread = encodeURIComponent(`https://twitter.com/BlockRocketTech/status/${params.id}`);
      // const tweetByStatusId = await $axios.$get(`https://publish.twitter.com/oembed?url=${thread}&align=center`)


      return {tweetByStatusId: params.id};
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
