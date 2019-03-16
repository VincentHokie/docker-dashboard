import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import ServiceSubnav from '../../subcomponents/subnavs/detail/service_detail_subnav.jsx';


class ServiceDetailContainer extends Base {
  componentDidMount() {}

  render() {
    return (
      <Columns>
        <Columns.Column>
          <ServiceSubnav id={this.props.match.params.serviceId} push={this.props.push} />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }}>
          { this.props.children }
        </Columns.Column>
      </Columns>
    );
  }
}

export default ServiceDetailContainer;
