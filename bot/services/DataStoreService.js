const _ = require('lodash');

class DataStoreService {

  constructor(db) {
    this.db = db;
  }

  async saveThread(tweetId, userId, thread) {
    console.log('Saving thread for tweet ID', tweetId);
    return this.db
      .collection('tweets')
      .doc(_.toString(tweetId))
      .set({
        originalTweetId: tweetId,
        originalTaggerId: userId,
        dataStored: Date.now(),
        thread,
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
