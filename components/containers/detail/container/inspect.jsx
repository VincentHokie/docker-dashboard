import React from 'react';
import Base from '../../base.jsx';
import DetailContainerBase from '../container_container.jsx';
import renderInspection from '../../../../utils/renderInspect.jsx';
import DashboardWrapper from '../../dashboardHOC.jsx';
import ContainerService from '../../../../actions/container_service.jsx';


class InspectContainer extends Base {
  componentDidMount() {
    this.props.getContainerDetail(this.props.match.params.containerId);
  }

  render() {
    return (
      <DetailContainerBase match={this.props.match} push={this.pushNavigation}>
        {renderInspection(this.props.details)}
      </DetailContainerBase>
    );
  }
}

export default DashboardWrapper(
  InspectContainer,
  { ...ContainerService },
  state => ({
    details: state.containerReducer.details,
  }),
);
