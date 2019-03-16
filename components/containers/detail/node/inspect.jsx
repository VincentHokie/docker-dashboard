import React from 'react';
import Base from '../../base.jsx';
import DetailNodeBase from '../node_container.jsx';
import DashboardWrapper from '../../dashboardHOC.jsx';
import NodeService from '../../../../actions/node_service.jsx';
import renderInspection from '../../../../utils/renderInspect.jsx';


class NodeInspect extends Base {
  componentDidMount() {
    this.props.getNodeDetail(this.props.match.params.nodeId);
  }

  render() {
    return (
      <DetailNodeBase match={this.props.match} push={this.pushNavigation}>
        {renderInspection(this.props.details)}
      </DetailNodeBase>
    );
  }
}

export default DashboardWrapper(
  NodeInspect,
  { ...NodeService },
  state => ({
    details: state.nodeReducer.details,
  }),
);
