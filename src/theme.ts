import { Components, createTheme, Theme } from "@mui/material";
export const appCustomTheme = () => {
  const appDarkTheme = createTheme({
    typography: {
      allVariants: {
        color: "#fff",
        fontFamily: "Poppins",
      },
      ...typography(createTheme()),
    },
    palette: {
      primary: {
        main: "#2C2C2C",
        dark: "#232323",
      },
      background: {
        default: "#2C2C2C",
        paper: "#232323",
      },
      info: {
        main: "#696BFD",
        light: "#68D5E7",
        dark: "#453C92",
      },
      error: {
        main: "#DD5151",
      },
      warning: {
        main: "#E8DE60",
      },
      success: {
        main: "#76D053",
      },
    },
    components: {...components()},
  });

  const appLightTheme = createTheme({
    typography: {
      allVariants: {
        color: "#333",
        fontFamily: "Poppins",
      },
      ...typography(createTheme()),
    },
    palette: {
      primary: {
        main: "#fff",
        dark: "#f5f5f5",
      },
      background: {
        default: "#fff",
        paper: "#f5f5f5",
      },
      info: {
        main: "#696BFD",
        light: "#68D5E7",
        dark: "#453C92",
      },
      error: {
        main: "#DD5151",
      },
      warning: {
        main: "#E8DE60",
      },
      success: {
        main: "#76D053",
      },
    },
    components: {...components()}
  });

  return {
    appDarkTheme,
    appLightTheme,
  };
};

const typography = (theme: Theme) => ({
  h1: {
    fontSize: "98px",
    fontWeight: 700,
  },
  h2: {
    fontSize: "50px",
    fontWeight: 700,
  },
  h3: {
    fontSize: "32px",
    fontWeight: 700,
  },
  h4: {
    fontSize: "24px",
    fontWeight: 700,
  },
  h5: {
    fontSize: "20px",
    fontWeight: 700,
    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
    },
  },
  h6: {
    fontSize: "16px",
    fontWeight: 700,
  },
  subtitle1: {
    fontSize: "28px",
    fontWeight: 400,
  },
  subtitle2: {
    fontSize: "24px",
    fontWeight: 400,
  },
  body1: {
    fontSize: "16px",
    fontWeight: 400,
  },
  body2: {
    fontSize: "14px",
    fontWeight: 400,
  },
  button: {
    fontSize: "16px",
    fontWeight: 700,
  },
  caption: {
    fontSize: "12px",
    fontWeight: 300,
  },
  overline: {
    fontSize: "14px",
    fontWeight: 700,
  },
});

const components = (): Components<Theme> => {
  return {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: "#453C92",
            color: "#fff",
          },
        },
      ],
    },
  };
};