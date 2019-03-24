import React from 'react';
import Table from 'react-bulma-components/lib/components/table';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const ConfigTable = ({ configs, searchString }) => (
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
            const regexStrings = searchString.trim().split(' ').join('|').trim('|');
            const regex = new RegExp(regexStrings, 'i');

            return (
              regex.test(configName) || (!searchString || searchString.length === 0) ?
                <tr key={uuid()}>
                  <th>
                    {config.Spec.Name}
                  </th>
                  <td>
                    {config.Version}
                  </td>
                  <td>
                    {config.CreatedAt}
                  </td>
                  <td>
                    {config.UpdatedAt}
                  </td>
                </tr> : null
            );
          }) : <tr />
      }
    </tbody>
  </Table>
);

ConfigTable.propTypes = {
  configs: PropTypes.shape({}),
  searchString: PropTypes.string,
};

ConfigTable.defaultProps = {
  configs: {},
  searchString: '',
};

export default ConfigTable;
