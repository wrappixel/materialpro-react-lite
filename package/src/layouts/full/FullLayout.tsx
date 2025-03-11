import { FC } from 'react';
import { styled, Container, Box, useTheme } from '@mui/material';
import { Outlet } from 'react-router';
// import Header from './vertical/header/Header';
import Sidebar from './vertical/sidebar/Sidebar';
import Header from './vertical/header/Header';
import Topbar from './vertical/header/Topbar';
import Footer from './shared/footer/Footer';

const MainWrapper = styled('div')(() => ({}));

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  zIndex: 1,
  backgroundColor: 'transparent',
}));

const FullLayout: FC = () => {
  const theme = useTheme();

  return (
    <>

      {/* ------------------------------------------- */}
      {/* Topbar */}
      {/* ------------------------------------------- */}
      {/* <Topbar/> */}
      <MainWrapper>
        {/* ------------------------------------------- */}
        {/* Header */}
        {/* ------------------------------------------- */}
        <Topbar />
        {<Header />}
        {/* ------------------------------------------- */}
        {/* Sidebar */}
        {/* ------------------------------------------- */}
        <Sidebar />
        {/* ------------------------------------------- */}
        {/* Main Wrapper */}
        {/* ------------------------------------------- */}

        <PageWrapper
          className="page-wrapper"
          sx={{
            ...({
              [theme.breakpoints.up('lg')]: {
                ml: `256px`,
              },
            }),
            marginTop: "64px"
          }}
        >
          {/* PageContent */}
          <Container
            sx={{
              maxWidth: 'lg',
            }}
          >
            {/* ------------------------------------------- */}
            {/* PageContent */}
            {/* ------------------------------------------- */}

            <Box mt={4} sx={{ minHeight: 'calc(100vh - 260px)' }}>

              <Outlet />
            </Box>
            <Footer />
            {/* ------------------------------------------- */}
            {/* End Page */}
            {/* ------------------------------------------- */}
          </Container>
           
        </PageWrapper>
      </MainWrapper>
    </>
  );
};
export default FullLayout;
