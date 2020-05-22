<template>
  <div>
    <div class="has-background-white">
      <b-navbar fixed-top transparent spaced>
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <span class="has-text-black is-size-4">NFT Snapshot</span>
          </b-navbar-item>
        </template>
        <template slot="start">
        </template>

        <template slot="end">
          <n-link :to="{ name: 'gallery' }" class="navbar-item">
            Gallery
          </n-link>
        </template>
      </b-navbar>
      <section  style="padding-top: 1rem; padding-bottom: 2rem; min-height: 500px;">
        <nuxt/>
      </section>
    </div>
    <footer style="padding-top: 50px; padding-bottom: 250px;">
      <div class="columns">
        <div class="column">
          <div>
            <p class="is-family-secondary has-text-grey-light has-text-centered">
              ROLL IT. SNAP IT.
            </p>
          </div>
        </div>
        <div class="column">
          <div>
            <p>
              <n-link :to="{ name: 'gallery' }">
                Gallery
              </n-link>
            </p>
          </div>
        </div>
        <div class="column">
          <div>
            <p><a href="#" target="_blank">Privacy</a></p>
            <p><a href="#" target="_blank">Terms of Service</a></p>
          </div>
        </div>
        <div class="column">
          <div class="level is-mobile">
            <div class="level-left">
              <a class="level-item" href="https://twitter.com/ethrollup" target="_blank">
                <b-icon icon="twitter"></b-icon>
              </a>
            </div>
          </div>
          <div>
            <p class="heading has-text-grey-light is-family-monospace">Built by BlockRocket</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        bodyAttrs: {
          class: 'has-navbar-fixed-top'
        },
      };
    }
  };
</script>

<style lang="sass">

</style>
