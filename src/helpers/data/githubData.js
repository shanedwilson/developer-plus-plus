import axios from 'axios';

const getUser = username => new Promise((resolve, reject) => {
  axios.get(`https://api.github.com/users/${username}`)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
});

const getUserEvents = username => new Promise((resolve, reject) => {
  axios.get(`https://api.github.com/users/${username}/events/public`)
    .then((res) => {
      let commitCount = 0;
      const pushEvents = res.data.filter(event => event.type === 'PushEvent');
      pushEvents.forEach((pushEvent) => {
        pushEvent.payload.commits.forEach((commit) => {
          if (commit.distinct === true) {
            commitCount += pushEvent.payload.commits.length;
          }
        });
      });
      resolve(commitCount);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getUser, getUserEvents };
