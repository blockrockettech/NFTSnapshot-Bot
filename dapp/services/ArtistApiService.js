import {getApi} from '../utils';

export default class ArtistApiService {

  constructor(currentNetworkId = 1) {
    this.currentNetworkId = currentNetworkId;
    this.api = getApi();
  }

  async loadArtistsData(skipCache = false) {
    console.log(`Loading artist data`);

    const dodgeCache = skipCache ? `?ref=${Date.now()}` : '';

    const data  = await this.$axios.$get(`${this.api}/artist/collective${dodgeCache}`);
    return data || [];
  }

}
