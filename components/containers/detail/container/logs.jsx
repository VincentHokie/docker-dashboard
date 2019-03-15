import React from 'react';
import Base from '../../base.jsx';
import DetailContainerBase from '../container_container.jsx';
import DashboardWrapper from '../../dashboardHOC.jsx';
import ContainerService from '../../../../actions/container_service.jsx';


class ContainerLogs extends Base {
  componentDidMount() {
    this.props.getContainerLogs(this.props.match.params.containerId);
  }

  render() {
    return (
      <DetailContainerBase match={this.props.match} />
    );
  }
}

export default DashboardWrapper(
  ContainerLogs,
  { ...ContainerService },
  state => ({
    logs: state.containerReducer.logs,
  }),
);
