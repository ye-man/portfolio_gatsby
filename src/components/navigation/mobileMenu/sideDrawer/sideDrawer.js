import React from 'react';
import styled from 'styled-components';

import NavItems from '../../navItems/navItems';
import DarkModeToggle from '../../../UI/darkModeToggle/darkModeToggle';
import useLockBodyScroll from '../../../../utils/useLockScroll';

const BackgroundWrapper = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  background: var(--background);
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  transition: background 0.2s ease-out;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 6rem;
  padding: 2rem 1rem;
`;

const SideDrawer = ({ setMenuOpened }) => {
  useLockBodyScroll();
  return (
    <BackgroundWrapper>
      <Wrapper>
        <NavItems mobile clicked={() => setMenuOpened(false)} />
        <DarkModeToggle mobile />
      </Wrapper>
    </BackgroundWrapper>
  );
};

export default SideDrawer;