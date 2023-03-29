import { Box } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import Videos from "./Videos";

const VideoDetail = () => {
  const { id } = useParams();
  return (
    <Box>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        className="react-player"
        controls
      />
      <Videos />
    </Box>
  );
};

export default VideoDetail;
