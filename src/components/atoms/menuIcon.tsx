import styled from 'styled-components';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiUserCircle, BiBuildings } from 'react-icons/bi';

interface IMenu {
  name: string;
}

const IconContainer = styled.div`
  margin: 10px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  color: #919191;
  span {
    margin-top: 5px;
    width: 60px;
    font-size: 12px;
    text-align: center;
  }
  :hover {
    color: #9c57f5;
  }
`;

function MenuIcon(props: IMenu) {
  return (
    <>
      {props.name === '회원가입' ? (
        <IconContainer>
          <AiOutlineUserAdd />
          <span>{props.name}</span>
        </IconContainer>
      ) : null}
      {props.name === '로그인' ? (
        <IconContainer>
          <BiUserCircle />
          <span>{props.name}</span>
        </IconContainer>
      ) : null}
      {props.name === '기업서비스' ? (
        <IconContainer>
          <BiBuildings />
          <span>{props.name}</span>
        </IconContainer>
      ) : null}
    </>
  );
}

export default MenuIcon;
