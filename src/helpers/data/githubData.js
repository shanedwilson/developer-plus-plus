import axios from 'axios';


const getUser = user => new Promise((resolve, reject) => {
  axios.get('https://api.github.com/users/shanedwilson')
    .then((res) => {
      console.log(res.data);
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
});

const getUserEvents = username => new Promise((resolve, reject) => {
  axios.get('https://api.github.com/users/shanedwilson/events/public')
    .then((res) => {
      console.log(res.data);
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getUser, getUserEvents };
