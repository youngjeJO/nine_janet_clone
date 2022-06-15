import styled from 'styled-components';
import AutoSlide from '../atoms/autoSlide';
import BannerSlide from '../atoms/banerSlide';
import ChartSlide from '../atoms/chartSlide';
import MainSlide from '../atoms/mainSlide';

const Bgcontainer = styled.div`
  background-color: rgba(173, 207, 255, 0.25);
  width: 100vw;
`;
const SectionContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1250px;
  height: 480px;
  margin: auto;
`;

function SlideSection() {
  return (
    <>
      <Bgcontainer>
        <SectionContainer>
          <AutoSlide />
          <MainSlide />
          <ChartSlide />
        </SectionContainer>
      </Bgcontainer>
      <BannerSlide />
    </>
  );
}

export default SlideSection;
