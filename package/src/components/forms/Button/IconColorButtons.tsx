import { Box, IconButton } from "@mui/material";
import BaseCard from "../../BaseCard/BaseCard";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const IconColorButtons = () => {
  return (
    <BaseCard
      title="Color Buttons"
      chiptitle="Icon Buttons"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton

          color="primary"
          sx={{
            mr: 1,
          }}
        >
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton

          color="secondary"
          sx={{
            mr: 1,
          }}
        >
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton

          sx={{
            mr: 1,
            color: "error.main",
          }}
        >
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton

          sx={{
            mr: 1,
            color: "warning.main",
          }}
        >
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton

          color="success"
          sx={{
            mr: 1,
            color: "success.main",
          }}
        >
          <NotificationsNoneOutlinedIcon />
        </IconButton>
      </Box>
    </BaseCard>
  );
};

export { IconColorButtons };
