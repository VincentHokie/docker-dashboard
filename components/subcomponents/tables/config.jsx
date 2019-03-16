import React from 'react';
import Table from 'react-bulma-components/lib/components/table';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const ConfigTable = ({ configs }) => (
  <Table>
    <thead>
      <tr>
        <th>
          <abbr title="Position">Name</abbr>
        </th>
        <th>
          <abbr title="Played">Version</abbr>
        </th>
        <th>
          <abbr title="Won">Created At</abbr>
        </th>
        <th>
          <abbr title="Drawn">Updated At</abbr>
        </th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>
          <abbr title="Position">Name</abbr>
        </th>
        <th>
          <abbr title="Played">Version</abbr>
        </th>
        <th>
          <abbr title="Won">Created At</abbr>
        </th>
        <th>
          <abbr title="Drawn">Updated At</abbr>
        </th>
      </tr>
    </tfoot>
    <tbody>

      {
        configs ?
          Object.keys(configs).map((configName) => {
            const config = configs[configName];
            return (
              <tr key={uuid()}>
                <th>
                  { config.Spec.Name }
                </th>
                <td>
                  { config.Version }
                </td>
                <td>
                  { config.CreatedAt }
                </td>
                <td>
                  { config.UpdatedAt }
                </td>
              </tr>
            );
          }) : <tr />
      }
    </tbody>
  </Table>
);

ConfigTable.propTypes = {
  configs: PropTypes.shape({}),
};

ConfigTable.defaultProps = {
  configs: {},
};

export default ConfigTable;
