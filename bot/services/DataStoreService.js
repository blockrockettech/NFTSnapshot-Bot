const _ = require('lodash');
const PowergateService = require('./PowergateService');

const SampleImage = require('../SampleBase64Encoded1MBImage.json');

class DataStoreService {

  constructor(db) {
    this.db = db;
  }

  async saveThread(tweetId, userId, thread) {
    console.log('Saving thread for tweet ID', tweetId);

    console.log('Step 1 - Attempt to generate NFT metadata and push to IPFS for caching');
    const timestamp = Date.now();
    const metadata = {
      name: tweetId,
      image: SampleImage.data,
      description: JSON.stringify(thread),
      attributes: {
        userId,
        tweetId,
        timestamp
      }
    };

    const ipfsHash = await PowergateService.addDataToIpfs(metadata);

    console.log('Step 2 - Attempt to store data in the db');
    return this.db
      .collection('tweets')
      .doc(_.toString(tweetId))
      .set({
        originalTweetId: tweetId,
        originalTaggerId: userId,
        timestamp,
        thread,
        ipfsHash,
      });
  }

  async getThread(tweetId) {
    return this.db
      .collection('tweets')
      .doc(_.toString(tweetId))
      .get()
      .then((doc) => {
        if (doc.exists) {
          return doc.data();
        }
        return null;
      });
  }
}


module.exports = new DataStoreService(require('./Firestore'));
