import axios from 'axios';
import apiKeys from '../apiKeys';

const clientId = apiKeys.githubApi.client_id;
const clientSecret = apiKeys.githubApi.client_secret;

const getUser = username => new Promise((resolve, reject) => {
  axios.get(`https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
});

const getUserEvents = username => new Promise((resolve, reject) => {
  axios.get(`https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}/events/public`)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getUser, getUserEvents };
