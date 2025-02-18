import {
  Box,
  CardContent,
  CardMedia,
  Card,
  Typography,
  Stack,
  Avatar,

  Button,
  Divider,
} from "@mui/material";
import ProfileBgImg from 'src/assets/images/backgrounds/profile-bg.jpg';
import user1 from 'src/assets/images/profile/user-1.jpg'


const ProfileCard = () => {
  return (
    <Card variant="outlined" sx={{ p: "10px" }}>
      <CardMedia
        sx={{ height: 111, borderRadius: (theme: any) => theme.shape }}
        image={ProfileBgImg}
        title="green iguana"
      />
      <CardContent>
        <Box textAlign="center" mt="-80px" mb={3}>
          <Avatar
            src={user1}
            sx={{ width: 100, height: 100, m: "0 auto" }}
          />
          <Typography variant="h5" fontSize='24px' mt={4} mb={1}>
            Angela Dominic
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" mb={2}>
            Web Designer & Developer
          </Typography>
          <Button variant="contained" color="primary">
            Follow
          </Button>
        </Box>
        <Divider />
        <Stack
          direction="row"
          spacing={1}
          mt={4}
          justifyContent="space-between"
        >
          <Box textAlign="center">
            <Typography variant="h3">1,099</Typography>
            <Typography variant="subtitle2" color='textSecondary' fontSize="12px">
              Articles
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h3">23,469</Typography>
            <Typography variant="subtitle2" color='textSecondary' fontSize="12px">
              Followers
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h3">6,035</Typography>
            <Typography variant="subtitle2" color='textSecondary' fontSize="12px">
              Following
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
