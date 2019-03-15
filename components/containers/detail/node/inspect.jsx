import React from 'react';
import Base from '../../base.jsx';
import DetailContainerBase from '../container_container.jsx';
import DashboardWrapper from '../../dashboardHOC.jsx';
import ContainerService from '../../../../actions/container_service.jsx';


class ContainerStats extends Base {
  componentDidMount() {
    this.props.getContainerStats(this.props.match.params.containerId);
  }

  render() {
    return (
      <DetailContainerBase match={this.props.match} />
    );
  }
}

export default DashboardWrapper(
  ContainerStats,
  { ...ContainerService },
  state => ({
    stats: state.containerReducer.stats,
  }),
);
