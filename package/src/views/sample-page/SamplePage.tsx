// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import Welcome from 'src/layouts/full/shared/welcome/Welcome'


const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
    
      <DashboardCard title="Sample Page">
        <Typography>This is a sample page</Typography>
      </DashboardCard>
      <Welcome />
    </PageContainer>
  );
};

export default SamplePage;
