'use client';
import { Box, Typography } from "@mui/material";
import { Link } from "react-router";

const Footer = () => {
    return (
        <Box sx={{ pt: 6, pb: 3, textAlign: "center" }}>
            <Typography>
                © {new Date().getFullYear()} All rights reserved by{" "}
                <Link to="https://www.wrappixel.com">
                    <Typography color='primary.main' component='span'>
                        Wrappixel.com</Typography>
                </Link>{" "}
            </Typography>
        </Box>
    );
};

export default Footer;
