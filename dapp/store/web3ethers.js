import Vue from 'vue';
import {ethers} from 'ethers';

import TwitterThreadSnapshotTruffleConf from '../truffleconf/TwitterThreadSnapshot.json';

let signer;
let nft;

function getContractAddressFromTruffleConf(truffleConf, chainId) {
  if (!truffleConf || !chainId) return '';
  const {networks} = truffleConf;
  if (networks[chainId.toString()]) {
    const address = networks[chainId.toString()].address;
    return address ? address : '';
  }
  return '';
}

export const state = () => ({
  account: null,
  chainId: 5777, // TODO default to a live network
});

export const getters = {
  nftContract: () => nft,
  account: (state) => state.account
};

export const mutations = {
  setAccount(state, account) {
    state.account = account;
  },

  setChainId(state, chainId) {
    state.chainId = chainId;
  },
};

export const actions = {
  async bootstrap({commit, dispatch}, web3) {
    try {
      console.log('bootstrapping ethers', web3);

      const provider = new ethers.providers.Web3Provider(web3.currentProvider);
      signer = provider.getSigner();
      const chain = await provider.getNetwork();

      const nftContractAddress = getContractAddressFromTruffleConf(TwitterThreadSnapshotTruffleConf, chain.chainId);

      nft = new ethers.Contract(
          nftContractAddress,
          TwitterThreadSnapshotTruffleConf.abi,
          signer,
      );

      const accounts = await provider.listAccounts();
      const account = accounts && accounts[0];

      if (account) {
        commit('setAccount', account);
        commit('setChainId', chain.chainId);
      } else {
        console.error(`No account detected: ${accounts}`);
      }
    } catch (e) {
      console.error(e);
    }
  },
};
