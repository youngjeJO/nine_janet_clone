import styled from 'styled-components';

const LogoImg = styled.img`
  margin: 0px 30px 3px 0px;
`;

function Logo() {
  return (
    <>
      <LogoImg src='https://janet.co.kr/html_demo/img/common/logo.png' alt='logo' />
    </>
  );
}

export default Logo;
