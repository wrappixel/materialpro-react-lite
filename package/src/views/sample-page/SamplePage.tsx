// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Typography } from '@mui/material';
import DashboardCard from '../../components/shared/DashboardCard';


const SamplePage = () => {
  return (
    <DashboardCard title="Sample Page">
      <Typography>This is a sample page</Typography>
    </DashboardCard>
  );
};

export default SamplePage;
