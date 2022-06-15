import styled from 'styled-components';
import Logo from '../atoms/logo';
import Search from '../atoms/search';
import LogInMenu from '../molecules/loginMenu';

const Wapper = styled.nav`
  margin: auto;
`;
const NavWapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1250px;
  div {
    display: flex;
    align-items: center;
  }
`;

function NavBar1() {
  return (
    <Wapper>
      <NavWapper>
        <div>
          <Logo />
          <Search />
        </div>
        <LogInMenu />
      </NavWapper>
    </Wapper>
  );
}

export default NavBar1;
