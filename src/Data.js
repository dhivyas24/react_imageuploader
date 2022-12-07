import React from "react";

import Typography from "@mui/material/Typography";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

function Data({ data }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h1>Image List</h1>
        {data &&
          data.map((item, id) => (
            <Typography key={item.id}>
              <img id="img1" src={item.img1.value} />
              <img id="img1" src={item.img2.value} />
              <img id="img1" src={item.img3.value} />
            </Typography>
          ))}
      </CardContent>
    </Card>
  );
}

export default Data;
