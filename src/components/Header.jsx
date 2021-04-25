import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderBlock>
      <h1>INFINITE DOGS</h1>
      <h2>Powered by Unsplash API</h2>
      <h3>This website only makes API requests when it is first loaded</h3>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.hgroup`
  text-align: center;
  padding: 0 0 10px;
  letter-spacing: 5px;
  border-bottom: 3px dotted #000;

  > h1,
  > h2 {
    margin: 5px 0;
  }

  > h1 {
    letter-spacing: 13.5px;
    padding-left: 13.5px;
  }

  > h2 {
    font-size: 1.2rem;
    letter-spacing: 6.4px;
    padding-left: 6.4px;
    color: rgb(126, 126, 126);
  }

  @media screen and (max-width: 1280px) {
    > h1 {
      font-size: 1.5rem;
      letter-spacing: 8px;
      padding-left: 8px;
    }
    > h2 {
      font-size: 1rem;
      letter-spacing: 3.5px;
      padding-left: 3.5px;
    }
  }
`;

export default Header;
