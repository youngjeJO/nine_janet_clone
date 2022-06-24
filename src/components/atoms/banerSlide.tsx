import styled from 'styled-components';
import bannerData from '../data/bannerData.json';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import { useState } from 'react';

export interface ISlide {
  currentSlide: number;
  transition: string;
}

const MainContainer = styled.main`
  width: 1250px;
  display: flex;
  margin: auto;
`;

const SectionContainer = styled.section`
  display: flex;
  width: 1200px;
  overflow: hidden;
  margin: auto;
`;

const SlideWapper = styled.ul<ISlide>`
  transition: ${(props) => props.transition};
  transform: ${(props) => `translateX(-${props.currentSlide}00%)`};

  img {
    padding: 10px;
    width: 400px;
    cursor: pointer;
  }
`;

const Btn = styled.button`
  color: #9c57f5;
  background-color: rgba(0, 0, 0, 0);
`;

function BannerSlide() {
  const [currentSlide, setCurrentSlide] = useState(3);
  const [transition, setTransition] = useState('500ms');

  const slideChange = (targetIndex: number) => {
    setTransition('350ms');
    setCurrentSlide(targetIndex);
    setTimeout(() => {
      setTransition('0s');
      if (targetIndex < 1) {
        targetIndex = bannerData.length - 4;
      } else if (targetIndex === bannerData.length - 3) {
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

  let downPoint: Number;
  const mouseDown = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    downPoint = event.clientX;
  };

  const mouseUp = (event: React.MouseEvent<HTMLLIElement>) => {
    const upPoint = event.clientX;
    if (downPoint > upPoint) {
      const targetIndex = currentSlide + 1;
      slideChange(targetIndex);
    } else if (downPoint < upPoint) {
      const targetIndex = currentSlide - 1;
      slideChange(targetIndex);
    }
  };

  return (
    <MainContainer>
      <Btn onClick={prevSlide}>
        <MdArrowBackIos />
      </Btn>
      <SectionContainer>
        {bannerData.map((data) => (
          <SlideWapper transition={transition} currentSlide={currentSlide}>
            <li onMouseDown={mouseDown} onMouseUp={mouseUp}>
              <img src={data.img} alt={data.alt} />
            </li>
          </SlideWapper>
        ))}
      </SectionContainer>
      <Btn onClick={nextSlide}>
        <MdArrowForwardIos />
      </Btn>
    </MainContainer>
  );
}

export default BannerSlide;
