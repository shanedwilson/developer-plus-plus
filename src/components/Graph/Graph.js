import React from 'react';
// import PropTypes from 'prop-types';
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
} from 'recharts';
import moment from 'moment';

const currentDate = moment().format();

class Graph extends React.Component {
  render() {
    const { githubGraphData, allItems } = this.props;
    console.log(allItems);
    return (
      <LineChart width={500} height={300}>
        <XAxis dataKey="date"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    );
  }
}

export default Graph;
