import React from 'react';
import { Field, Control } from 'react-bulma-components/lib/components/form';
import Level from 'react-bulma-components/lib/components/level';
import Button from 'react-bulma-components/lib/components/button';
import Icon from 'react-bulma-components/lib/components/icon';
import PropTypes from 'prop-types';

const GeneralSubnav = ({ searchWord, search }) => (
  <Level renderAs="nav">
    <Level.Side align="left">
      <Level.Item>
        <Field kind="addons">
          <Control>
            <input
              className="input"
              type="text"
              placeholder={`Find a ${searchWord}`}
              onChange={search}
            />
          </Control>
          <Control>
            <Button renderAs="button">Search</Button>
          </Control>
        </Field>
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

GeneralSubnav.propTypes = {
  search: PropTypes.func.isRequired,
  searchWord: PropTypes.string.isRequired,
};

export default GeneralSubnav;
