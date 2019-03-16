import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import VolumeSubnav from '../../subcomponents/subnavs/detail/volume_detail_subnav.jsx';


class VolumeDetailContainer extends Base {
  componentDidMount() {}

  render() {
    return (
      <Columns>
        <Columns.Column>
          <VolumeSubnav id={this.props.match.params.volumeId} push={this.props.push} />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }}>
          { this.props.children }
        </Columns.Column>
      </Columns>
    );
  }
}

export default VolumeDetailContainer;
