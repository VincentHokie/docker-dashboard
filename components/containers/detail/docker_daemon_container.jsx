import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';
import DockerDaemonSubnav from '../../subcomponents/subnavs/detail/docker_daemon_detail_subnav.jsx';
import renderInspection from '../../../utils/renderInspect.jsx';


class DockerDaemonDetailContainer extends Base {
  componentDidMount() { }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <DockerDaemonSubnav id={this.props.match.params.dockerDaemonId} />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }}>
          {renderInspection(this.props.details)}
        </Columns.Column>
      </Columns>
    );
  }
}

export default DashboardWrapper(
  DockerDaemonDetailContainer,
  {},
  state => ({
    details: state.dockerDaemonReducer.details,
  }),
);
