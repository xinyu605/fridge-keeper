import { PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette.d.ts' {
  interface Palette {
    ochre: PaletteColor;
  }

  interface PaletteOptions {
    ochre?: PaletteColorOptions;
  }
}
