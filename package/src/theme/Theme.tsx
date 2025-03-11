import _ from 'lodash';
import { createTheme, Direction, ThemeOptions, Shadows } from '@mui/material/styles';
import { useEffect } from 'react';
import typography from './Typography';
import { shadows } from './Shadows';
import { baselightTheme } from './DefaultColors';

export const BuildTheme = () => {

  const defaultTheme = baselightTheme;
  const defaultShadow: Shadows = shadows as Shadows; // Ensuring correct type
  const baseMode: ThemeOptions = {
    palette: {
      mode: 'light',
    },
    shape: {
      borderRadius: 10,
    },
    shadows: defaultShadow,
    typography: typography,
    direction: 'ltr' as Direction,
  };
  const theme = createTheme(
    _.merge({}, baseMode, defaultTheme)
  );

  return theme;
};

const ThemeSettings = () => {
  const theme = BuildTheme();
  useEffect(() => {
    document.dir = 'ltr';
  }, []);

  return theme;
};

export { ThemeSettings };
