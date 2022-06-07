import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import React from "react";

export default function GetStarted() {
  const theme = useTheme();
  return (
    <Box
      className={"get-started-section"}
      sx={{
        px: 2,
        py: 3,
        bgcolor: theme.palette.primary.main,
        borderRadius: 1,
        boxShadow: theme.shadows[10],
        textAlign: "center",
        mt: 20,
        mb: 10,
      }}
    >
      <Box
        className={"section-header"}
        sx={{ mx: "auto", mb: 3, maxWidth: 500, p: 1, zIndex: 10, position: 'relative'  }}
      >
        <Typography
          component={"h2"}
          variant={"h6"}
          mb={2}
          fontWeight={800}
          color={"#fff"}
        >
          Want our service?
        </Typography>
        <Typography
          component={"h2"}
          variant={"caption"}
          fontWeight={400}
          color={"#fff"}
        >
          Provide your email below or chat directly with us by clicking on the chat button at the 
          bottom-right of the page, to get our solutions and services now.
        </Typography>
      </Box>
      <Box className={"form-group"} sx={{ mb: 2,  zIndex: 10, position: 'relative'  }}>
        <TextField
          label={"Enter your email"}
          fullWidth
          variant={"filled"}
          sx={{
            ".MuiFilledInput-root": {
              bgcolor: "#fff",
              borderRadius: 3,
              "&::before, &::after": {
                display: "none!important",
              },
            },
            width: 350,
            maxWidth: "90%",
            mx: "auto",
            ".MuiFilledInput-input": {
              fontWeight: "600!important",
              textAlign: "center",
              borderRadius: 3,
              bgcolor: "#fff",
            },
            ".MuiInputLabel-root": {
              fontWeight: "600!important",
              width: "100%",
              "&.Mui-focused": {
                left: "50%",
                transform: "translate(-40%, 7px) scale(0.75)",
              },
            },
          }}
        />
      </Box>
      <Button
        color={"secondary"}
        size={"large"}
        variant={"contained"}
        sx={{ minWidth: 150, bgcolor: "#F0AF08", borderRadius: 5, zIndex: 10, position: 'relative' }}
      >
        Submit
      </Button>
    </Box>
  );
}
