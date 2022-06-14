import { useState } from 'react';
import styled from 'styled-components';
import data from '../data/slideImg.json';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

interface ISlide {
  currentSlide: number;
  transition: string;
}

const Wapper = styled.main`
  width: 550px;
  margin-left: 10px;
  padding: 40px 30px 35px;
  position: relative;
`;

const MainContainer = styled.div`
  width: 460px;
  overflow: hidden;
  display: flex;
`;

const ButtonBox = styled.div`
  position: absolute;
  right: 50px;
  top: 50px;
  z-index: 1;
  button {
    color: #9c57f5;
  }
`;

const SlideWapper = styled.div<ISlide>`
  width: 490px;
  padding: 10px 20px;
  transition: ${(props) => props.transition};
  transform: ${(props) => `translateX(-${props.currentSlide}00%)`};
  h1 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  ul {
    display: grid;
    width: 460px;

    grid-template-columns: 230px 230px;
  }
`;

const ContentsBox = styled.li`
  display: flex;
  padding: 10px 20px;
  img {
    margin-right: 25px;
    width: 72px;
    height: 58px;
  }
  span {
    display: block;
    font-size: 12px;
    :first-child {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
`;

const Banner = styled.img`
  display: block;
  margin: auto;
`;

function MainSlide() {
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
        targetIndex = data.length - 2;
      } else if (targetIndex === data.length - 1) {
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
    <Wapper>
      <MainContainer>
        <ButtonBox>
          <button onClick={prevSlide}>
            <MdArrowBackIos />
          </button>
          <button onClick={nextSlide}>
            <MdArrowForwardIos />
          </button>
        </ButtonBox>
        {data.map((info) => (
          <SlideWapper transition={transition} currentSlide={currentSlide}>
            <h1>{info.name}</h1>
            <ul>
              {info.contents.map((contents, key) => (
                <ContentsBox>
                  <img src={contents.icon} alt={info.name + key} />
                  <div>
                    <span>{contents.title}</span>
                    <span>{contents.contents}</span>
                  </div>
                </ContentsBox>
              ))}
            </ul>
          </SlideWapper>
        ))}
      </MainContainer>
      <Banner
        src='https://janet.co.kr/data/ebslider/eb4_basic/img/d0942d969f0a37cb73a46db345ea874b.png'
        alt='Banner'
      />
    </Wapper>
  );
}

export default MainSlide;
