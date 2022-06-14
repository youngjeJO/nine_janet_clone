import { useState } from 'react';
import styled from 'styled-components';
import chartData from '../data/chartData.json';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

interface ISlide {
  currentSlide: number;
  transition: string;
}

const MainContainer = styled.div`
  width: 260px;
  height: 370px;
  margin-left: 10px;
  overflow: hidden;
  display: flex;
  position: relative;
  background-color: white;
`;

const SlideWapper = styled.div<ISlide>`
  padding: 40px 30px 35px;
  transition: ${(props) => props.transition};
  transform: ${(props) => `translateX(-${props.currentSlide}00%)`};
  h1 {
    padding-top: 10px;
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  ul {
    width: 200px;
  }
`;

const ButtonBox = styled.div`
  position: absolute;
  right: 0;
  top: 50px;
  z-index: 1;
  button {
    color: #9c57f5;
    background-color: rgba(0, 0, 0, 0);
  }
`;

const ContentsBox = styled.li`
  padding: 3px;
  img {
    margin-right: 25px;
    width: 72px;
    height: 58px;
  }
  span {
    font-size: 12px;
    :first-child {
      font-size: 14px;
      font-weight: bold;
      margin-right: 10px;
      color: #bababa;
    }
    :nth-child(2) {
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

function ChartSlide() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [transition, setTransition] = useState('500ms');
  let timer: NodeJS.Timeout;

  const slideChange = (targetIndex: number) => {
    setTransition('350ms');
    setCurrentSlide(targetIndex);
    clearTimeout(timer);
    timer = setTimeout(() => {
      setTransition('0s');
      if (targetIndex < 1) {
        targetIndex = chartData.length - 2;
      } else if (targetIndex === chartData.length - 1) {
        targetIndex = 1;
      } else {
        return;
      }
      setCurrentSlide(targetIndex);
    }, 300);
  };

  const nextSlide = () => {
    const targetIndex = currentSlide + 1;
    slideChange(targetIndex);
  };

  const prevSlide = () => {
    const targetIndex = currentSlide - 1;
    slideChange(targetIndex);
  };

  return (
    <MainContainer>
      <ButtonBox>
        <button onClick={prevSlide}>
          <MdArrowBackIos />
        </button>
        <button onClick={nextSlide}>
          <MdArrowForwardIos />
        </button>
      </ButtonBox>
      {chartData.map((data) => (
        <SlideWapper transition={transition} currentSlide={currentSlide}>
          <h1>{data.title}</h1>
          <ul>
            {data.contents.map((chart) => (
              <ContentsBox>
                <span>{chart.rank}</span>
                <span>{chart.name}</span>
              </ContentsBox>
            ))}
          </ul>
        </SlideWapper>
      ))}
    </MainContainer>
  );
}

export default ChartSlide;
