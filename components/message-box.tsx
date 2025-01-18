import React from "react";
import { Box, Typography, Avatar, IconButton, TextField } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Send as SendIcon, MoreVert as MoreVertIcon } from "@mui/icons-material";

const MessageBox = () => {
  const messages = [
    {
      id: 1,
      sender: "John Doe",
      message: "Hey, how are you?",
      time: "2:30 PM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "You",
      message: "I'm good! How about you?",
      time: "2:31 PM",
      isOwn: true,
    },
    {
      id: 3,
      sender: "John Doe",
      message: "Great! Did you see the latest post?",
      time: "2:33 PM",
      isOwn: false,
    },
  ];

  return (
    <Box
      sx={{
        width: "380px",
        height: "calc(90vh - 64px)",
        backgroundColor: "#111827",
        borderLeft: `1px solid ${alpha("#fff", 0.1)}`,
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        position: "fixed",
        right: "30px",
        top: '90px',
        zIndex: 40,
        
      }}
    >

      <Box
        sx={{
          p: 2,
          borderBottom: `1px solid ${alpha("#fff", 0.1)}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: alpha("#000", 0.2),
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            sx={{
              background: "linear-gradient(135deg, #4E65FF, #92EFFD)",
              width: 40,
              height: 40,
            }}
          />
          <Box>
            <Typography variant="subtitle1" sx={{ color: alpha("#fff", 0.9) }}>
              John Doe
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: alpha("#fff", 0.6) }}
            >
              Active now
            </Typography>
          </Box>
        </Box>
        <IconButton sx={{ color: alpha("#fff", 0.6) }}>
          <MoreVertIcon />
        </IconButton>
      </Box>

    
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: alpha("#fff", 0.1),
            borderRadius: "4px",
          },
        }}
      >
        {messages.map((message) => (
          <Box
            key={message.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: message.isOwn ? "flex-end" : "flex-start",
              gap: 0.5,
            }}
          >
            <Box
              sx={{
                maxWidth: "70%",
                backgroundColor: message.isOwn
                  ? alpha("#92EFFD", 0.3)
                  : alpha("#fff", 0.1),
                borderRadius: "16px",
                borderTopRightRadius: message.isOwn ? "4px" : "16px",
                borderTopLeftRadius: message.isOwn ? "16px" : "4px",
                p: 2,
              }}
            >
              <Typography sx={{ color: alpha("#fff", 0.9) }}>
                {message.message}
              </Typography>
            </Box>
            <Typography
              variant="caption"
              sx={{ color: alpha("#fff", 0.5) }}
            >
              {message.time}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          p: 2,
          borderTop: `1px solid ${alpha("#fff", 0.1)}`,
          backgroundColor: alpha("#000", 0.2),
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField
            fullWidth
            placeholder="Type a message..."
            variant="outlined"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: alpha("#fff", 0.05),
                borderRadius: "12px",
                color: alpha("#fff", 0.9),
                "& fieldset": {
                  borderColor: alpha("#fff", 0.1),
                },
                "&:hover fieldset": {
                  borderColor: alpha("#fff", 0.2),
                },
                "&.Mui-focused fieldset": {
                  borderColor: alpha("#fff", 0.3),
                },
              },
            }}
          />
          <IconButton
            sx={{
              backgroundColor: "#4E65FF",
              borderRadius: "12px",
              padding: "8px",
              "&:hover": {
                backgroundColor: alpha("#4E65FF", 0.8),
              },
            }}
          >
            <SendIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageBox;