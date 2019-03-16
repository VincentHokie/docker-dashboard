import React from 'react';
import Base from '../../base.jsx';
import DetailContainerBase from '../container_container.jsx';
import DashboardWrapper from '../../dashboardHOC.jsx';
import ContainerService from '../../../../actions/container_service.jsx';
import ContainerProcessTable from '../../../subcomponents/tables/container_proccesses.jsx';

class ContainerProcesses extends Base {
  componentDidMount() {
    this.props.getContainerProcesses(this.props.match.params.containerId);
  }

  render() {
    return (
      <DetailContainerBase match={this.props.match} push={this.pushNavigation}>
        <ContainerProcessTable processes={this.props.processes} />
      </DetailContainerBase>
    );
  }
}

export default DashboardWrapper(
  ContainerProcesses,
  { ...ContainerService },
  state => ({
    processes: state.containerReducer.processes,
  }),
);
