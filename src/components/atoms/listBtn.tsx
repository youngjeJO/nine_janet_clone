import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';

interface Idrop {
  dropDown: boolean;
  setDropDown: (dropDown: boolean) => void;
}

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

function ListBtn(props: Idrop) {
  const showList = () => {
    props.setDropDown(!props.dropDown);
  };

  return (
    <Wapper>
      <ListBtnBox onClick={showList}>
        <GiHamburgerMenu />
      </ListBtnBox>
    </Wapper>
  );
}

export default ListBtn;
