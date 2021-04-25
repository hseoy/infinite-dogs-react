import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import loaderImage from 'assets/loader.svg';

const Loader = ({ visible }) => {
  return (
    <LoaderBlock $visible={visible}>
      <img src={loaderImage} alt="Loading" />
    </LoaderBlock>
  );
};

Loader.propTypes = {
  visible: PropTypes.bool,
};

Loader.defaultProps = {
  visible: false,
};

const LoaderBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.6);
  display: ${props => (props.$visible ? 'block' : 'none')};

  > img {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default Loader;
