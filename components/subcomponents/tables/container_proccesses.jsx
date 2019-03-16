import React from 'react';
import Table from 'react-bulma-components/lib/components/table';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';


const renderHeading = tableColumns => (
  tableColumns ?
    tableColumns.map(tableColumn => (
      <td key={uuid()}>
        {tableColumn}
      </td>
    )) : <td />
);

const renderCells = tableRecords => (
  tableRecords ?
    tableRecords.map(tableRecord => (
      <td key={uuid()}>
        {tableRecord}
      </td>
    )) : <td />
);

const ContainerProcessTable = ({ processes }) => (
  <Table>
    <thead>
      <tr>
        {renderHeading(processes.Titles)}
      </tr>
    </thead>
    <tfoot>
      <tr>
        {renderHeading(processes.Titles)}
      </tr>
    </tfoot>
    <tbody>
      {
        processes.Processes ?
          processes.Processes.map(process => (
            <tr key={uuid()}>
              {renderCells(process)}
            </tr>
          )) : <tr />
      }
    </tbody>
  </Table>
);

ContainerProcessTable.propTypes = {
  processes: PropTypes.shape({}),
};

ContainerProcessTable.defaultProps = {
  processes: {},
};

export default ContainerProcessTable;
