import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';

const BlockOne = () => {
  return (
    <Box
      className="bg-indigo-500 text-white py-16"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h2" component="h1" gutterBottom className="font-bold">
        Welcome to Detrator
      </Typography>
      <Typography variant="body1" className="text-lg">
        Your trusted partner for scaling and innovation.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        className="mt-6 rounded-full px-6 py-2"
      >
        Get Started
      </Button>
    </Box>
  );
};

export default BlockOne;
