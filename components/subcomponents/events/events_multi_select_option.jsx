import React from 'react';
import uuid from 'uuid/v4';
import { Option } from 'react-tokeninput';


const renderComboboxOptions = options =>
  options.map(name => (
    name ?
      <Option value={name} isFocusable key={uuid()}>
        {name}
      </Option> : ''
  ));

module.exports = renderComboboxOptions;
