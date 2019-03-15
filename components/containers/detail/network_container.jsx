import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';
import NetworkSubnav from '../../subcomponents/subnavs/detail/network_detail_subnav.jsx';
import renderInspection from '../../../utils/renderInspect.jsx';
import NetworkService from '../../../actions/network_service.jsx';


class NetworkDetailContainer extends Base {
  componentDidMount() {
    this.props.getNetworkDetail(this.props.match.params.networkId);
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <NetworkSubnav id={this.props.match.params.neetworkId} />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }}>
          {renderInspection(this.props.details)}
        </Columns.Column>
      </Columns>
    );
  }
}

export default DashboardWrapper(
  NetworkDetailContainer,
  { ...NetworkService },
  state => ({
    details: state.networkReducer.details,
  }),
);
