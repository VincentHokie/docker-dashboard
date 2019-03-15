import React from 'react';
import Table from 'react-bulma-components/lib/components/table';
import PropTypes from 'prop-types';

const VolumeTable = ({ volumes, push }) => (
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
        volumes ?
          Object.keys(volumes).map((volumeName) => {
            const volume = volumes[volumeName];
            return (
              <tr key={volumeName}>
                <th>
                  <a href={`/volumes/${volume.Name}/details`} onClick={push}>
                    {volume.Name}
                  </a>
                </th>
                <td>
                  {volume.Driver}
                </td>
                <td>
                  {volume.CreatedAt}
                </td>
                <td>
                  {volume.Scope}
                </td>
              </tr>
            );
          }) : ''
      }
    </tbody>
  </Table>
);

VolumeTable.propTypes = {
  volumes: PropTypes.shape({}).isRequired,
  push: PropTypes.func.isRequired,
};

export default VolumeTable;
