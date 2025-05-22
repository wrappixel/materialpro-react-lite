
import { Grid, Box, Card, Typography, Stack } from '@mui/material';
import { Link } from 'react-router';
import AuthRegister from './auth/AuthRegister';
import AuthLogo from 'src/layouts/full/shared/logo/AuthLogo';

const Register2 = () => (

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
    <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        size={{
          xs: 12,
          sm: 12,
          lg: 4,
          xl: 3
        }}>
        <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <AuthLogo />
          </Box>
          <AuthRegister
            subtext={
              <Typography variant="subtitle1" textAlign="center" color="textSecondary" mb={1}>
                Your Social Campaigns
              </Typography>
            }
            subtitle={
              <Stack direction="row" justifyContent="center" spacing={1} mt={3}>
                <Typography color="textSecondary" variant="h6" fontWeight="400">
                  Already have an Account?
                </Typography>
                <Typography
                  component={Link}
                  to="/auth/login"
                  fontWeight="500"
                  sx={{
                    textDecoration: 'none',
                    color: 'primary.main',
                  }}
                >
                  Sign In
                </Typography>
              </Stack>
            }
          />
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default Register2;
