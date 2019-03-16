import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import NodeSubnav from '../../subcomponents/subnavs/detail/node_detail_subnav.jsx';


class NodeDetailContainer extends Base {
  componentDidMount() {}

  render() {
    return (
      <Columns>
        <Columns.Column>
          <NodeSubnav id={this.props.match.params.nodeId} push={this.props.push} />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }}>
          { this.props.children }
        </Columns.Column>
      </Columns>
    );
  }
}

export default NodeDetailContainer;
