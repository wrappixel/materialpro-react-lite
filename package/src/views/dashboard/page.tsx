"use client";

import { useEffect, useState } from "react";

import { Grid2 as Grid, Box } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import Welcome from 'src/layouts/full/shared/welcome/Welcome';
import SalesOverview from "src/components/dashboard/TheSalesOverview";
import OurVisitors from "src/components/dashboard/TheOurVisitors";
import ProfileCard from "src/components/dashboard/TheProfileCard";
import ActivityTimeline from "src/components/dashboard/TheActivityTimeline";
import MyContacts from "src/components/dashboard/TheMyContacts";


export default function Dashboard() {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <PageContainer title="General" description="this is Dashboard">
            {/* breadcrumb */}
            <Box>
                <Grid container spacing={3}>
                    <Grid
                        size={{
                            xs: 12,
                            lg: 8
                        }}>
                        <SalesOverview isLoading={isLoading} />
                    </Grid>
                    <Grid
                        size={{
                            xs: 12,
                            lg: 4
                        }}>
                        <OurVisitors isLoading={isLoading} />
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
                <Welcome />
            </Box>
        </PageContainer>
    );
}

