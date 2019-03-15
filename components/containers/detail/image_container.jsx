import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';
import ImageSubnav from '../../subcomponents/subnavs/detail/images_detail_subnav.jsx';
import renderInspection from '../../../utils/renderInspect.jsx';
import ImageService from '../../../actions/image_service.jsx';


class ImageDetailContainer extends Base {
  componentDidMount() {
    this.props.getImageDetail(this.props.match.params.imageId);
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <ImageSubnav id={this.props.match.params.imageId} push={this.pushNavigation} />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }}>
          {renderInspection(this.props.details)}
        </Columns.Column>
      </Columns>
    );
  }
}

export default DashboardWrapper(
  ImageDetailContainer,
  { ...ImageService },
  state => ({
    details: state.imageReducer.details,
  }),
);
