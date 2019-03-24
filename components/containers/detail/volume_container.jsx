import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import VolumeSubnav from '../../subcomponents/subnavs/detail/volume_detail_subnav.jsx';
import getEvents from '../../../actions/events_service.jsx';
import { VOLUME_EVENTS_RETRIEVED } from '../../../types/volume.jsx';


class VolumeDetailContainer extends Base {
  componentDidMount() {
    this.props.getEvents(
      'volume',
      VOLUME_EVENTS_RETRIEVED,
      this.props.match.params.volumeId,
    );
  }

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

const mapDispatchToProps = dispatch => bindActionCreators({
  getEvents,
}, dispatch);

module.exports = connect(
  null,
  mapDispatchToProps,
)(VolumeDetailContainer);
