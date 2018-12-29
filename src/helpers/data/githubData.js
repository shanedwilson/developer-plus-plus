import axios from 'axios';

const getUser = (username, token) => new Promise((resolve, reject) => {
  axios.get('https://api.github.com/user/', { headers: { Authorization: `token ${token}` } })
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
});

const getUserEvents = (username, token) => new Promise((resolve, reject) => {
  axios.get(`https://api.github.com/users/${username}/events/public`, { headers: { Authorization: `token ${token}` } })
    .then((res) => {
      let commitCount = 0;
      const pushEvents = res.data.filter(event => event.type === 'PushEvent');
      pushEvents.forEach((pushEvent) => {
        commitCount += pushEvent.payload.commits.length;
      });
      resolve(commitCount);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getUser, getUserEvents };
