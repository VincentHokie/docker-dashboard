import React from 'react';
import Menu from 'react-bulma-components/lib/components/menu';

const renderInspection = (detail, menuTitle = 'General') => (
  detail ?
    <Menu as="aside">
      <Menu.List title={menuTitle}>
        {Object.keys(detail).map((key) => {
          const value = detail[key];
          const isObj = value === Object(value);
          return (
            <Menu.List.Item>
              {isObj ? renderInspection(value, key) : `${key}: ${value}`}
            </Menu.List.Item>
          );
        })
        }
      </Menu.List>
    </Menu> : ''
);

module.exports = renderInspection;
