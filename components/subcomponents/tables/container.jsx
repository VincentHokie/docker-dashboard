import React from 'react';
import Table from 'react-bulma-components/lib/components/table';
import Icon from 'react-bulma-components/lib/components/icon';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

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
              <tr key={uuid()}>
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
          }) : <tr />
      }
    </tbody>
  </Table>
);

ContainerTable.propTypes = {
  containers: PropTypes.shape({}),
  push: PropTypes.func.isRequired,
};

ContainerTable.defaultProps = {
  containers: {},
};

export default ContainerTable;
