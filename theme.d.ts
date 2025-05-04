import { PaletteColorOptions, PaletteColor } from "@mui/material";
import React from "react";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    defaultSecondary?: PaletteColor;
  }

  interface PaletteOptions {
    defaultSecondary?: PaletteColorOptions;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface PaletteColor {
    darker?: string;
  }
}
