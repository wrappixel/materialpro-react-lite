
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';

const AuthRegister = ({ title, subtitle, subtext }:{title?:string , subtitle: any , subtext:any}) => (
    <>
        {title ? (
            <Typography
                variant="h2"
                sx={{
                    fontWeight: "700",
                    mb: 1
                }}>
                {title}
            </Typography>
        ) : null}

        {subtext}

        <Box>
            <Stack sx={{
                mb: 3
            }}>
                <Typography
                    variant="subtitle1"
                    component="label"
                    htmlFor='name'
                    sx={{
                        fontWeight: 500,
                        mb: "5px"
                    }}>Name</Typography>
                <CustomTextField id="name" variant="outlined" fullWidth />

                <Typography
                    variant="subtitle1"
                    component="label"
                    htmlFor='email'
                    sx={{
                        fontWeight: 500,
                        mb: "5px",
                        mt: "25px"
                    }}>Email Address</Typography>
                <CustomTextField id="email" variant="outlined" fullWidth />

                <Typography
                    variant="subtitle1"
                    component="label"
                    htmlFor='password'
                    sx={{
                        fontWeight: 500,
                        mb: "5px",
                        mt: "25px"
                    }}>Password</Typography>
                <CustomTextField id="password" variant="outlined" fullWidth />
            </Stack>
            <Button color="primary" variant="contained" size="large" fullWidth component={Link} to="/auth/login">
                Sign Up
            </Button>
        </Box>
        {subtitle}
    </>
);

export default AuthRegister;
