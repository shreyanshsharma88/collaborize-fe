import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import DashboardAnimation from "../../public/lottie/dashboardAnimation.json";
import { authAxios } from "../http";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
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
      {showLoginSignup && (
        <LoginSignup
          open
          handleClose={() => {
            setShowLoginSignup(false), navigate("/home");
          }}
        />
      )}
    </Stack>
  );
};

const LoginSignup = ({
  handleClose,
  open,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const [isLogginIn, setIsLogginIn] = useState(false);
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      userName: "",
    },
  });

  const signupMutation = useMutation({
    mutationKey: ["signup"],
    mutationFn: (values: {
      email: string;
      password: string;
      userName: string;
    }) => authAxios.post("/signup", values),
    onSuccess: ({ data }) => {
      localStorage.setItem("token", data.data.token);
      toast("Successfully signed you up!!");
      handleClose();
    },
  });
  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: (values: { email: string; password: string }) =>
      authAxios.post("/login", values),
    onSuccess: ({ data }) => {
      localStorage.setItem("token", data.data.token1);
      toast("Successfully logged you in!!");
      handleClose();
    },
  });
  const handleSubmit = form.handleSubmit((values) => {
    console.log(values);
    if (isLogginIn) {
      loginMutation.mutate(values);
      return;
    }
    signupMutation.mutate(values);
  });
  return (
    <Dialog open={open} onClose={handleClose}>
      <Stack
        alignItems="center"
        justifyContent="center"
        direction="column"
        gap={3}
        p={2}
      >
        <IconButton sx={{ alignSelf: "end" }} onClick={handleClose}>
          <Close />
        </IconButton>
        <Typography variant="h6">
          {" "}
          {isLogginIn ? "Loggin you in" : "Let's sign you up"}
        </Typography>
        <Stack
          direction="column"
          gap={2}
          component="form"
          onSubmit={handleSubmit}
        >
          <TextField {...form.register("email")} label="Email" />
          <TextField {...form.register("password")} label="Password" />
          {!isLogginIn && (
            <TextField {...form.register("userName")} label="Username" />
          )}
          <Button variant="contained" type="submit">
            {isLogginIn ? "Login" : "Signup"}
          </Button>
        </Stack>
        <Typography
          onClick={() => {
            setIsLogginIn((p) => !p);
            form.reset();
          }}
          variant="caption"
          color="success.main"
          sx={{ cursor: "pointer", textDecoration: "underline" }}
        >
          {isLogginIn
            ? "First time? Try signing up first"
            : "Already a Collaborizer? Pick up where you left off"}
        </Typography>
      </Stack>
    </Dialog>
  );
};
