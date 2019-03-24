import React from 'react';
import Table from 'react-bulma-components/lib/components/table';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const SecretTable = ({ secrets, push, searchString }) => (
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
            const regexStrings = searchString.trim().split(' ').join('|').trim('|');
            const regex = new RegExp(regexStrings, 'i');

            return (
              regex.test(secretId) || (!searchString || searchString.length === 0) ?
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
                </tr> : null
            );
          }) : <tr />
      }
    </tbody>
  </Table>
);

SecretTable.propTypes = {
  secrets: PropTypes.shape({}),
  push: PropTypes.func.isRequired,
  searchString: PropTypes.string,
};

SecretTable.defaultProps = {
  secrets: {},
  searchString: '',
};

export default SecretTable;
