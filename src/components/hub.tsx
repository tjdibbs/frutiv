import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";

function Hub() {
  const theme = useTheme();
  return (
    <Box
      className={"section-hub"}
      sx={{ my: 10, display: "flex", flexWrap: "nowrap" }}
    >
      <Box className={"section-wrapper"} sx={{ width: "70%" }}>
        <Box className={"section-header"}>
          <Typography
            component={"h1"}
            variant={"h4"}
            fontWeight={800}
            color={"secondary"}
          >
            FRUTIV HUB
          </Typography>
          <Typography component={"h1"} variant={"subtitle2"} fontWeight={400}>
            Getting to know about the frutiv hub.
          </Typography>
        </Box>
        <Box className={"section-text"} sx={{ my: 5 }}>
          <Typography component={"p"} variant={"subtitle1"} fontWeight={500}>
            We are growing a hub in nigeria, we also have the goal to give tech
            minded youth the knowledge of latest technology at a very minimum
            fee, well this fee do not really define the remuneration of the
            knowledge and training we will be giving, it just to enhance support
            the training with some tools. One of our goal is to give tech minded
            youths, the knowledge of latest technology and be able to get job
            easily. During the training, we will also be working as a team
            building small technology, giving our trainee live
          </Typography>
        </Box>
        <Button
          variant={"contained"}
          color={"secondary"}
          sx={{
            borderRadius: 10,
            mt: 2,
            textTransform: "none",
            py: 2,
            px: 5,
            boxShadow: theme.shadows[4],
          }}
          size={"large"}
        >
          {" "}
          Learn more{" "}
        </Button>
      </Box>
      <Box className={"image-container"} sx={{ right: 0, maxWidth: "45%" }}>
        <img
          src={"/images/hub.png"}
          alt={"hub"}
          style={{ width: "500px", maxWidth: "100%" }}
        />
      </Box>
    </Box>
  );
}

export default Hub;
