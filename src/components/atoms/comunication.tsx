import styled from 'styled-components';

interface IMenu {
  name: string;
}

const Acad = styled.div`
  width: 100px;
  height: 50px;
  background: url('https://janet.co.kr/_nuxt/img/aca.0645f51.png') no-repeat center;
`;

const Comu = styled.div`
  width: 100px;
  height: 50px;
  background: url('https://janet.co.kr/img/common/header/commu.png') no-repeat center;
`;

const Ai = styled.div`
  width: 100px;
  height: 50px;
  background: url('https://janet.co.kr/img/common/header/ai.png') no-repeat center 22px;
  :hover {
    ::after {
      content: '추천테스트';
      height: 15px;
      line-height: 15px;
      padding: 3px;
      font-size: 14px;
      font-weight: bold;
      position: relative;
      background-color: #9c57f5;
      color: white;
      border-radius: 10px;
      left: 25px;
    }
  }
`;

function Comunication(props: IMenu) {
  return (
    <>
      {props.name === '우리동네' ? <Acad></Acad> : null}
      {props.name === '커뮤니티' ? <Comu></Comu> : null}
      {props.name === '자격증' ? <Ai></Ai> : null}
    </>
  );
}

export default Comunication;
