import React from 'react';
import Table from 'react-bulma-components/lib/components/table';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const ImageTable = ({ images, push, searchString }) => (
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
            const regexStrings = searchString.trim().split(' ').join('|').trim('|');
            const regex = new RegExp(regexStrings, 'i');
            return (
              regex.test(imageName) || (!searchString || searchString.length === 0) ?
                <tr key={uuid()}>
                  <th>
                    <a href={`/images/${imageName}/details`} onClick={push}>
                      {imageName}
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
                </tr> : null
            );
          }) : <tr />
      }
    </tbody>
  </Table>
);

ImageTable.propTypes = {
  images: PropTypes.shape({}),
  push: PropTypes.func.isRequired,
  searchString: PropTypes.string,
};

ImageTable.defaultProps = {
  images: {},
  searchString: '',
};

export default ImageTable;
