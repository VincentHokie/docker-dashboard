import React from 'react';
import Base from '../../base.jsx';
import DetailContainerBase from '../container_container.jsx';
import DashboardWrapper from '../../dashboardHOC.jsx';
import ContainerService from '../../../../actions/container_service.jsx';


class ContainerEvents extends Base {
  componentDidMount() {}

  render() {
    return (
      <DetailContainerBase match={this.props.match} push={this.pushNavigation} />
    );
  }
}

export default DashboardWrapper(
  ContainerEvents,
  { ...ContainerService },
  state => ({
    events: state.containerReducer.events,
  }),
);
