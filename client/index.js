const axios = require('axios');
const niceList = require('../utils/niceList.json');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  const prover = niceList[0];

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    prover
  });

  console.log({ gift, prover });
}

main();