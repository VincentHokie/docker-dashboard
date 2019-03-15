import React from 'react';
import Level from 'react-bulma-components/lib/components/level';
import Icon from 'react-bulma-components/lib/components/icon';
import Tabs from 'react-bulma-components/lib/components/tabs';
import PropTypes from 'prop-types';

const ServiceDetailSubnav = ({ id }) => (
  <Level renderAs="nav">
    <Level.Side align="left">
      <Level.Item>
        <Tabs>
          <Tabs.Tab as="a" href={`/services/${id}/stats`}>Stats</Tabs.Tab>
          <Tabs.Tab as="a" href={`/services/${id}/details`}>Inspect</Tabs.Tab>
          <Tabs.Tab as="a" href={`/services/${id}/events`}>Events</Tabs.Tab>
          <Tabs.Tab as="a" href={`/services/${id}/logs`}>Logs</Tabs.Tab>
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

ServiceDetailSubnav.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ServiceDetailSubnav;
