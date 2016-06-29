import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from '../Analysis.sass';

import ComparisonSidebar from './ComparisonSidebar';
import ComparisonView from './ComparisonView';

export class ComparisonPage extends Component {
  render() {
    return (
      <div className={ `${ styles.fillContainer } ${ styles.summaryContainer }` }>
        <ComparisonView />
        <ComparisonSidebar />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { })(ComparisonPage);
