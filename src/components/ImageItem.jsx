import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageItem = ({ photo, onLoad }) => {
  const onLoadHandler = e => {
    if (onLoad) {
      onLoad(e);
    }
  };

  return (
    <ImageItemBlock>
      <a href={photo.links.html} target="_blank" rel="noopener noreferrer">
        <img
          src={photo.urls.regular}
          alt={photo.alt_description}
          title={photo.alt_description}
          onLoad={onLoadHandler}
        />
      </a>
    </ImageItemBlock>
  );
};

ImageItem.propTypes = {
  photo: PropTypes.shape({
    links: PropTypes.shape({ html: PropTypes.string.isRequired }),
    urls: PropTypes.shape({ regular: PropTypes.string.isRequired }),
    alt_description: PropTypes.string,
  }).isRequired,
  onLoad: PropTypes.func,
};

ImageItem.defaultProps = {
  onLoad: null,
};

const ImageItemBlock = styled.div`
  display: inline-block;

  > a {
    box-sizing: border-box;
    display: inline-flex;
    width: 100%;
    height: 100%;
    position: relative;
    margin: 5px;

    > img {
      width: 100%;
      transition: 0.8s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export default ImageItem;
