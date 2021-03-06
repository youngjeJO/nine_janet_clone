import { useState } from 'react';
import styled from 'styled-components';

interface ISlide {
  currentSlide: number;
  transition: string;
}

const SlideContainer = styled.ul`
  display: flex;
  flex-direction: row;
  width: 420px;
  overflow: hidden;
`;

const SlideBox = styled.li<ISlide>`
  transition: ${(props) => props.transition};
  transform: ${(props) => `translateX(-${props.currentSlide}00% )`};
  img {
    width: 420px;
  }
`;

function AutoSlide() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [transition, setTransition] = useState('');
  const slideImg = [
    'https://janet.co.kr/img/common/main/banner/mainBn_top_04.png',
    'https://janet.co.kr/img/common/main/banner/mainBn_top_01.png',
    'https://janet.co.kr/img/common/main/banner/mainBn_top_02.png',
    'https://janet.co.kr/img/common/main/banner/mainBn_top_03.png',
    'https://janet.co.kr/img/common/main/banner/mainBn_top_04.png',
    'https://janet.co.kr/img/common/main/banner/mainBn_top_01.png',
  ];
  setTimeout(
    () => {
      setTransition('350ms');
      if (currentSlide === 5) {
        setTransition('0s');
        setCurrentSlide(1);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    },
    currentSlide === 5 ? 300 : 3000
  );

  return (
    <SlideContainer>
      {slideImg.map((data, key) => (
        <SlideBox currentSlide={currentSlide} transition={transition}>
          <img src={data} alt={`${key}img`} />
        </SlideBox>
      ))}
    </SlideContainer>
  );
}

export default AutoSlide;
