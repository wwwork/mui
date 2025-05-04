import {
  colors_exports
} from "/build/_shared/chunk-VVCGEEIT.js";
import {
  createTheme,
  red_default
} from "/build/_shared/chunk-6FKJNZ6L.js";
import {
  createHotContext
} from "/build/_shared/chunk-76XV2BQS.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/src/ClientStyleContext.tsx
var React = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/src/ClientStyleContext.tsx"
  );
  import.meta.hot.lastModified = "1744717191000";
}
var ClientStyleContext_default = React.createContext({
  reset: () => {
  }
});

// app/src/theme.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/src/theme.ts"
  );
  import.meta.hot.lastModified = "1746376225886.4082";
}
var theme = createTheme({
  status: {
    danger: "#ffcc00"
  },
  cssVariables: true,
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: colors_exports.orange[500]
    },
    defaultSecondary: {
      main: colors_exports.grey[500],
      darker: colors_exports.grey[900]
    },
    error: {
      main: red_default.A400
    }
  }
});
var theme_default = theme;

export {
  ClientStyleContext_default,
  theme_default
};
//# sourceMappingURL=/build/_shared/chunk-ASRFPAMD.js.map
