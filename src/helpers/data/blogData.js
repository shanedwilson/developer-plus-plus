import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getBlogsData = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/blogs.json`)
    .then((res) => {
      const blogsArray = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          blogsArray.push(res.data[key]);
        });
      }
      resolve(blogsArray);
    })
    .catch(err => reject(err));
});

export default { getBlogsData };