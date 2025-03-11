"use client";
import { Grid2 as Grid, Box } from "@mui/material";
import SalesOverview from "src/components/dashboard/TheSalesOverview";
import OurVisitors from "src/components/dashboard/TheOurVisitors";
import ProfileCard from "src/components/dashboard/TheProfileCard";
import ActivityTimeline from "src/components/dashboard/TheActivityTimeline";
import MyContacts from "src/components/dashboard/TheMyContacts";


export default function Dashboard() {
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid
                    size={{
                        xs: 12,
                        lg: 8
                    }}>
                    <SalesOverview />
                </Grid>
                <Grid
                    size={{
                        xs: 12,
                        lg: 4
                    }}>
                    <OurVisitors />
                </Grid>

                <Grid
                    size={{
                        xs: 12,
                        lg: 4
                    }}>
                    <Grid container spacing={3}>
                        <Grid size={12}>
                            <ProfileCard />
                        </Grid>
                        <Grid size={12}>
                            <MyContacts />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    size={{
                        xs: 12,
                        lg: 8
                    }}>
                    <ActivityTimeline />
                </Grid>
            </Grid>
        </Box>
    );
}

