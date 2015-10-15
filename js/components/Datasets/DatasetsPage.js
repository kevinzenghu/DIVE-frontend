import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-react-router';

import { fetchDatasetsIfNeeded } from '../../actions/DatasetActions';
import styles from './datasets.sass';

export class DatasetsPage extends Component {
  constructor(props) {
    super(props);

    if (this.props.routes.length < 4) {
      this.props.pushState(null, `/projects/${this.props.params.projectId}/data/upload`);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.project.properties.id !== this.props.project.properties.id) {
      const { project } = nextProps;
      this.props.fetchDatasetsIfNeeded(project.properties.id);
    }
  }

  render() {
    return (
      <div className={ styles.fillContainer }>
        {this.props.children}
      </div>
    );
  }
}

DatasetsPage.propTypes = {
  project: PropTypes.object.isRequired,
  datasets: PropTypes.object.isRequired,
  children: PropTypes.node
};

function mapStateToProps(state) {
  const { project, datasets, datasetId } = state;
  return {
    project,
    datasets,
    datasetId
  }
}

export default connect(mapStateToProps, { fetchDatasetsIfNeeded, pushState })(DatasetsPage);
