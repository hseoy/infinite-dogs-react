import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';

const PageTemplate = ({ children }) => {
  return (
    <PageTemplateBlock>
      <Header />
      {children}
    </PageTemplateBlock>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

PageTemplate.defaultProps = {
  children: null,
};

const PageTemplateBlock = styled.div`
  margin: 30px 30%;
  @media screen and (max-width: 1680px) {
    & {
      margin: 30px 25%;
    }
  }
  @media screen and (max-width: 1280px) {
    & {
      margin: 30px 20%;
    }
  }
  @media screen and (max-width: 700px) {
    & {
      margin: 30px 10px;
    }
  }
`;

export default PageTemplate;
