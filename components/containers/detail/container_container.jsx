import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DetailContainerSubnav from '../../subcomponents/subnavs/detail/container_detail_subnav.jsx';
import { CONTAINER_EVENTS_RETRIEVED } from '../../../types/container.jsx';
import getEvents from '../../../actions/events_service.jsx';


class DetailContainerDetailContainer extends Base {
  componentDidMount() {
    this.props.getEvents(
      'container',
      CONTAINER_EVENTS_RETRIEVED,
      this.props.match.params.containerId,
    );
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <DetailContainerSubnav
            id={this.props.match.params.containerId}
            push={this.props.push}
          />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }}>
          { this.props.children }
        </Columns.Column>
      </Columns>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getEvents,
}, dispatch);

module.exports = connect(
  null,
  mapDispatchToProps,
)(DetailContainerDetailContainer);
