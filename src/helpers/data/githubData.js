import axios from 'axios';
import moment from 'moment';
import parse from 'parse-link-header';

const getUser = token => new Promise((resolve, reject) => {
  axios.get('https://api.github.com/user', { headers: { Authorization: `token ${token}` } })
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

const getGithubChartData = (url, events, token, resolve, reject) => {
  axios.get(`${url}`, { headers: { Authorization: `token ${token}` } })
    .then((res) => {
      // Parse link Header for pagination info
      const link = parse(res.headers.link);
      // Build array of pushes in last 60 days
      // Build array of only 'PushEvents" < 60 days from Guthub Events
      const pushData = events.concat(
        res.data.filter(
          gitHubEvent => gitHubEvent.type === 'PushEvent'
            && moment(gitHubEvent.created_at).isSameOrAfter(moment().subtract(60, 'days')),
        ),
      );
      // If there is a 'Next" link in the header recursive call the function
      // passing the array back through and the Next page to get them
      if (link.next) {
        getGithubChartData(link.next.url, pushData, token, resolve, reject);
      } else {
        // Create new Array of Objects for ReCharts format
        const githubChartData = [];
        for (let i = 0; i < pushData.length; i += 1) {
          const element = pushData[i];
          const eventDate = moment(element.created_at).format('L');
          // This block will summarize the data by day
          const eventDateMatch = githubChartData.find(x => x.date === eventDate);
          if (eventDateMatch) {
            eventDateMatch.commits += element.payload.commits.length;
          } else {
            githubChartData.push({
              date: eventDate,
              commits: element.payload.commits.length,
              itemCount: 0,
            });
          }
        }
        // Sort the final results so they display in the chart properly
        githubChartData.sort((a, b) => (moment(a.date, 'L').isAfter(moment(b.date, 'L')) ? 1 : -1));
        resolve(githubChartData);
      }
    })
    .catch((err) => {
      reject(err);
    });
};

export default { getUser, getUserEvents, getGithubChartData };
