import { useState } from 'react';
import styled from 'styled-components';
import DropDownMenu from '../atoms/dropDownMenu';
import ListBtn from '../atoms/listBtn';
import ComuMenu from '../molecules/comuMenu';
import InforMenu from '../molecules/infoMenu';

const NavWapper = styled.nav`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
  }
`;
const DropDown = styled.div<{ dropDown: boolean }>`
  height: ${(props) => (props.dropDown ? '500px' : '0')};
  transition: 600ms;
  overflow: hidden;
`;

function Navbar2() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
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
    </>
  );
}

export default Navbar2;
