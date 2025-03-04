import { FC } from 'react';
import { styled, Container, Box, useTheme } from '@mui/material';
import { Outlet } from 'react-router';
// import Header from './vertical/header/Header';
import Sidebar from './vertical/sidebar/Sidebar';
import ScrollToTop from '../../components/shared/ScrollToTop';
import Header from './vertical/header/Header';
import Topbar from './vertical/header/Topbar';

const MainWrapper = styled('div')(() => ({}));

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexGrow: 1,
  paddingBottom: '60px',
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

            <Box sx={{ minHeight: 'calc(100vh - 170px)' }}>
              <ScrollToTop>
                <Outlet />
              </ScrollToTop>
            </Box>

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
