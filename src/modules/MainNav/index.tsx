import { type FC } from 'react';
import { Button, type PaletteMode } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import ThemeModeSwitch from '@/modules/MainNav/ThemeSwitch';

interface MainNavProps {
  mode: PaletteMode;
  onChange: (value: PaletteMode) => void;
}

const MainNav: FC<MainNavProps> = ({ mode, onChange }) => {
  console.log(mode);
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar
        variant="dense"
        className="flex justify-end bg-white dark:bg-gray-700"
      >
        <div className="flex gap-2 items-center">
          <ThemeModeSwitch value={mode} onChange={onChange} />
          {/* TODO: replace with i18n t function */}
          <Button>LOGIN</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MainNav;
