import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DetailContainerSubnav from '../../subcomponents/subnavs/detail/container_detail_subnav.jsx';

class DetailContainerDetailContainer extends Base {
  componentDidMount() {}

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

export default DetailContainerDetailContainer;
