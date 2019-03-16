import React from 'react';
import Table from 'react-bulma-components/lib/components/table';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const SecretTable = ({ secrets, push }) => (
  <Table>
    <thead>
      <tr>
        <th>
          <abbr title="Position">Name</abbr>
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
          <abbr title="Won">Created At</abbr>
        </th>
        <th>
          <abbr title="Drawn">Updated At</abbr>
        </th>
      </tr>
    </tfoot>
    <tbody>

      {
        secrets ?
          Object.keys(secrets).map((secretId) => {
            const secret = secrets[secretId];
            return (
              <tr key={uuid()}>
                <th>
                  <a href={`/secrets/${secret.ID}/details`} onClick={push}>
                    {secret.Spec.Name}
                  </a>
                </th>
                <td>
                  {secret.CreatedAt}
                </td>
                <td>
                  {secret.UpdatedAt}
                </td>
              </tr>
            );
          }) : <tr />
      }
    </tbody>
  </Table>
);

SecretTable.propTypes = {
  secrets: PropTypes.shape({}),
  push: PropTypes.func.isRequired,
};

SecretTable.defaultProps = {
  secrets: {},
};

export default SecretTable;
