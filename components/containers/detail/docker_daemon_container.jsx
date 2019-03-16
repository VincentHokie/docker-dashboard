import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DockerDaemonSubnav from '../../subcomponents/subnavs/detail/docker_daemon_detail_subnav.jsx';


class DockerDaemonDetailContainer extends Base {
  componentDidMount() {}

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

export default DockerDaemonDetailContainer;
