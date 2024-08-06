import { Box, Button, Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import DashboardAnimation from "../../public/lottie/dashboardAnimation.json";
import { useState } from "react";

export const Dashboard = () => {
  const [showLoginSignup, setShowLoginSignup] = useState(false);
  return (
    <Stack
      position="relative"
      width="100%"
      justifyContent="center"
      alignItems="center"
      direction="column"
      gap={2}
    >
      <Stack direction="column">
        <Typography fontStyle="italic" variant="h3" color="info.light">
          Welcome to
        </Typography>
        <Typography variant="h1" color="info.main">
          Collaborize
        </Typography>
      </Stack>
      <Box width="30%">
        <Lottie
          animationData={DashboardAnimation}
          style={{ height: "100%", width: "100%" }}
        />
      </Box>
      <Typography alignSelf="center" variant="h5">
        Management made easier
      </Typography>
      <Button onClick={() => setShowLoginSignup(true)} variant="contained">
        Get Started Now
      </Button>
    </Stack>
  );
};
