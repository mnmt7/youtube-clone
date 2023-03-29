import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || "row"}
      // border="1px solid red"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="start"
      columnGap={5}
      rowGap={3}
      // px={10}
    >
      {videos && videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetails={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
