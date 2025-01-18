import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { alpha } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "45px",
          backgroundColor: alpha('#fff', 0.05),
          transition: 'all 0.2s ease-in-out',
          borderRadius: '12px',
          
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: alpha('#fff', 0.1),
            transition: 'all 0.2s ease-in-out',
          },
          
          "&:hover": {
            backgroundColor: alpha('#fff', 0.08),
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: alpha('#fff', 0.2),
            },
          },
          
          "&.Mui-focused": {
            backgroundColor: alpha('#fff', 0.1),
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: alpha('#fff', 0.3),
              borderWidth: "1px",
            },
          },

          // Remove default hover effect
          "& fieldset": {
            borderWidth: "1px",
          },
          
          // Customize padding and icon alignment
          "& input": {
            padding: "12px 14px",
            fontSize: "0.95rem",
            "&::placeholder": {
              opacity: 0.7,
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: alpha('#fff', 0.7),
          fontSize: "0.95rem",
          transform: "translate(14px, 13px) scale(1)",
          
          "&.Mui-focused": {
            color: alpha('#fff', 0.9),
          },
          
          "&.MuiInputLabel-shrink": {
            transform: "translate(14px, -9px) scale(0.75)",
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: alpha('#fff', 0.5),
          marginRight: "10px",
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
          width: { 
            xs: "100%", 
            sm: "300px", 
            md: "400px", 
            lg: "500px" 
          },
          display: { 
            xs: "none", 
            md: "block" 
          },
          margin: "0 auto",
          "& .MuiInputBase-input": {
            color: alpha('#fff', 0.9),
            "&::placeholder": {
              color: alpha('#fff', 0.5),
              opacity: 1,
            },
          },
          "& .MuiInputBase-input:focus": {
            boxShadow: "none",
          },
        }}
        placeholder="Search..."
        variant="outlined"
        InputLabelProps={{
          shrink: false,
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ 
                fontSize: "20px",
                transition: 'color 0.2s ease-in-out',
                "&:hover": {
                  color: alpha('#fff', 0.8),
                },
              }} />
            </InputAdornment>
          ),
        }}
      />
    </ThemeProvider>
  );
};