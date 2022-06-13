import styled from 'styled-components';
import Comunication from '../atoms/comunication';

const MenuWapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function ComuMenu() {
  return (
    <MenuWapper>
      <Comunication name='우리동네' />
      <Comunication name='커뮤니티' />
      <Comunication name='자격증' />
    </MenuWapper>
  );
}

export default ComuMenu;
