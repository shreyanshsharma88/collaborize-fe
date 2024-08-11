import { Stack } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppThemeProvider } from "./providers";
import { queryClientInstance } from "./queryClientInstance";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClientInstance}>
        <AppThemeProvider>
          <Stack
            sx={{
              minHeight: "90dvh",
              width: "100dvw",
              scrollbarWidth: "none",
              justifyContent:'center',
              alignItems:'center',
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "&-ms-overflow-style:": {
                display: "none",
              },
              overflow: "auto",
            }}
          >
             <ToastContainer />
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/home" element={<Home />} />
            </Routes>
          </Stack>
        </AppThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
