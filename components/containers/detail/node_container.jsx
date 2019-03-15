import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';
import NodeSubnav from '../../subcomponents/subnavs/detail/node_detail_subnav.jsx';
import renderInspection from '../../../utils/renderInspect.jsx';
import NodeService from '../../../actions/node_service.jsx';


class NodeDetailContainer extends Base {
  componentDidMount() {
    this.props.getNodeDetail(this.props.match.params.nodeId);
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <NodeSubnav id={this.props.match.params.nodeId} push={this.pushNavigation} />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }}>
          {renderInspection(this.props.details)}
        </Columns.Column>
      </Columns>
    );
  }
}

export default DashboardWrapper(
  NodeDetailContainer,
  { ...NodeService },
  state => ({
    details: state.nodeReducer.details,
  }),
);
