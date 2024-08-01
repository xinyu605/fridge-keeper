import { type ChangeEvent, type FC } from 'react';
import { type PaletteMode } from '@mui/material';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MuiSwitch from '@mui/material/Switch';

interface ThemeModeSwitchProps {
  value: PaletteMode;
  onChange: (value: PaletteMode) => void;
}

const ThemeModeSwitch: FC<ThemeModeSwitchProps> = ({ value, onChange }) => {
  const handleChange = (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const newValue = checked ? 'light' : 'dark';
    onChange(newValue);
  };

  return (
    <MuiSwitch
      checked={value === 'light'}
      checkedIcon={<LightModeIcon fontSize="small" />}
      color="warning"
      icon={<DarkModeIcon fontSize="small" />}
      sx={{
        width: 42,
        height: 26,
        padding: 0,

        '& .MuiSwitch-switchBase': {
          color: 'ochre.main',
          padding: 0,
          margin: 0.375,
          transitionDuration: '300ms',

          '&.Mui-checked': {
            color: 'background.paper',
            transform: 'translateX(16px)',

            '& + .MuiSwitch-track': {
              border: 0,
              backgroundColor: 'ochre.main',
              opacity: 1,
            },

            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
        },

        '& .MuiSwitch-thumb': {
          width: 24,
          height: 24,
        },

        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          backgroundColor: 'grey.700',
          opacity: 1,
        },
      }}
      value={value}
      onChange={handleChange}
    />
  );
};

export default ThemeModeSwitch;
