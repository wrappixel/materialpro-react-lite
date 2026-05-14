
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Button,
    Stack,
    Checkbox
} from '@mui/material';
import { Link } from 'react-router';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

const AuthLogin = ({ title, subtitle, subtext }:{title?:string , subtitle:any , subtext:any}) => (
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

        <Stack>
            <Box>
                <Typography
                    variant="subtitle1"
                    component="label"
                    htmlFor='username'
                    sx={{
                        fontWeight: 500,
                        mb: "5px"
                    }}>Username</Typography>
                <CustomTextField id="username" variant="outlined" fullWidth />
            </Box>
            <Box sx={{
                mt: "25px"
            }}>
                <Typography
                    variant="subtitle1"
                    component="label"
                    htmlFor='password'
                    sx={{
                        fontWeight: 500,
                        mb: "5px"
                    }}>Password</Typography>
                <CustomTextField id="password" type="password" variant="outlined" fullWidth />
            </Box>
            <Stack
                direction="row"
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    my: 2
                }}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Remeber this Device"
                    />
                </FormGroup>
                <Typography
                    component={Link}
                    to="/"
                    sx={{
                        fontWeight: "500",
                        textDecoration: 'none',
                        color: 'primary.main'
                    }}>
                    Forgot Password ?
                </Typography>
            </Stack>
        </Stack>
        <Box>
            <Button
                color="primary"
                variant="contained"
                size="large"
                fullWidth
                component={Link}
                to="/"
                type="submit"
            >
                Sign In
            </Button>
        </Box>
        {subtitle}
    </>
);

export default AuthLogin;
