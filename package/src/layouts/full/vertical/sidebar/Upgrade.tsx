
import { Box, Typography, Button } from '@mui/material';
import img1 from 'src/assets/images/backgrounds/rocket.png';

export const Upgrade = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: "center",
                gap: 2,
                my: 3,
                p: 3,
                bgcolor: `${'primary.light'}`,
                borderRadius: '8px'
            }}>
            <>
                <Box>
                    <Typography variant="h6" sx={{
                        mb: 1
                    }}>Check Pro
                    Version</Typography>
                    <Button color="primary" target="_blank" href="https://wrappixel.com/templates/materialpro-react-redux-admin/?ref=376#demos" variant="contained" aria-label="logout" size="small">
                        Check
                    </Button>
                </Box>
                <Box sx={{marginTop:"-35px",marginRight: "-30px"}}>
                    <img alt="Remy Sharp" src={img1} width={100} />
                </Box>
            </>
        </Box>
    );
};
