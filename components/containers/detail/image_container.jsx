import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import ImageSubnav from '../../subcomponents/subnavs/detail/images_detail_subnav.jsx';
import { IMAGE_EVENTS_RETRIEVED } from '../../../types/image.jsx';
import getEvents from '../../../actions/events_service.jsx';


class ImageDetailContainer extends Base {
  componentDidMount() {
    this.props.getEvents('image', IMAGE_EVENTS_RETRIEVED);
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <ImageSubnav id={this.props.match.params.imageId} push={this.props.push} />
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
)(ImageDetailContainer);
