import styled from 'styled-components'


const screenSize = {
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

const device = {
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

  @media ${device.laptop} { 
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
  .mt-s{
    margin-top: 12px;
  }
  .mt-m{
    margin-top: 16px;
  }
  .mt-l{
    margin-top: 24px;
  }
  .mb-s{
    margin-bottom: 12px;
  }
  .mb-m{
    margin-bottom: 16px;
  }
  .mb-l{
    margin-bottom: 24px;
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