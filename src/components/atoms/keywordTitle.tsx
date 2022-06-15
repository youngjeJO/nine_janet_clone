import styled from 'styled-components';

const Wapper = styled.h1`
  display: flex;
  align-items: center;
  margin: 10px 0 25px 0;
`;

const TitleBox = styled.div`
  font-size: 28px;
  font-weight: bold;
  span {
    color: #9c57f5;
  }
`;

function KeywordTitle() {
  return (
    <Wapper>
      <img src='https://janet.co.kr/img/common/main/m_main/hot_keyword.png' alt='HOT' />
      <TitleBox>
        <span>HOT</span>
        키워드 TOP20
      </TitleBox>
    </Wapper>
  );
}

export default KeywordTitle;
