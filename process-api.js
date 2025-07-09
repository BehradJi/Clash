const fs = require('fs');
const axios = require('axios');

// Hardcoded API endpoint (replace with your actual endpoint)
const API_ENDPOINT = 'https://bestip.06151953.xyz/bestip/Europe';

async function processApi() {
  try {
    const response = await axios.get(API_ENDPOINT);
    const data = response.data;

    const formattedOutput = data.map(entry => {
      return `${entry.ip}:${entry.port}#${entry.region}-${entry.city}`;
    }).join('\n');

    fs.writeFileSync('output.txt', formattedOutput);
    console.log('Output written to output.txt');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

processApi();
