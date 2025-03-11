"use client";
import React from "react";
import { Grid2 as Grid, Box, Slider } from "@mui/material";

import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import VolumeDownOutlinedIcon from "@mui/icons-material/VolumeDownOutlined";
import BaseCard from "src/components/BaseCard/BaseCard";

const valuetext = (value: number) => {
  return `${value}°C`;
};

const ExSlider = () => {
  const [value, setValue] = React.useState(30);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const [value2, setValue2] = React.useState<number[]>([20, 37]);

  const handleChange2 = (_event: Event, newValue2: number | number[]) => {
    setValue2(newValue2 as number[]);
  };

  return (
    <Box>
      <Grid container spacing={3}>
        {/* Default Slider */}
        <Grid size={{ xs: 12, lg: 4, sm: 6 }}>
          <BaseCard title="Default Slider">
            <Slider defaultValue={30} aria-label="slider" />
          </BaseCard>
        </Grid>

        {/* Disabled Slider */}
        <Grid size={{ xs: 12, lg: 4, sm: 6 }}>
          <BaseCard title="Default Disabled Slider">
            <Slider disabled defaultValue={30} aria-label="slider" />
          </BaseCard>
        </Grid>

        {/* Volume Slider */}
        <Grid size={{ xs: 12, lg: 4, sm: 6 }}>
          <BaseCard title="Default Volume Slider">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <VolumeDownOutlinedIcon />
              <Slider aria-label="Volume" value={value} onChange={handleChange} />
              <VolumeUpOutlinedIcon />
            </Box>
          </BaseCard>
        </Grid>

        {/* Discrete Slider */}
        <Grid size={{ xs: 12, lg: 4, sm: 6 }}>
          <BaseCard title="Default Discrete Slider">
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={110}
            />
          </BaseCard>
        </Grid>

        {/* Range Slider */}
        <Grid size={{ xs: 12, lg: 4, sm: 6 }}>
          <BaseCard title="Default Range Slider">
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value2}
              onChange={handleChange2}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </BaseCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExSlider;
