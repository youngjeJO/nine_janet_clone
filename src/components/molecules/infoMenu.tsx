import styled from 'styled-components';
import Information from '../atoms/infomation';
import ListBtn from '../atoms/listBtn';

const MenuWapper = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-around;
`;

function InforMenu() {
  return (
    <MenuWapper>
      <ListBtn />
      <Information name='Top100' />
      <Information name='자격증정보' />
      <Information name='어학/공무원' />
      <Information name='자넷info' />
      <Information name='자넷톡' />
    </MenuWapper>
  );
}

export default InforMenu;
