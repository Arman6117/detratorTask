import React from "react";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import { Comment, Favorite, Send } from "@mui/icons-material";

const posts = [
  {
    label: "Post 1",
    background: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
  },
  {
    label: "Post 2",
    background: "linear-gradient(135deg, #4E65FF 0%, #92EFFD 100%)",
  },
  {
    label: "Post 3",
    background: "linear-gradient(135deg, #45B649 0%, #DCE35B 100%)",
  },
];

const HomePageSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#111827", // Darker background
        width: "400px",
        height: "100vh",
        overflowY: "scroll",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        padding: 1,
      }}
    >
      {posts.map((post, index) => (
        <React.Fragment key={index}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 5 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "500px",
                width: "100%",
                background: post.background,
                borderRadius: "12px",
                padding: 1,
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.01)",
                },
              }}
            >
              <Typography 
                variant="h3" 
                sx={{ 
                  color: "#fff",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                  fontWeight: "bold"
                }}
              >
                {post.label}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, paddingLeft: 1 }}>
              <IconButton 
                sx={{ 
                  color: "rgba(255,255,255,0.8)", 
                  transition: "all 0.3s",
                  "&:hover": { 
                    color: "#FF6B6B",
                    transform: "scale(1.1)"
                  }
                }}
              >
                <Favorite sx={{ fontSize: 28 }} />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: "rgba(255,255,255,0.8)", 
                  transition: "all 0.3s",
                  "&:hover": { 
                    color: "#4E65FF",
                    transform: "scale(1.1)"
                  }
                }}
              >
                <Comment sx={{ fontSize: 28 }} />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: "rgba(255,255,255,0.8)", 
                  transition: "all 0.3s",
                  "&:hover": { 
                    color: "#45B649",
                    transform: "scale(1.1)"
                  }
                }}
              >
                <Send sx={{ fontSize: 28 }} />
              </IconButton>
            </Box>
          </Box>
          <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)", margin: "24px 0" }} />
        </React.Fragment>
      ))}
    </Box>
  );
};

export default HomePageSection;