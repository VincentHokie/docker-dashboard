import React from 'react';
import Base from '../../base.jsx';
import DetailNetworkBase from '../network_container.jsx';
import DashboardWrapper from '../../dashboardHOC.jsx';
import NetworkService from '../../../../actions/network_service.jsx';
import renderInspection from '../../../../utils/renderInspect.jsx';


class NetworkInspect extends Base {
  componentDidMount() {
    this.props.getNetworkDetail(this.props.match.params.networkId);
  }

  render() {
    return (
      <DetailNetworkBase match={this.props.match} push={this.pushNavigation}>
        {renderInspection(this.props.details)}
      </DetailNetworkBase>
    );
  }
}

export default DashboardWrapper(
  NetworkInspect,
  { ...NetworkService },
  state => ({
    details: state.networkReducer.details,
  }),
);
