import React from "react";

import {

  Box,
  Avatar,
  Stack,
  Typography,
  Grid2 as Grid,
  Button,
  MenuItem,
  LinearProgress,
  IconButton,

  useTheme,
  Divider,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";


import { Link } from "react-router";
import { Icon } from "@iconify/react";
import user4 from 'src/assets/images/profile/user-4.jpg'
import user5 from 'src/assets/images/profile/user-5.jpg'
import user6 from 'src/assets/images/profile/user-6.jpg'

import blog1 from "src/assets/images/blog/blog-img1.jpg"
import blog2 from "src/assets/images/blog/blog-img2.jpg"
import blog3 from "src/assets/images/blog/blog-img3.jpg"
import blog4 from "src/assets/images/blog/blog-img4.jpg"

import zipIcon from 'src/assets/images/svgs/icon-zip.svg'
import figmaIcon from 'src/assets/images/svgs/icon-figma2.svg'
import CustomSelect from "../forms/theme-elements/CustomSelect";
import CustomFormLabel from "../forms/theme-elements/CustomFormLabel";
import CustomTextField from "../forms/theme-elements/CustomTextField";
import DashboardCard from "../shared/DashboardCard";





const ActivityTimeline = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // select
  const [, setNumber] = React.useState("");

  const handleChange3 = (event: any) => {
    setNumber(event.target.value);
  };

  return (<>
    <DashboardCard
      title="Profile Activitiy"
      subtitle="Ample Admin Vs Pixel Admin"
    >
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{
              flexGrow: 1,
              maxWidth: { xs: 320, sm: "100%" },
            }}
          >
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              variant="fullWidth"
              TabIndicatorProps={{ style: { display: "none" } }}
              sx={{
                "& .MuiTabs-flexContainer": {
                  gap: "20px",
                  overflow: {
                    xs: "auto",
                    sm: "unset",
                  },
                },
                "& .MuiTab-root": {
                  padding: "20px 16px",
                  minHeight: "100px",
                  border: `1px dashed ${theme.palette.divider} !important`,
                  borderRadius: theme.shape,
                  color: "text.primary",
                  borderBottom: "2px solid transparent",
                  "&.Mui-selected": {
                    border: `1px solid ${theme.palette.divider} !important`,
                    color: "primary.main",
                    borderBottom: `2px solid ${theme.palette.primary.main} !important`,
                  },
                },
              }}
            >
              <Tab
                icon={<Icon icon="solar:user-circle-linear" height={20} />}
                label="Activity"
                value="1"
              />
              <Tab
                icon={<Icon icon="solar:user-circle-linear" height={20} />}
                label="Profile"
                value="2"
              />
              <Tab
                icon={<Icon icon="solar:inbox-linear" height={20} />}
                label="Inbox"
                value="3"
              />
              <Tab
                icon={<Icon icon="solar:settings-outline" height={20} />}
                label="Settings"
                value="4"
              />
            </TabList>
          </Box>
          <TabPanel
            value="1"
            sx={{
              "&.MuiTabPanel-root": {
                px: 0,
                pb: 0,
              },
            }}
          >
            <Timeline
              sx={{
                mt: -2,
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
                "&.MuiTimeline-root": {
                  px: 0,
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      backgroundColor: "transparent",
                      margin: 0,
                      boxShadow: "none",
                    }}
                  >
                    <Avatar
                      src={user4}
                      alt="user"
                      sx={{ width: 56, height: 56 }}
                    />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={1}
                  >
                    <Box>
                      <Stack
                        direction="row" flexWrap='wrap'
                        alignItems="center"
                        spacing={1}
                        mt={1}
                        mb={1}
                      >
                        <Typography variant="h6">John Doe</Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          5 minutes ago
                        </Typography>
                      </Stack>
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        mb={2}
                      >
                        assign a new task{" "}
                        <Link to="/">
                          <Typography component="span" color="primary.main">
                            Design weblayout
                          </Typography>
                        </Link>
                      </Typography>
                    </Box>
                    <IconButton aria-label="more" id="long-button">
                      <Icon icon="solar:menu-dots-line-duotone" height={20} />
                    </IconButton>
                  </Stack>

                  <Grid container spacing={3} mb={3}>
                    <Grid
                      size={{
                        xs: 12,
                        sm: 4,
                        lg: 3
                      }}>
                      <Avatar
                        src={blog1}
                        alt="bg1"
                        sx={{
                          borderRadius: (theme: any) => theme.shape,
                          width: "100%",
                          height: 80,
                        }}
                      />
                    </Grid>
                    <Grid
                      size={{
                        xs: 12,
                        sm: 4,
                        lg: 3
                      }}>
                      <Avatar
                        src={blog2}
                        alt="bg1"
                        sx={{
                          borderRadius: (theme: any) => theme.shape,
                          width: "100%",
                          height: 80,
                        }}
                      />
                    </Grid>
                    <Grid
                      size={{
                        xs: 12,
                        sm: 4,
                        lg: 3
                      }}>
                      <Avatar
                        src={blog3}
                        alt="bg1"
                        sx={{
                          borderRadius: (theme: any) => theme.shape,
                          width: "100%",
                          height: 80,
                        }}
                      />
                    </Grid>
                    <Grid
                      size={{
                        xs: 12,
                        sm: 4,
                        lg: 3
                      }}>
                      <Avatar
                        src={blog4}
                        alt="bg1"
                        sx={{
                          borderRadius: (theme: any) => theme.shape,
                          width: "100%",
                          height: 80,
                        }}
                      />
                    </Grid>
                  </Grid>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      backgroundColor: "transparent",
                      margin: 0,
                      boxShadow: "none",
                    }}
                  >
                    <Avatar
                      src={user5}
                      alt="user"
                      sx={{ width: 56, height: 56 }}
                    />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={1}
                  >
                    <Box>
                      <Stack
                        direction="row" flexWrap='wrap'
                        alignItems="center"
                        spacing={1}
                        mt={1}
                      >
                        <Typography variant="h6">Canry Smith</Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          5 minutes ago
                        </Typography>
                      </Stack>
                    </Box>
                    <IconButton aria-label="more" id="long-button">
                      <Icon icon="solar:menu-dots-line-duotone" height={20} />
                    </IconButton>
                  </Stack>
                  <Box
                    bgcolor="primary.light"
                    fontSize="15px"
                    color="text.secondary"
                    mt={1}
                    p="20px"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam. Sed nisi. Nulla quis sem at nibh elementum
                    imperdiet. Duis sagittis ipsum. Praesent mauris.
                  </Box>
                </TimelineContent>
              </TimelineItem>

              {/* 3 */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      backgroundColor: "transparent",
                      margin: 0,
                      boxShadow: "none",
                    }}
                  >
                    <Avatar
                      src={user6}
                      alt="user"
                      sx={{ width: 56, height: 56 }}
                    />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={1}
                    mb={1}
                  >
                    <Box>
                      <Stack
                        direction="row" flexWrap='wrap'
                        alignItems="center"
                        spacing={1}
                        mt={1}
                      >
                        <Typography variant="h6">James Smith</Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          5 minutes ago
                        </Typography>
                      </Stack>
                    </Box>
                    <IconButton aria-label="more" id="long-button">
                      <Icon icon="solar:menu-dots-line-duotone" height={20} />
                    </IconButton>
                  </Stack>
                  <Grid container spacing={2}>
                    <Grid
                      size={{
                        xs: 12,
                        lg: 5
                      }}>
                      <Box
                        display="flex"
                        alignItems="center"
                        gap={2}
                        border={1}
                        borderColor="divider"
                        padding="20px 30px"
                      >
                        <img
                          src={zipIcon}
                          width={38}
                          alt="icon"
                          height={40}
                        />
                        <Box>
                          <Typography variant="h6" mb={1}>
                            Payments.zip
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            color="textSecondary"
                          >
                            150kb
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid
                      size={{
                        xs: 12,
                        lg: 5
                      }}>
                      <Box
                        display="flex"
                        alignItems="center"
                        gap={2}
                        border={1}
                        borderColor="divider"
                        padding="20px 30px"
                      >
                        <img
                          src={figmaIcon}
                          width={38}
                          alt="icon"
                          height={40}
                        />
                        <Box>
                          <Typography variant="h6" mb={1}>
                            Payments.zip
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            color="textSecondary"
                          >
                            150kb
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid
                      size={{
                        xs: 12,
                        lg: 2
                      }}>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                        bgcolor="primary.light"
                        padding="20px 30px"
                        height="100%"
                      >
                        <Typography variant="h6" color="textSecondary">
                          2+
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    fontSize="15px"
                    mt={1}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </TabPanel>
          <TabPanel
            value="2"
            sx={{
              "&.MuiTabPanel-root": {
                px: 0,
                pb: 0,
              },
            }}
          >
            <Grid container spacing={3}>
              <Grid
                size={{
                  xs: 12,
                  sm: 3
                }}>
                <Typography variant="subtitle1" fontWeight="500">
                  Full Name
                </Typography>
                <Typography variant="subtitle2" fontSize="12px">
                  Johnathan Deo
                </Typography>
              </Grid>
              <Grid
                size={{
                  xs: 12,
                  sm: 3
                }}>
                <Typography variant="subtitle1" fontWeight="500">
                  Mobile
                </Typography>
                <Typography variant="subtitle2" fontSize="12px">
                  (123) 456 7890
                </Typography>
              </Grid>
              <Grid
                size={{
                  xs: 12,
                  sm: 3
                }}>
                <Typography variant="subtitle1" fontWeight="500">
                  Email
                </Typography>
                <Typography variant="subtitle2" fontSize="12px">
                  johnathan@admin.com
                </Typography>
              </Grid>
              <Grid
                size={{
                  xs: 12,
                  sm: 3
                }}>
                <Typography variant="subtitle1" fontWeight="500">
                  Location
                </Typography>
                <Typography variant="subtitle2" fontSize="12px">
                  London
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="subtitle2" color="textSecondary" mt={4}>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis pretium. Integer
              tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
              vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
              consequat vitae, eleifend ac, enim.
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" mt={2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" mt={2}>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </Typography>

            <Typography variant="h5" mt={5} pb={2}>
              Skill set
            </Typography>
            <Divider />

            <Stack spacing={3} mt={3}>
              <Box>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <Typography variant="subtitle1" mb={1}>
                    Wordpress
                  </Typography>
                  <Typography variant="subtitle1">80%</Typography>
                </Stack>
                <LinearProgress
                  color="primary"
                  variant="determinate"
                  value={80}
                />
              </Box>
              <Box>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <Typography variant="subtitle1" mb={1}>
                    React
                  </Typography>
                  <Typography variant="subtitle1">50%</Typography>
                </Stack>
                <LinearProgress
                  color="secondary"
                  variant="determinate"
                  value={50}
                />
              </Box>
              <Box>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <Typography variant="subtitle1" mb={1}>
                    VueJs
                  </Typography>
                  <Typography variant="subtitle1">45%</Typography>
                </Stack>
                <LinearProgress
                  color="error"
                  variant="determinate"
                  value={45}
                />
              </Box>
              <Box>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <Typography variant="subtitle1" mb={1}>
                    NextJs
                  </Typography>
                  <Typography variant="subtitle1">15%</Typography>
                </Stack>
                <LinearProgress
                  color="info"
                  variant="determinate"
                  value={15}
                />
              </Box>
            </Stack>
          </TabPanel>
          <TabPanel
            value="3"
            sx={{
              "&.MuiTabPanel-root": {
                px: 0,
                pb: 0,
              },
            }}
          >
            <form>
              <CustomFormLabel
                sx={{
                  mt: 0,
                }}
                htmlFor="text-name"
              >
                Name
              </CustomFormLabel>
              <CustomTextField id="text-name" variant="outlined" fullWidth />
              <CustomFormLabel htmlFor="text-email">Email</CustomFormLabel>
              <CustomTextField id="text-email" variant="outlined" fullWidth />
              <CustomFormLabel htmlFor="text-password">
                Password
              </CustomFormLabel>
              <CustomTextField
                id="text-password"
                type="password"
                variant="outlined"
                fullWidth
              />
              <CustomFormLabel htmlFor="text-address">
                Address
              </CustomFormLabel>
              <CustomTextField
                id="text-address"
                variant="outlined"
                fullWidth
              />
              <CustomFormLabel htmlFor="text-address">Select</CustomFormLabel>
              <CustomSelect
                fullWidth
                id="standard-select-number"
                variant="outlined"
                value={1}
                onChange={handleChange3}
                sx={{
                  mb: 2,
                }}
              >
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
              </CustomSelect>

              <Button variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </TabPanel>
          <TabPanel
            value="4"
            sx={{
              "&.MuiTabPanel-root": {
                px: 0,
                pb: 0,
              },
            }}
          >
            <form>
              <CustomFormLabel
                sx={{
                  mt: 0,
                }}
                htmlFor="text-name"
              >
                Name
              </CustomFormLabel>
              <CustomTextField id="text-name" variant="outlined" fullWidth />
              <CustomFormLabel htmlFor="text-email">Email</CustomFormLabel>
              <CustomTextField id="text-email" variant="outlined" fullWidth />
              <CustomFormLabel htmlFor="text-password">
                Password
              </CustomFormLabel>
              <CustomTextField
                id="text-password"
                type="password"
                variant="outlined"
                fullWidth
              />
              <CustomFormLabel htmlFor="text-address">
                Address
              </CustomFormLabel>
              <CustomTextField
                id="text-address"
                variant="outlined"
                fullWidth
              />
              <CustomFormLabel htmlFor="text-address">Select</CustomFormLabel>
              <CustomSelect
                fullWidth
                id="standard-select-number"
                variant="outlined"
                value={1}
                onChange={handleChange3}
                sx={{
                  mb: 2,
                }}
              >
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
              </CustomSelect>

              <Button variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </TabPanel>
        </TabContext>
      </Box>
    </DashboardCard>
  </>);
};

export default ActivityTimeline;
