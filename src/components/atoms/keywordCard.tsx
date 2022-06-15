import styled from 'styled-components';
import top20 from '../data/top20.json';

const Wapper = styled.section`
  width: 1250px;
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  gap: 15px;
`;

const CardContainer = styled.div`
  border: solid 1px #e5e5e5;
  border-radius: 10px;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  position: relative;
  ::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(50, 20, 0, 0.6);
  }
  :hover {
    ::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
    }
  }
  h3 {
    width: 100%;
    position: absolute;
    padding: 0 30px;
    bottom: 0;
    font-size: 19px;
    font-weight: bold;
    color: #fff;
    line-height: 60px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 100%);
  }
  h5 {
    position: absolute;
    right: 20px;
    top: 20px;
    color: #fff;
    background: #9c57f5;
    border-radius: 10px;
    width: 44px;
    line-height: 19px;
    text-align: center;
    font-size: 12px;
  }
`;

const ConstentsContainer = styled.div`
  margin: 30px;
  p {
    font-size: 14px;
    color: #6e6e6e;
  }
  span {
    font-size: 12px;
    color: #f15959;
  }
`;

function KeywordCard() {
  const dDay = (date: string) => {
    const esRegdt = new Date(date).getTime();
    const nowDate = new Date().getTime();
    const getDDay = Math.floor((esRegdt - nowDate) / (1000 * 60 * 60 * 24));
    return getDDay;
  };

  return (
    <Wapper>
      {top20.map((topKeword) => (
        <CardContainer>
          <ImgContainer>
            <img src={topKeword.img} alt={topKeword.title} />
            <h3>{topKeword.title}</h3>
            <h5>D-{dDay(topKeword.esRegdt)}</h5>
          </ImgContainer>
          <ConstentsContainer>
            <p>시행기관 : {topKeword.licenseOrgan}</p>
            <span>시험일 : {topKeword.esRegdt.substring(0, 10)}</span>
          </ConstentsContainer>
        </CardContainer>
      ))}
    </Wapper>
  );
}

export default KeywordCard;
