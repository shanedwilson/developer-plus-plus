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
    const { githubChartData, allItems } = this.props;
    return (
      <LineChart width={1350} height={200} data={allItems}>
        <XAxis dataKey="doneDate"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="isDone" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    );
  }
}

export default Graph;
