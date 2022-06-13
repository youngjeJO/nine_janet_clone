import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';

const Wapper = styled.div`
  display: flex;
  align-items: center;
`;

const ListBtnBox = styled.button`
  padding: 10px;
  height: 45px;
  border-radius: 50px;
  box-shadow: 2px 2px 7px lightgray;
  font-size: 25px;
  color: #9c57f5;
  cursor: pointer;
`;

function ListBtn() {
  const [dropDown, setDropDown] = useState(false);

  const onClick = () => {
    setDropDown(!dropDown);
  };

  return (
    <Wapper>
      <ListBtnBox onClick={onClick}>
        <GiHamburgerMenu />
      </ListBtnBox>
    </Wapper>
  );
}

export default ListBtn;
