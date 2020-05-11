const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'nftsnapshotbot',
  keyFilename: './_keys/NFTSnapshotBot-666cfbe51e94.json',
});

module.exports = db;
