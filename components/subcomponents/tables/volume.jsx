import React from 'react';
import Table from 'react-bulma-components/lib/components/table';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const VolumeTable = ({ volumes, push, searchString }) => (
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
            const regexStrings = searchString.trim().split(' ').join('|').trim('|');
            const regex = new RegExp(regexStrings, 'i');

            return (
              regex.test(volumeName) || (!searchString || searchString.length === 0) ?
                <tr key={uuid()}>
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
                </tr> : null
            );
          }) : <tr />
      }
    </tbody>
  </Table>
);

VolumeTable.propTypes = {
  volumes: PropTypes.shape({}),
  push: PropTypes.func.isRequired,
  searchString: PropTypes.string,
};

VolumeTable.defaultProps = {
  volumes: {},
  searchString: '',
};

export default VolumeTable;
