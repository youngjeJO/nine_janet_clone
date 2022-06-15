import styled from 'styled-components';
import AutoSlide from '../atoms/autoSlide';
import BannerSlide from '../atoms/banerSlide';
import ChartSlide from '../atoms/chartSlide';
import MainSlide from '../atoms/mainSlide';

const SectionContainer = styled.section`
  background-color: rgba(173, 207, 255, 0.25);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 480px;
`;

function SlideSection() {
  return (
    <>
      <SectionContainer>
        <AutoSlide />
        <MainSlide />
        <ChartSlide />
      </SectionContainer>
      <BannerSlide />
    </>
  );
}

export default SlideSection;
