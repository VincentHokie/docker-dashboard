import React from 'react';
import Table from 'react-bulma-components/lib/components/table';
import PropTypes from 'prop-types';

const ServiceTable = ({ services, push }) => (
  <Table>
    <thead>
      <tr>
        <th>
          <abbr title="Position">Name</abbr>
        </th>
        <th>
          <abbr title="Played">Image</abbr>
        </th>
        <th>
          <abbr title="Played">Replicas</abbr>
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
          <abbr title="Played">Image</abbr>
        </th>
        <th>
          <abbr title="Played">Replicas</abbr>
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
        services ?
          Object.keys(services).map((serviceName) => {
            const service = services[serviceName];
            return (
              <tr key={serviceName}>
                <th>
                  <a href={`/services/${serviceName}/details`} onClick={push}>
                    {serviceName}
                  </a>
                </th>
                <td>
                  {service.Spec.ContainerSpec.Image}
                </td>
                <td>
                  {service.Spec.Mode.Replicated.Replicas}
                </td>
                <td>
                  {service.CreatedAt}
                </td>
                <td>
                  {service.UpdatedAt}
                </td>
              </tr>
            );
          }) : ''
      }
    </tbody>
  </Table>
);

ServiceTable.propTypes = {
  services: PropTypes.shape({}).isRequired,
  push: PropTypes.func.isRequired,
};

module.exports = ServiceTable;
