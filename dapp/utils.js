const _ = require('lodash');

const getNetIdString = (web3) => {
  return web3.eth.net.getId()
    .then((id) => {
      // N.B - be careful changing this as the warning banner uses this string
      console.log(`Running on network ID ${id}`);
      switch (id) {
        case 1:
          return {id: 1, human: 'Main', firebasePath: 'mainnet'};
        case 3:
          return {id: 3, human: 'Ropsten', firebasePath: 'ropsten'};
        case 4:
          return {id: 4, human: 'Rinkeby', firebasePath: 'rinkeby'};
        case 42:
          return {id: 42, human: 'kovan', firebasePath: 'mainnet'};
        default:
          return {id: 5777, human: 'Local', firebasePath: 'local'};
      }
    });
};

const getEtherscanAddress = (web3) => {
  return web3.eth.net.getId()
    .then((id) => {
      return lookupEtherscanAddress(id);
    })
    .then((etherScanAddress) => {
      console.log(`Setting etherscan address as [${etherScanAddress}]`);
      return etherScanAddress;
    });
};

const lookupEtherscanAddress = (id) => {
  switch (id) {
    case 1:
      return 'https://etherscan.io';
    case 3:
      return 'https://ropsten.etherscan.io';
    case 4:
      return 'https://rinkeby.etherscan.io';
    case 42:
      return 'https://kovan.etherscan.io';
    default:
      return '';
  }
};

const API_CONFIG = {
  local: 'http://localhost:5000/known-origin-io/us-central1/main/api',
  // beta site
  beta: 'https://beta-known-origin-io.firebaseapp.com/api',
  // beta site (web)
  beta_web: 'https://beta-known-origin-io.web.app/api',
  // beta site (sub-domain)
  beta_sub_web: 'https://beta.knownorigin.io/api',
  rinkeby_sub_web: 'https://rinkeby.knownorigin.io/api',
  // Live site
  live: 'https://knownorigin.io/api',
  // Live site
  live_root: 'https://knownorigin.io/api',
  live_root_www: 'https://www.knownorigin.io/api',

  // CDN API
  local_cdn: 'http://localhost:8082',
  image_cdn_prod: 'https://cdn.knownorigin.io',
  image_cdn_beta: 'https://beta-cdn.knownorigin.io',
};

const getApi = () => {
  switch (window.location.hostname) {
    case 'localhost':
    case 'rinkeby.localhost':
    case '127.0.0.1':
      return API_CONFIG.local;
    case 'beta-known-origin-io.firebaseapp.com':
      return API_CONFIG.beta;
    case 'beta-known-origin-io.web.app':
      return API_CONFIG.beta_web;
    case 'beta.knownorigin.io':
      return API_CONFIG.beta_sub_web;
    case 'rinkeby.knownorigin.io':
      return API_CONFIG.rinkeby_sub_web;
    case 'knownorigin.io':
      return API_CONFIG.live_root;
    case 'www.knownorigin.io':
      return API_CONFIG.live_root_www;
    default:
      return API_CONFIG.live;
  }
};

const getCdnApi = () => {
  // return API_CONFIG.local_cdn;
  switch (window.location.hostname) {
    // return API_CONFIG.local_cdn;
    case 'localhost':
    case '127.0.0.1':
    case 'beta-known-origin-io.firebaseapp.com':
    case 'beta-known-origin-io.web.app':
    case 'beta.knownorigin.io':
      return API_CONFIG.image_cdn_beta;
    case 'knownorigin.io':
    case 'www.knownorigin.io':
      return API_CONFIG.image_cdn_prod;
    default:
      return API_CONFIG.image_cdn_prod;
  }
};



const keys = {
  infura: '4396873c00c84479991e58a34a54ebd9',
  fortmatic: 'pk_live_1683588AF3ED9E22',
  fortmatic_beta: 'pk_test_46FA6C4AD76CC8E2',
  portis: '3980ff61-9d97-4cf2-85d1-31f00aa92af5',
  portis_beta: '70641e14-0113-4f31-9723-63774b74de87',
  portisKey: () => {
    if (window.location.hostname === 'beta-known-origin-io.web.app') {
      return keys.portis_beta;
    }
    return keys.portis;
  },
  fortmaticKeys() {
    if (window.location.hostname === 'beta-known-origin-io.web.app') {
      return keys.fortmatic_beta;
    }
    return keys.fortmatic;
  }
};

const isFileType = (imageUri, extension) => {
  // Fall back to trying to work out if its based on file extension
  // Used when we only have token data and not edition data
  return imageUri && _.indexOf([extension], _.last(imageUri.split('.')).toLowerCase()) > -1;
};

const isWebM = (imageUri) => {
  return isFileType(imageUri, 'webm');
};

export {
  getApi,
  getCdnApi,
  getNetIdString,
  getEtherscanAddress,
  lookupEtherscanAddress,
  keys,
  isFileType,
  isWebM,
};
