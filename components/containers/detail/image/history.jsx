import React from 'react';
import Base from '../../base.jsx';
import ImageDetailBase from '../image_container.jsx';
import DashboardWrapper from '../../dashboardHOC.jsx';
import ImageService from '../../../../actions/image_service.jsx';


class ImageHistory extends Base {
  componentDidMount() {
    this.props.getImageHistory(this.props.match.params.imageId);
  }

  render() {
    return (
      <ImageDetailBase match={this.props.match} push={this.pushNavigation} />
    );
  }
}

export default DashboardWrapper(
  ImageHistory,
  { ...ImageService },
  state => ({
    imageHistory: state.imageReducer.imageHistory,
  }),
);
