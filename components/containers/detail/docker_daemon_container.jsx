import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DockerDaemonSubnav from '../../subcomponents/subnavs/detail/docker_daemon_detail_subnav.jsx';
import getEvents from '../../../actions/events_service.jsx';
import { DOCKER_DAEMON_EVENTS_RETRIEVED } from '../../../types/docker-daemon.jsx';


class DockerDaemonDetailContainer extends Base {
  componentDidMount() {
    this.props.getEvents(
      '',
      DOCKER_DAEMON_EVENTS_RETRIEVED,
      this.props.match.params.dockerDaemonId,
    );
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <DockerDaemonSubnav
            id={this.props.match.params.dockerDaemonId}
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
)(DockerDaemonDetailContainer);
