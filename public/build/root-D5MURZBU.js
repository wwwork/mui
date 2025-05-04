import {
  ClientStyleContext_default,
  theme_default
} from "/build/_shared/chunk-ASRFPAMD.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError
} from "/build/_shared/chunk-QYF36LJ2.js";
import {
  Box_default,
  Container_default
} from "/build/_shared/chunk-VVCGEEIT.js";
import {
  Link_default
} from "/build/_shared/chunk-NWPYD5HA.js";
import "/build/_shared/chunk-Z47PA6EN.js";
import {
  SvgIcon_default,
  useEnhancedEffect_default
} from "/build/_shared/chunk-BD5NIOCF.js";
import {
  Typography_default,
  withEmotionCache
} from "/build/_shared/chunk-6FKJNZ6L.js";
import "/build/_shared/chunk-B43JI2TA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-76XV2BQS.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/root.tsx
var React = __toESM(require_react());

// app/src/ProTip.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/src/ProTip.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/src/ProTip.tsx"
  );
  import.meta.hot.lastModified = "1744717191000";
}
function LightBulbIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SvgIcon_default, { ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" }, void 0, false, {
    fileName: "app/src/ProTip.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/src/ProTip.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = LightBulbIcon;
function ProTip() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { sx: {
    mt: 6,
    mb: 3,
    color: "text.secondary"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LightBulbIcon, { sx: {
      mr: 1,
      verticalAlign: "middle"
    } }, void 0, false, {
      fileName: "app/src/ProTip.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    "Pro tip: See more ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link_default, { href: "https://mui.com/material-ui/getting-started/templates/", children: "templates" }, void 0, false, {
      fileName: "app/src/ProTip.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    " in the Material\xA0UI documentation."
  ] }, void 0, true, {
    fileName: "app/src/ProTip.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c2 = ProTip;
var _c;
var _c2;
$RefreshReg$(_c, "LightBulbIcon");
$RefreshReg$(_c2, "ProTip");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/src/Copyright.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/src/Copyright.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/src/Copyright.tsx"
  );
  import.meta.hot.lastModified = "1744717191000";
}
function Copyright() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Typography_default, { variant: "body2", align: "center", sx: {
    color: "text.secondary"
  }, children: [
    "Copyright \xA9 ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link_default, { color: "inherit", href: "https://mui.com/", children: "Your Website" }, void 0, false, {
      fileName: "app/src/Copyright.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    " ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    "."
  ] }, void 0, true, {
    fileName: "app/src/Copyright.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c3 = Copyright;
var _c3;
$RefreshReg$(_c3, "Copyright");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/src/Layout.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/src/Layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/src/Layout.tsx"
  );
  import.meta.hot.lastModified = "1744717191000";
}
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Container_default, { maxWidth: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box_default, { sx: {
    my: 4
  }, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProTip, {}, void 0, false, {
      fileName: "app/src/Layout.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Copyright, {}, void 0, false, {
      fileName: "app/src/Layout.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/src/Layout.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/src/Layout.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c4 = Layout;
var _c4;
$RefreshReg$(_c4, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
  import.meta.hot.lastModified = "1744717191000";
}
var Document = _s(withEmotionCache(_c5 = _s(({
  children,
  title
}, emotionCache) => {
  _s();
  const clientStyleData = React.useContext(ClientStyleContext_default);
  useEnhancedEffect_default(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData.reset();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "theme-color", content: theme_default.palette.primary.main }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      title ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("title", { children: title }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 18
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "emotion-insertion-point", content: "emotion-insertion-point" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}, "DLeJk/J5GiFhAF52FJ/3oWg5qx4=", false, function() {
  return [useEnhancedEffect_default];
})), "DLeJk/J5GiFhAF52FJ/3oWg5qx4=", false, function() {
  return [useEnhancedEffect_default];
});
_c22 = Document;
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 83,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 82,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 81,
    columnNumber: 10
  }, this);
}
_c32 = App;
function ErrorBoundary() {
  _s2();
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    let message;
    switch (error.status) {
      case 401:
        message = /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that you do not have access to." }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 97,
          columnNumber: 19
        }, this);
        break;
      case 404:
        message = /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that does not exist." }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 100,
          columnNumber: 19
        }, this);
        break;
      default:
        throw new Error(error.data || error.statusText);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { title: `${error.status} ${error.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: [
        error.status,
        ": ",
        error.statusText
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      message
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 105,
      columnNumber: 12
    }, this);
  }
  if (error instanceof Error) {
    console.error(error);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "There was an error" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 119,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: error.message }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 120,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("hr", {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 121,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Hey, developer, you should replace this with what you want your users to see." }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 122,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 118,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 116,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "Unknown Error" }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 127,
    columnNumber: 10
  }, this);
}
_s2(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c42 = ErrorBoundary;
var _c5;
var _c22;
var _c32;
var _c42;
$RefreshReg$(_c5, "Document$withEmotionCache");
$RefreshReg$(_c22, "Document");
$RefreshReg$(_c32, "App");
$RefreshReg$(_c42, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  App as default
};
//# sourceMappingURL=/build/root-D5MURZBU.js.map
