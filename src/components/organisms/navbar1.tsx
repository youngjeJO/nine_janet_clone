import styled from 'styled-components';
import Logo from '../atoms/logo';
import Search from '../atoms/search';
import LogInMenu from '../molecules/loginMenu';

const NavWapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  div {
    display: flex;
    align-items: center;
  }
`;

function NavBar1() {
  return (
    <NavWapper>
      <div>
        <Logo />
        <Search />
      </div>
      <LogInMenu />
    </NavWapper>
  );
}

export default NavBar1;
