import styled from 'styled-components';
import Information from '../atoms/infomation';

const MenuWapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-around;
`;

function InforMenu() {
  return (
    <MenuWapper>
      <Information name='Top100' />
      <Information name='자격증정보' />
      <Information name='어학/공무원' />
      <Information name='자넷info' />
      <Information name='자넷톡' />
    </MenuWapper>
  );
}

export default InforMenu;
