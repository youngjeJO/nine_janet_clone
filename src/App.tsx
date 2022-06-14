import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AutoSlide from './components/atoms/autoSlide';
import BannerSlide from './components/atoms/banerSlide';
import ChartSlide from './components/atoms/chartSlide';
import MainSlide from './components/atoms/mainSlide';
import NavBar1 from './components/organisms/navbar1';
import Navbar2 from './components/organisms/navbar2';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Source+Sans+Pro:wght@200;400&display=swap');
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  font-family: 'Source Sans Pro', sans-serif;


}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
  text-decoration: none;
  color: inherit;

}
*{
  box-sizing: border-box;
}
button {
  background-color: white;
  border: none;
}
`;

const MainWapper = styled.div`
  width: 1250px;
  margin: auto;
`;
function App() {
  return (
    <MainWapper>
      <GlobalStyle />
      <NavBar1 />
      <Navbar2 />
      {/* <AutoSlide />
      <MainSlide />
      <ChartSlide /> */}
      <BannerSlide />
    </MainWapper>
  );
}

export default App;
