import React from 'react';
import Base from '../../base.jsx';
import ServiceDetailBase from '../service_container.jsx';
import DashboardWrapper from '../../dashboardHOC.jsx';
import ServiceService from '../../../../actions/service_service.jsx';
import renderInspection from '../../../../utils/renderInspect.jsx';


class ServiceInspect extends Base {
  componentDidMount() {
    this.props.getServiceDetail(this.props.match.params.serviceId);
  }

  render() {
    return (
      <ServiceDetailBase match={this.props.match} push={this.pushNavigation}>
        {renderInspection(this.props.details)}
      </ServiceDetailBase>
    );
  }
}

export default DashboardWrapper(
  ServiceInspect,
  { ...ServiceService },
  state => ({
    details: state.serviceReducer.details,
  }),
);
