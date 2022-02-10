import styled from 'styled-components'


export const screenSize = {
  breakpoints: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  },
}

export const device = {
  mobileS: `(min-width: ${screenSize.breakpoints.mobileS})`,
  mobileM: `(min-width: ${screenSize.breakpoints.mobileM})`,
  mobileL: `(min-width: ${screenSize.breakpoints.mobileL})`,
  tablet: `(min-width: ${screenSize.breakpoints.tablet})`,
  laptop: `(min-width: ${screenSize.breakpoints.laptop})`,
  laptopL: `(min-width: ${screenSize.breakpoints.laptopL})`,
  desktop: `(min-width: ${screenSize.breakpoints.desktop})`,
  desktopL: `(min-width: ${screenSize.breakpoints.desktop})`
};

export const Screen = styled.div`
  margin: auto;
  font-family: "sans-serif";

  @media ${device.laptop} { 
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-flow: column;
`
const MainTheme = {
  screen :{
    screenSize,
    device,
  }
}
export default MainTheme;