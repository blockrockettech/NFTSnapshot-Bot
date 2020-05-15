<template>
  <div class="columns is-centered">
    <div v-if="tweetById" class="column is-four-fifths">
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
        tweetById: null,
      };
    },
    async asyncData({app, params, $axios}) {
      console.log($axios);
      console.log(params);

      return {};
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
