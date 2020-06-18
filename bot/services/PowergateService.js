const { createPow } = require("@textile/powergate-client");
const { ffs } = require("@textile/powergate-client");
const {Buffer} = require("buffer");

class PowergateService {
  constructor() {
    const host = "http://0.0.0.0:6002" // or whatever powergate instance you want

    const pow = createPow({ host })

    pow.ffs.create().then(({ token }) => {
      pow.setToken(token);
    });

    this.pow = pow;
  }

  async addDataToIpfs(data) {
    const buffer = Buffer.from(JSON.stringify(data));
    const { cid } = await this.pow.ffs.addToHot(buffer);
    return cid;
  }
}

module.exports = new PowergateService();