
import { Link } from 'react-router';
import { Grid, Box, Card, Stack, Typography } from '@mui/material';


import AuthLogin from './auth/AuthLogin';
import AuthLogo from 'src/layouts/full/shared/logo/AuthLogo';


const Login2 = () => {

  return (
    <Box
      sx={{
        position: 'relative',
        '&:before': {
          content: '""',
          background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
          position: 'absolute',
          height: '100%',
          width: '100%',
          opacity: '0.3',
        },
      }}
    >
      <Grid
        container
        spacing={0}
        sx={{
          justifyContent: "center",
          height: '100vh'
        }}>
        <Grid
          size={{
            xs: 12,
            sm: 12,
            lg: 4,
            xl: 3
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
              <AuthLogo />
            </Box>
            <AuthLogin
              subtext={
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  sx={{
                    textAlign: "center",
                    mb: 1
                  }}>
                  Your Social Campaigns
                </Typography>
              }
              subtitle={
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    justifyContent: "center",
                    mt: 3
                  }}>
                  <Typography color="textSecondary" variant="h6" sx={{
                    fontWeight: "500"
                  }}>
                    New to MaterialPro?
                  </Typography>
                  <Typography
                    component={Link}
                    to="/auth/register"
                    sx={{
                      fontWeight: "500",
                      textDecoration: 'none',
                      color: 'primary.main'
                    }}>
                    Create an account
                  </Typography>
                </Stack>
              }
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login2;
