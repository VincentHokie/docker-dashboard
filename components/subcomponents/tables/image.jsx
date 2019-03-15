import React from 'react';
import Table from 'react-bulma-components/lib/components/table';
import PropTypes from 'prop-types';

const ImageTable = ({ images, push }) => (
  <Table>
    <thead>
      <tr>
        <th>
          <abbr title="Position">Tag</abbr>
        </th>
        <th>
          <abbr title="Played">Container #</abbr>
        </th>
        <th>
          <abbr title="Drawn">Shared Size</abbr>
        </th>
        <th>
          <abbr title="Drawn">Size</abbr>
        </th>
        <th>
          <abbr title="Won">Created At</abbr>
        </th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>
          <abbr title="Position">Tag</abbr>
        </th>
        <th>
          <abbr title="Played">Container #</abbr>
        </th>
        <th>
          <abbr title="Drawn">Shared Size</abbr>
        </th>
        <th>
          <abbr title="Drawn">Size</abbr>
        </th>
        <th>
          <abbr title="Won">Created At</abbr>
        </th>
      </tr>
    </tfoot>
    <tbody>

      {
        images ?
          Object.keys(images).map((imageName) => {
            const image = images[imageName];
            return (
              <tr key={imageName}>
                <th>
                  <a href={`/images/${image.RepoTags[0]}/details`} onClick={push}>
                    {image.RepoTags[0]}
                  </a>
                </th>
                <td>
                  {image.Containers}
                </td>
                <td>
                  {image.SharedSize}
                </td>
                <td>
                  {image.Size}
                </td>
                <td>
                  {image.Created}
                </td>
              </tr>
            );
          }) : ''
      }
    </tbody>
  </Table>
);

ImageTable.propTypes = {
  images: PropTypes.shape({}).isRequired,
  push: PropTypes.func.isRequired,
};

export default ImageTable;
