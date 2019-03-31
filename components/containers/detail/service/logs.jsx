import React from 'react';
import Base from '../../base.jsx';
import ServiceDetailBase from '../service_container.jsx';
import DashboardWrapper from '../../dashboardHOC.jsx';
import ContainerService from '../../../../actions/container_service.jsx';


class ContainerStats extends Base {
  componentDidMount() {
    this.props.getContainerStats(this.props.match.params.containerId);
  }

  render() {
    return (
      <ServiceDetailBase match={this.props.match} push={this.pushNavigation} />
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
