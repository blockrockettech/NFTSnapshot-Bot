// Bootstrap env configuration
const dotenv = require('dotenv');

const result = dotenv.config({path: `.env`});
if (result.error) throw result.error;

const TwitterService = require('./services/TwitterService');

(async function runBot() {
  const twitterService = new TwitterService();

  // FIXME - Move callback into a thread processing service
  twitterService.connectAndStartStreaming((tweet) => {
    console.log(tweet);
  });
})();