import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getPodcastsData = uid => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/podcasts.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const podcastsArray = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          podcastsArray.push(res.data[key]);
        });
      }
      resolve(podcastsArray);
    })
    .catch(err => reject(err));
});

export default { getPodcastsData };
