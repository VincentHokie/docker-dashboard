import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';
import VolumeSubnav from '../../subcomponents/subnavs/detail/volume_detail_subnav.jsx';
import renderInspection from '../../../utils/renderInspect.jsx';
import VolumeService from '../../../actions/volume_service.jsx';


class VolumeDetailContainer extends Base {
  componentDidMount() {
    this.props.getVolumeDetail(this.props.match.params.volumeId);
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <VolumeSubnav id={this.props.match.params.volumeId} />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }}>
          {renderInspection(this.props.details)}
        </Columns.Column>
      </Columns>
    );
  }
}

export default DashboardWrapper(
  VolumeDetailContainer,
  { ...VolumeService },
  state => ({
    details: state.volumeReducer.details,
  }),
);
