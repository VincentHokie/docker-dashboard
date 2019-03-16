import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import SecretSubnav from '../../subcomponents/subnavs/detail/secret_detail_subnav.jsx';


class SecretDetailContainer extends Base {
  componentDidMount() {}

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

export default SecretDetailContainer;
