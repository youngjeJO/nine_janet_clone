import MenuIcon from '../atoms/menuIcon';
import styled from 'styled-components';

const MenuWapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
`;

function LogInMenu() {
  return (
    <MenuWapper>
      <MenuIcon name='회원가입' />
      <MenuIcon name='로그인' />
      <MenuIcon name='기업서비스' />
    </MenuWapper>
  );
}

export default LogInMenu;
