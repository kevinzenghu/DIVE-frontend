import React, { Component, PropTypes } from 'react';

import { fullOptions, minimalOptions } from '../VisualizationOptions';

import styles from '../Visualizations.sass';

var Chart = require('react-google-charts').Chart;

export default class ColumnChart extends Component {
  render() {
    const { data, fieldNames, generatingProcedure, isMinimalView, chartId, colors, labels } = this.props;

    var finalData = data;

    var options = isMinimalView ? minimalOptions : fullOptions;
    options.hAxis.title = labels && labels.x ? labels.x : finalData[0][0];
    options.vAxis.title = labels && labels.y ? labels.y : finalData[0][1];
    options.colors = colors;

    options = {
      ...options,
      intervals: { 'lineWidth': 2, 'barWidth': 0.25 },
      hAxis: {
        textStyle: {
          color: '#888'
        },
        titleTextStyle: {
          color: '#333',
          bold: true,
          italic: false
        }
      },
      vAxes: [
        {
          textStyle: {
            color: '#888'
          }
        }
      ],
      vAxis: {
        minValue: 0,
        textStyle: {
          color: '#888'
        },
        titleTextStyle: {
          color: '#333',
          bold: true,
          italic: false
        }
      },
      legend: {
        position: 'none'
      }
    };

    return (
      <Chart chartType="ColumnChart" chartVersion="43" options={ options } data={ finalData } graph_id={ chartId }/>
    );
  }
}

ColumnChart.propTypes = {
  chartId: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  isMinimalView: PropTypes.bool,
  options: PropTypes.object,
  labels: PropTypes.object,
  colors: PropTypes.object
};

ColumnChart.defaultProps = {
  isMinimalView: false,
  options: {},
  labels: {},
  colors: [ '#007BD7' ]
};
