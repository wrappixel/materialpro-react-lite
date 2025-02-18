import { FC } from 'react';
import { styled, Container, Box, useTheme } from '@mui/material';
import { Outlet } from 'react-router';
// import Header from './vertical/header/Header';
import Sidebar from './vertical/sidebar/Sidebar';
import ScrollToTop from '../../components/shared/ScrollToTop';
import LoadingBar from 'src/LoadingBar';
import Header from './vertical/header/Header';

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
      <LoadingBar />
      <MainWrapper>
        {/* ------------------------------------------- */}
        {/* Header */}
        {/* ------------------------------------------- */}
        { <Header />}
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
            ...( {
              [theme.breakpoints.up('lg')]: {
                ml: `256px`,
              },
            }),
          }}
        >
          {/* PageContent */}
          <Container
            sx={{
              maxWidth: 'lg' ,
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
