import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageContainer = ({ children, error }) => {
  if (error) {
    return (
      <ImageContainerBlock>
        <div className="error">{error}</div>
      </ImageContainerBlock>
    );
  }

  return <ImageContainerBlock>{children}</ImageContainerBlock>;
};

ImageContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  error: PropTypes.string,
};

ImageContainer.defaultProps = {
  children: [],
  error: '',
};

const ImageContainerBlock = styled.div`
  columns: 3;
  overflow: hidden;

  > .error {
    width: 100%;
    height: 100%;
    text-align: center;
    color: red;
  }

  @media screen and (max-width: 1280px) {
    & {
      columns: 2;
    }
  }
`;

export default ImageContainer;
