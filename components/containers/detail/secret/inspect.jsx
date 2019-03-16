import React from 'react';
import Base from '../../base.jsx';
import DetailSecretBase from '../secret_container.jsx';
import DashboardWrapper from '../../dashboardHOC.jsx';
import SecretService from '../../../../actions/secret_service.jsx';
import renderInspection from '../../../../utils/renderInspect.jsx';


class SecretInspect extends Base {
  componentDidMount() {
    this.props.getSecretDetail(this.props.match.params.secretId);
  }

  render() {
    return (
      <DetailSecretBase match={this.props.match} push={this.pushNavigation}>
        {renderInspection(this.props.details)}
      </DetailSecretBase>
    );
  }
}

export default DashboardWrapper(
  SecretInspect,
  { ...SecretService },
  state => ({
    details: state.secretReducer.details,
  }),
);
