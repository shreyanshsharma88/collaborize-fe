import { Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { authAxios } from "../http";

export const Home = () => {
  const getUserDetails = useQuery({
    queryKey: ["getUser"],
    queryFn: () => authAxios.get("/api/user"),
  });

  return <Typography>Home page</Typography>;
};
