import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getItemsData = (uid, item) => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/${item}.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const itemsArray = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          itemsArray.push(res.data[key]);
        });
      }
      const sortedItems = itemsArray.sort((a, b) => a.isDone - b.isDone);
      resolve(sortedItems);
    })
    .catch(err => reject(err));
});

const deleteItem = (itemId, itemType) => axios.delete(`${firebaseUrl}/${itemType}/${itemId}.json`);

const postItem = (item, itemType) => axios.post(`${firebaseUrl}/${itemType}/.json`, item);

const updateIsDone = (itemId, itemType, isDone) => axios.patch(`${firebaseUrl}/${itemType}/${itemId}.json`, { isDone });

export default {
  getItemsData,
  deleteItem,
  postItem,
  updateIsDone,
};
