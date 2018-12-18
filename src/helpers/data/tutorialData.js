import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getTutorialsData = uid => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/tutorials.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const tutorialsArray = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          tutorialsArray.push(res.data[key]);
        });
      }
      resolve(tutorialsArray);
    })
    .catch(err => reject(err));
});

export default { getTutorialsData };
