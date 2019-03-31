import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import NetworkSubnav from '../../subcomponents/subnavs/detail/network_detail_subnav.jsx';
import eventService from '../../../actions/events_service.jsx';
import { NETWORK_EVENTS_RETRIEVED } from '../../../types/network.jsx';

const networkEventTypes = ['create', 'connect', 'disconnect', 'destroy', 'update', 'remove'];


class NetworkDetailContainer extends Base {
  componentDidMount() {
    this.props.getEvents(
      'network',
      NETWORK_EVENTS_RETRIEVED,
      this.props.match.params.networkId,
      networkEventTypes,
    );
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <NetworkSubnav id={this.props.match.params.networkId} push={this.props.push} />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }}>
          { this.props.children }
        </Columns.Column>
      </Columns>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  ...eventService,
}, dispatch);

module.exports = connect(
  null,
  mapDispatchToProps,
)(NetworkDetailContainer);
