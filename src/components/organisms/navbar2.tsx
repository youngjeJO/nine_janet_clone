import { useState } from 'react';
import styled from 'styled-components';
import DropDownMenu from '../atoms/dropDownMenu';
import ListBtn from '../atoms/listBtn';
import ComuMenu from '../molecules/comuMenu';
import InforMenu from '../molecules/infoMenu';

const Wapper = styled.nav`
  margin: auto;
`;
const NavWapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 1250px;
  div {
    display: flex;
  }
`;
const DropDown = styled.div<{ dropDown: boolean }>`
  height: ${(props) => (props.dropDown ? '500px' : '0')};
  transition: 600ms;
  position: absolute;
  left: 0;
  z-index: 999;
  overflow: hidden;
  background-color: white;
  width: 100vw;
`;

function Navbar2() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <Wapper>
      <NavWapper>
        <div>
          <ListBtn dropDown={dropDown} setDropDown={setDropDown} />
          <InforMenu />
        </div>
        <ComuMenu />
      </NavWapper>
      <DropDown dropDown={dropDown}>
        <DropDownMenu />
      </DropDown>
    </Wapper>
  );
}

export default Navbar2;
