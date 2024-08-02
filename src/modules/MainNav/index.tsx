import { type FC } from 'react';
import { Button, type PaletteMode } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import ThemeModeSwitch from '@/modules/MainNav/ThemeSwitch';
import { useTranslation } from '@/i18n/client';
import { LngRouteProps } from '@/types/page';

interface MainNavProps extends LngRouteProps {
  mode: PaletteMode;
  onChange: (value: PaletteMode) => void;
}

const MainNav: FC<MainNavProps> = ({ mode, params: { lng }, onChange }) => {
  const { t } = useTranslation(lng, 'main');

  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar
        variant="dense"
        className="flex justify-end bg-white dark:bg-gray-700"
      >
        <div className="flex gap-2 items-center">
          <ThemeModeSwitch value={mode} onChange={onChange} />
          <Button>{t('login')}</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MainNav;
