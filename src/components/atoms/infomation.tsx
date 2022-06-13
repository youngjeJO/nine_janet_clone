import styled from 'styled-components';

interface IMenu {
  name: string;
}

const InfoBox = styled.div<IMenu>`
  width: 100px;
  height: 65px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  :hover {
    color: ${(props) => {
      if (props.name === '자넷info') {
        return 'rgba(0, 0, 0, 0)';
      } else if (props.name === '자넷톡') {
        return 'rgba(0, 0, 0, 0)';
      } else {
        return '#9c57f5';
      }
    }};
    background: ${(props) => {
      if (props.name === '자넷info') {
        return "url('https://janet.co.kr/img/common/gnbInfo.png') no-repeat center 18px";
      } else if (props.name === '자넷톡') {
        return "url('https://janet.co.kr/img/common/gnbTalk.png') no-repeat center 18px";
      }
    }};
  }
`;

function Information(props: IMenu) {
  return <InfoBox name={props.name}>{props.name}</InfoBox>;
}

export default Information;
