import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';
import SecretSubnav from '../../subcomponents/subnavs/detail/secret_detail_subnav.jsx';
import renderInspection from '../../../utils/renderInspect.jsx';
import SecretService from '../../../actions/secret_service.jsx';


class SecretDetailContainer extends Base {
  componentDidMount() {
    this.props.getSecretDetail(this.props.match.params.secretId);
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <SecretSubnav id={this.props.match.params.secretId} />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }}>
          {renderInspection(this.props.details)}
        </Columns.Column>
      </Columns>
    );
  }
}

export default DashboardWrapper(
  SecretDetailContainer,
  { ...SecretService },
  state => ({
    details: state.secretReducer.details,
  }),
);
