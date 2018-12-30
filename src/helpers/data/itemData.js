import axios from 'axios';
import moment from 'moment';
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

const getAllItemsData = uid => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/.json`)
    .then((res) => {
      const combinedData = Object.assign({}, res.data.blogs,
        res.data.podcasts, res.data.tutorials, res.data.resources);
      const allItemsArray = [];
      if (combinedData !== null) {
        Object.keys(combinedData).forEach((key) => {
          combinedData[key].id = key;
          if (combinedData[key].uid === uid && combinedData[key].isDone === true) {
            allItemsArray.push(combinedData[key]);
          }
        });
      }
      allItemsArray.sort((a, b) => (moment(a.doneDate).isAfter(moment(b.doneDate)) ? 1 : -1));
      resolve(allItemsArray);
    })
    .catch(err => reject(err));
});


const deleteItem = (itemId, itemType) => axios.delete(`${firebaseUrl}/${itemType}/${itemId}.json`);

const postItem = (item, itemType) => axios.post(`${firebaseUrl}/${itemType}/.json`, item);

const updateIsDone = (itemId, itemType, isDone, doneDate) => axios.patch(`${firebaseUrl}/${itemType}/${itemId}.json`, { isDone, doneDate });

export default {
  getItemsData,
  deleteItem,
  postItem,
  updateIsDone,
  getAllItemsData,
};
