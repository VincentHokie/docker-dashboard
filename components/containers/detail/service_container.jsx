import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';
import ServiceSubnav from '../../subcomponents/subnavs/detail/service_detail_subnav.jsx';
import renderInspection from '../../../utils/renderInspect.jsx';
import ServiceService from '../../../actions/service_service.jsx';


class ServiceDetailContainer extends Base {
  componentDidMount() {
    this.props.getServiceDetail(this.props.match.params.serviceId);
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <ServiceSubnav id={this.props.match.params.serviceId} push={this.pushNavigation} />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }}>
          {renderInspection(this.props.details)}
        </Columns.Column>
      </Columns>
    );
  }
}

export default DashboardWrapper(
  ServiceDetailContainer,
  { ...ServiceService },
  state => ({
    details: state.serviceReducer.details,
  }),
);
