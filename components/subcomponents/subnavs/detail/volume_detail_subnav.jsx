import React from 'react';
import Level from 'react-bulma-components/lib/components/level';
import Icon from 'react-bulma-components/lib/components/icon';
import Tabs from 'react-bulma-components/lib/components/tabs';
import PropTypes from 'prop-types';

const VolumeDetailSubnav = ({ id, push }) => (
  <Level renderAs="nav">
    <Level.Side align="left">
      <Level.Item>
        <Tabs>
          <Tabs.Tab as="a" href={`/containers/${id}/details`} onClick={push}>Inspect</Tabs.Tab>
          <Tabs.Tab as="a" href={`/containers/${id}/events`} onClick={push}>Events</Tabs.Tab>
        </Tabs>
      </Level.Item>
    </Level.Side>

    <Level.Side align="right">
      <Level.Item>
        <Icon>
          <span className="fas fa-th" />
        </Icon>
      </Level.Item>
      <Level.Item>
        <Icon>
          <span className="fas fa-list-ul" />
        </Icon>
      </Level.Item>
    </Level.Side>
  </Level>
);

VolumeDetailSubnav.propTypes = {
  id: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
};

export default VolumeDetailSubnav;
