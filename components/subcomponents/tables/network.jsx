import React from 'react';
import Table from 'react-bulma-components/lib/components/table';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const NetworkTable = ({ networks, push }) => (
  <Table>
    <thead>
      <tr>
        <th>
          <abbr title="Position">Name</abbr>
        </th>
        <th>
          <abbr title="Played">Driver</abbr>
        </th>
        <th>
          <abbr title="Won">Created At</abbr>
        </th>
        <th>
          <abbr title="Drawn">Scope</abbr>
        </th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>
          <abbr title="Position">Name</abbr>
        </th>
        <th>
          <abbr title="Played">Driver</abbr>
        </th>
        <th>
          <abbr title="Won">Created At</abbr>
        </th>
        <th>
          <abbr title="Drawn">Scope</abbr>
        </th>
      </tr>
    </tfoot>
    <tbody>

      {
        networks ?
          Object.keys(networks).map((networkName) => {
            const network = networks[networkName];
            return (
              <tr key={uuid()}>
                <th>
                  <a href={`/networks/${network.Name}/details`} onClick={push}>
                    {network.Name}
                  </a>
                </th>
                <td>
                  {network.Driver}
                </td>
                <td>
                  {network.Created}
                </td>
                <td>
                  {network.Scope}
                </td>
              </tr>
            );
          }) : <tr />
      }
    </tbody>
  </Table>
);

NetworkTable.propTypes = {
  networks: PropTypes.shape({}),
  push: PropTypes.func.isRequired,
};

NetworkTable.defaultProps = {
  networks: {},
};

export default NetworkTable;
