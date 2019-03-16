import React from 'react';
import Table from 'react-bulma-components/lib/components/table';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const NodeTable = ({ nodes, push }) => (
  <Table>
    <thead>
      <tr>
        <th>
          <abbr title="Position">Name</abbr>
        </th>
        <th>
          <abbr title="Played">Availability</abbr>
        </th>
        <th>
          <abbr title="Played">Role</abbr>
        </th>
        <th>
          <abbr title="Played">State</abbr>
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
          <abbr title="Played">Availability</abbr>
        </th>
        <th>
          <abbr title="Played">Role</abbr>
        </th>
        <th>
          <abbr title="Played">State</abbr>
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
        nodes ?
          Object.keys(nodes).map((nodeName) => {
            const node = nodes[nodeName];
            return (
              <tr key={uuid()}>
                <th>
                  <a href={`/nodes/${node.Name}/details`} onClick={push}>
                    {node.Spec.Name}
                  </a>
                </th>
                <td>
                  {node.Spec.Availability}
                </td>
                <td>
                  {node.Spec.Role}
                </td>
                <td>
                  {node.Status.State}
                </td>
                <td>
                  {node.CreatedAt}
                </td>
                <td>
                  {node.UpdatedAt}
                </td>
              </tr>
            );
          }) : <tr />
      }
    </tbody>
  </Table>
);

NodeTable.propTypes = {
  nodes: PropTypes.shape({}),
  push: PropTypes.func.isRequired,
};

NodeTable.defaultProps = {
  nodes: {},
};

export default NodeTable;
