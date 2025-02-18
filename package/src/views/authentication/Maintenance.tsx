import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from 'react-router';
import MaintenanceImg from 'src/assets/images/backgrounds/maintenance.svg';

const Maintenance = () => (
  <Box
    display="flex"
    flexDirection="column"
    height="100vh"
    textAlign="center"
    justifyContent="center"
  >
    <Container maxWidth="md">
      <img
        src={MaintenanceImg}
        alt="404" width={500} height={500}
        style={{ width: "100%", maxWidth: "500px", maxHeight: "500px" }}
      />
      <Typography align="center" variant="h1" mb={4}>
        Maintenance Mode!!!
      </Typography>
      <Typography align="center" variant="h4" mb={4}>
        Website is Under Construction. Check back later!
      </Typography>
      <Button
        color="primary"
        variant="contained"
        component={Link}
        to="/"
        disableElevation
      >
        Go Back to Home
      </Button>
    </Container>
  </Box>
);


export default Maintenance;
