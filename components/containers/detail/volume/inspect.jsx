import React from 'react';
import Base from '../../base.jsx';
import DetailVolumeBase from '../volume_container.jsx';
import DashboardWrapper from '../../dashboardHOC.jsx';
import VolumeService from '../../../../actions/volume_service.jsx';
import renderInspection from '../../../../utils/renderInspect.jsx';


class VolumeInspect extends Base {
  componentDidMount() {
    this.props.getVolumeDetail(this.props.match.params.volumeId);
  }

  render() {
    return (
      <DetailVolumeBase match={this.props.match} push={this.pushNavigation}>
        {renderInspection(this.props.details)}
      </DetailVolumeBase>
    );
  }
}

export default DashboardWrapper(
  VolumeInspect,
  { ...VolumeService },
  state => ({
    details: state.volumeReducer.details,
  }),
);
