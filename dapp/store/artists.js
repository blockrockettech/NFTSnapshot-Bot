import Vue from 'vue';

export const state = () => ({
  artists: null,
});

export const getters = {
  artists: state => state.artists,
};

export const mutations = {

  setArtists(state, artists) {
    state.artists = artists;
  },
};

export const actions = {

  async loadArtists({commit}) {
    try {
      console.log(`loadArtists`);

    } catch (e) {
      console.error(e);
    }
  },
};
