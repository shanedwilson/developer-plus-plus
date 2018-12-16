import axios from 'axios';


const getUser = user => new Promise((resolve, reject) => {
  axios.get('https://api.github.com/users/shanedwilson')
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
});

// const getUserEvents = username => new Promise((resolve, reject) => {
//   axios.get(`https://api.github.com/users/${username}/events/public`)
//     .then((res) => {
//       resolve(res);
//     })
//     .catch((err) => {
//       reject(err);
//     });
// });

export default { getUser };
