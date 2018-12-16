import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getResourcesData = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/resources.json`)
    .then((res) => {
      const resourcesArray = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          resourcesArray.push(res.data[key]);
        });
      }
      resolve(resourcesArray);
    })
    .catch(err => reject(err));
});

export default { getResourcesData };
