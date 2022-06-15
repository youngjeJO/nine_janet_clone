import styled from 'styled-components';
import KeywordCard from '../atoms/keywordCard';
import KeywordTitle from '../atoms/keywordTitle';

const Wapper = styled.nav`
  margin: auto;
`;

function HotKeyword() {
  return (
    <Wapper>
      <KeywordTitle />
      <KeywordCard />
    </Wapper>
  );
}

export default HotKeyword;
