const Twit = require('twit');

class TwitterService {

  constructor() {
    this.T = new Twit({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token: process.env.TWITTER_ACCESS_TOKEN,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });
  }

  connectAndStartStreaming(onTweetCallback) {
    this.stream = this.T.stream("statuses/filter", {
      track: process.env.TRACKED_WORD,
      retry: true
    });

    this.stream.on("connected", () => console.log("Twitter stream connected!"));

    this.stream.on("tweet", tweet => onTweetCallback(tweet));

    this.stream.on("error", e => console.error(`stream error: ${e}`));

    this.stream.on("disconnect", disconnectMessage => {
      console.error(`stream disconnected: ${disconnectMessage}`);
      this.stream.start();
    });
  }
}

module.exports = TwitterService;