import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import ServiceSubnav from '../../subcomponents/subnavs/detail/service_detail_subnav.jsx';
import eventService from '../../../actions/events_service.jsx';
import { SERVICE_EVENTS_RETRIEVED } from '../../../types/service.jsx';


class ServiceDetailContainer extends Base {
  componentDidMount() {
    this.props.getEvents(
      'service',
      SERVICE_EVENTS_RETRIEVED,
      this.props.match.params.serviceId,
    );
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <ServiceSubnav id={this.props.match.params.serviceId} push={this.props.push} />
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
)(ServiceDetailContainer);
