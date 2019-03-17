import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import NodeSubnav from '../../subcomponents/subnavs/detail/node_detail_subnav.jsx';
import getEvents from '../../../actions/events_service.jsx';
import { NODE_EVENTS_RETRIEVED } from '../../../types/node.jsx';


class NodeDetailContainer extends Base {
  componentDidMount() {
    this.props.getEvents('node', NODE_EVENTS_RETRIEVED);
  }

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

const mapDispatchToProps = dispatch => bindActionCreators({
  getEvents,
}, dispatch);

module.exports = connect(
  null,
  mapDispatchToProps,
)(NodeDetailContainer);
