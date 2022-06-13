import styled from 'styled-components';

const MenuWapper = styled.ul`
  display: flex;
  width: 100%;

  p {
    padding-bottom: 10px;
    font-weight: bold;
    font-size: 14px;
    :hover {
      color: #9c57f5;
    }
  }
`;

const ListBox = styled.ul`
  width: 200px;
  padding: 30px;
  border: solid 1px #efefef;
  ul {
    padding-bottom: 20px;
  }
  li {
    padding: 10px 10px 10px 0;
    font-size: 13px;
    :hover {
      color: #9c57f5;
    }
  }
`;

function DropDownMenu() {
  return (
    <MenuWapper>
      <ListBox>
        <p>자격증 정보</p>
        <li>직무별 자격증</li>
        <li>계열별정보</li>
        <li>국제자격증</li>
        <li>자격증일정</li>
        <li>시험접수안내</li>
        <li>학점은행제</li>
        <li>과정평가형 자격</li>
        <li>직업정보검색</li>
        <li>직업사전</li>
        <li>국가자격대여 근절캠패인</li>
      </ListBox>
      <ListBox>
        <p>어학/공무원</p>
        <li>어학</li>
        <li>어학 원서접수 안내</li>
        <li>공무원</li>
        <li>공무원 원서접수 안내</li>
      </ListBox>
      <ListBox>
        <p>자넷info</p>
        <li>자넷뉴스</li>
        <li>자넷매거진</li>
        <li>큐넷 이용안내</li>
        <li>청년지원정책</li>
        <li>자격증 공모전</li>
        <li>국가혜택정보</li>
        <li>대학별 자격특전</li>
      </ListBox>
      <ListBox>
        <ul>
          <p>자넷톡</p>
          <li>자격증 토론방</li>
          <li>일반 토론방</li>
          <li>FAQ</li>
          <li>자넷TV</li>
        </ul>
        <ul>
          <p>우리동네학원</p>
          <li>맞춤학원검색</li>
          <li>학원 찾아드림</li>
          <li>우리동네학원 info</li>
        </ul>
      </ListBox>
      <ListBox>
        <p>자넷추천</p>
        <li>추천테스트</li>
        <li>추천AI</li>
        <li>커뮤니티</li>
      </ListBox>
      <ListBox>
        <p>MY PAGE</p>
        <li>나의 자격증</li>
        <li>자넷톡</li>
        <li>즐겨찾기</li>
        <li>나의정보수정</li>
        <li>자격증정보수정</li>
      </ListBox>
    </MenuWapper>
  );
}

export default DropDownMenu;
