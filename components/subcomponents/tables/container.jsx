import React from 'react';
import Table from 'react-bulma-components/lib/components/table';
import Icon from 'react-bulma-components/lib/components/icon';
import PropTypes from 'prop-types';

const ContainerTable = ({ containers, push }) => (
  <Table>
    <thead>
      <tr>
        <th>
          <abbr title="Position">Name</abbr>
        </th>
        <th>
          <abbr title="Played">Status</abbr>
        </th>
        <th>
          <abbr title="Won">Uptime</abbr>
        </th>
        <th>
          <abbr title="Drawn">Health</abbr>
        </th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>
          <abbr title="Position">Name</abbr>
        </th>
        <th>
          <abbr title="Played">Status</abbr>
        </th>
        <th>
          <abbr title="Won">Uptime</abbr>
        </th>
        <th>
          <abbr title="Drawn">Health</abbr>
        </th>
      </tr>
    </tfoot>
    <tbody>

      {
        containers ?
          Object.keys(containers).map((containerName) => {
            const container = containers[containerName];
            return (
              <tr key={containerName}>
                <th>
                  <a href={`/containers${container.Names[0]}/details`} onClick={push}>
                    { container.Names[0] }
                  </a>
                </th>
                <td>
                  { container.State }
                </td>
                <td>
                  { container.Status }
                </td>
                <td>
                  <Icon>
                    <span className="fas fa-bell" />
                  </Icon>
                </td>
              </tr>
            );
          }) : ''
      }
    </tbody>
  </Table>
);

ContainerTable.propTypes = {
  containers: PropTypes.shape({}).isRequired,
  push: PropTypes.func.isRequired,
};

export default ContainerTable;
