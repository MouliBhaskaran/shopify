import React from "react";
import Rating from '@mui/material/Rating';
import { useState } from "react";

const Rate = () => {
  const [value, setValue] = useState(2)
  return (
    <>
      <Rating
        name="simple-controlled"
        value={value}
        size="large"
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </>
  );
};

export default Rate;
