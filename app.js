import axios from 'axios';

const UPSTSH_URL = 'https://us1-moral-gopher-38684.upstash.io';
const UPSTASH_KEY = '';

(
  async () => {
    const response = await axios.get('https://api.ipify.org/?format=json');
    const { data } = response;

    if (data.ip) {
      await axios.get(`${UPSTSH_URL}/set/ip/${data.ip}`, {
        headers: {
          Authorization: `Bearer ${UPSTASH_KEY}`,
        }
      })
      .then(response => console.log(response.data))      
    }
  }
)()