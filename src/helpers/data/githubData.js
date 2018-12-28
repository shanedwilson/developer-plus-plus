import axios from 'axios';
// import moment from 'moment';
// import parse from 'parse-link-header';


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
        commitCount += pushEvent.payload.commits.length;
      });
      resolve(commitCount);
    })
    .catch((err) => {
      reject(err);
    });
});

// const getGithubChartData = username => new Promise((resolve, reject) => {
//   axios.get(`https://api.github.com/users/${username}/events/public`)
//     .then((res) => {
//       // Parse link Header for pagination info
//       const link = parse(res.headers.link);
//       // Build array of pushes in last 60 days
//       const pushData = [];

//     })
//     .catch((err) => {
//       reject(err);
//     });
// });

export default { getUser, getUserEvents };
