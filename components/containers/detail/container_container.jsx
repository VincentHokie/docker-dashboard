import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DetailContainerSubnav from '../../subcomponents/subnavs/detail/container_detail_subnav.jsx';
import { CONTAINER_EVENTS_RETRIEVED } from '../../../types/container.jsx';
import eventService from '../../../actions/events_service.jsx';


const containerEventTypes = [
  'attach', 'commit', 'copy', 'create', 'destroy', 'detach', 'die',
  'exec_create', 'exec_detach', 'exec_start', 'exec_die', 'export',
  'health_status', 'kill', 'oom', 'pause', 'rename', 'resize', 'restart',
  'start', 'stop', 'top', 'unpause', 'update'];


class DetailContainerDetailContainer extends Base {
  componentDidMount() {
    this.props.getEvents(
      'container',
      CONTAINER_EVENTS_RETRIEVED,
      this.props.match.params.containerId,
      containerEventTypes,
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
  ...eventService,
}, dispatch);

module.exports = connect(
  null,
  mapDispatchToProps,
)(DetailContainerDetailContainer);
