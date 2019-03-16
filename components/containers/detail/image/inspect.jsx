import React from 'react';
import Base from '../../base.jsx';
import ImageDetailBase from '../image_container.jsx';
import DashboardWrapper from '../../dashboardHOC.jsx';
import ImageService from '../../../../actions/image_service.jsx';
import renderInspection from '../../../../utils/renderInspect.jsx';


class ImageInspect extends Base {
  componentDidMount() {
    this.props.getImageDetail(this.props.match.params.imageId);
  }

  render() {
    return (
      <ImageDetailBase match={this.props.match} push={this.pushNavigation}>
        {renderInspection(this.props.details)}
      </ImageDetailBase>
    );
  }
}

export default DashboardWrapper(
  ImageInspect,
  { ...ImageService },
  state => ({
    details: state.imageReducer.details,
  }),
);
