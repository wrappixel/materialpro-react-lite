import React from 'react';
import { useTheme } from "@mui/material/styles";
import { Stack, Typography, Avatar, Box, Divider } from "@mui/material";
import DashboardCard from '../shared/DashboardCard';

const Chart = React.lazy(() => import('react-apexcharts'));

const OurVisitors = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const info = theme.palette.info.main;
  const grey = theme.palette.grey[100];

  // chart
  const optionscolumnchart: any = {
    labels: ["Mobile", "tablet", "Other", "Desktop"],
    chart: {
      height: 250,
      type: "donut",
      foreColor: "#adb0bb",
      fontFamily: `inherit`,
    },
    colors: [primary, secondary, grey, info],
    dataLabels: { enabled: false },
    legend: { show: false },
    stroke: { colors: ["transparent"] },
    plotOptions: {
      pie: {
        donut: {
          size: "83",
          background: "transparent",
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 7,
            },
            value: { show: false },
            total: {
              show: true,
              color: "#a1aab2",
              fontSize: "13px",
              label: "Our Visitor",
            },
          },
        },
      },
    },
    responsive: [{ breakpoint: 480, options: { chart: { height: 230 } } }],
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart = [25, 35, 35, 15];

  return (
    <>

      <DashboardCard
        title="Our Visitors"
        subtitle="Different Devices Used to Visit"
        footer={
          <>
            <Divider />
            {/* points */}
            <Stack spacing={3} p={3} direction="row" justifyContent="center">
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  sx={{
                    width: 9,
                    height: 9,
                    bgcolor: primary,
                    svg: { display: "none" },
                  }}
                ></Avatar>
                <Typography
                  variant="subtitle2"
                  color="primary.main"
                >
                  Mobile
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  sx={{
                    width: 9,
                    height: 9,
                    bgcolor: info,
                    svg: { display: "none" },
                  }}
                ></Avatar>
                <Typography
                  variant="subtitle2"
                  color="info.main"
                >
                  Desktop
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  sx={{
                    width: 9,
                    height: 9,
                    bgcolor: secondary,
                    svg: { display: "none" },
                  }}
                ></Avatar>
                <Typography
                  variant="subtitle2"
                  color="secondary.main"
                >
                  Tablet
                </Typography>
              </Stack>
            </Stack>
          </>
        }
      >
        <>
          <Box height="220px">
            <Chart
              options={optionscolumnchart}
              series={seriescolumnchart}
              type="donut"
              height={250}
              width={"100%"}
            />
          </Box>
        </>
      </DashboardCard>

    </>
  );
};

export default OurVisitors;
