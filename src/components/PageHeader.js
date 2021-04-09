import React from "react";
import { Box, Typography } from "@material-ui/core";

const PageHeader = props => {
  return (
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        {props.title}
      </Typography>
    </Box>
  );
};

export default PageHeader;
