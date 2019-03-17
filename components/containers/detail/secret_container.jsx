import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import SecretSubnav from '../../subcomponents/subnavs/detail/secret_detail_subnav.jsx';
import getEvents from '../../../actions/events_service.jsx';
import { SECRET_EVENTS_RETRIEVED } from '../../../types/secret.jsx';


class SecretDetailContainer extends Base {
  componentDidMount() {
    this.props.getEvents('secret', SECRET_EVENTS_RETRIEVED);
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <SecretSubnav id={this.props.match.params.secretId} push={this.props.push} />
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
)(SecretDetailContainer);
