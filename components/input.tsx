import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "50px", 
          "& fieldset": {
            borderColor: "white", 
          },
          "&:hover fieldset": {
            borderColor: "white", 
          },
          "&.Mui-focused fieldset": {
            borderColor: "white", 
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white", 
          "&.Mui-focused": {
            color: "white", 
          },
        },
      },
    },
  },
});

export const Input = () => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        sx={{
          width: { xs: "100%", sm: "0", md: "750px" }, // Hidden on small screens, visible on medium and above
          position:{md:'relative'},
          right:{md:"20%"},
          visibility: { xs: "hidden", md: "visible" }, // Ensures visibility control on smaller screens
          "& .MuiInputBase-input": {
            color: "white",
          },
        }}
        label="Search"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon style={{ color: "white" }} />
            </InputAdornment>
          ),
        }}
      />
    </ThemeProvider>
  );
};
