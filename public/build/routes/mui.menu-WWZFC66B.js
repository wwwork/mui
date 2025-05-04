import {
  CatchingPokemon_default,
  KeyboardArrowDown_default
} from "/build/_shared/chunk-YDPTG5UG.js";
import "/build/_shared/chunk-NRTV55SN.js";
import "/build/_shared/chunk-DTJNWNJD.js";
import "/build/_shared/chunk-MQSBA43Q.js";
import {
  AppBar_default,
  Box_default,
  IconButton_default,
  MenuItem_default,
  Menu_default,
  Stack_default,
  Toolbar_default
} from "/build/_shared/chunk-VVCGEEIT.js";
import "/build/_shared/chunk-NWPYD5HA.js";
import "/build/_shared/chunk-Z47PA6EN.js";
import {
  Button_default
} from "/build/_shared/chunk-BD5NIOCF.js";
import {
  Typography_default
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

// app/routes/mui.menu.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.menu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.menu.tsx"
  );
  import.meta.hot.lastModified = "1746376686970.2876";
}
function MenuDemo() {
  _s();
  const [anchorEl, setAnchorEl] = (0, import_react.useState)(null);
  const open = Boolean(anchorEl);
  const handleClick = (even) => {
    setAnchorEl(even.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { width: "800px", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppBar_default, { position: "static", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toolbar_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, { size: "large", edge: "start", color: "inherit", "aria-aria-label": "logo", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CatchingPokemon_default, {}, void 0, false, {
      fileName: "app/routes/mui.menu.tsx",
      lineNumber: 150,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "h6", component: "div", sx: {
      flexGrow: 1
    }, children: "POKEMONGO" }, void 0, false, {
      fileName: "app/routes/mui.menu.tsx",
      lineNumber: 151,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { direction: "row", spacing: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { color: "inherit", children: "Home" }, void 0, false, {
        fileName: "app/routes/mui.menu.tsx",
        lineNumber: 157,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { color: "inherit", children: "FAQ" }, void 0, false, {
        fileName: "app/routes/mui.menu.tsx",
        lineNumber: 158,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { color: "inherit", children: "Contact" }, void 0, false, {
        fileName: "app/routes/mui.menu.tsx",
        lineNumber: 159,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { color: "inherit", children: "Features" }, void 0, false, {
        fileName: "app/routes/mui.menu.tsx",
        lineNumber: 160,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { color: "inherit", id: "resources-button", onClick: handleClick, "aria-controls": open ? "resources-menu" : void 0, "aria-aria-haspopup": "true", "aria-expanded": open ? "true" : void 0, endIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeyboardArrowDown_default, {}, void 0, false, {
        fileName: "app/routes/mui.menu.tsx",
        lineNumber: 161,
        columnNumber: 212
      }, this), children: "Res" }, void 0, false, {
        fileName: "app/routes/mui.menu.tsx",
        lineNumber: 161,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu_default, { id: "resources-menu", anchorEl, open, MenuListProps: {
        "aria-labelledby": "resources-button"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, { onClick: handleClose, children: " Blog" }, void 0, false, {
          fileName: "app/routes/mui.menu.tsx",
          lineNumber: 167,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, { onClick: handleClose, children: " Podcast" }, void 0, false, {
          fileName: "app/routes/mui.menu.tsx",
          lineNumber: 168,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/mui.menu.tsx",
        lineNumber: 164,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mui.menu.tsx",
      lineNumber: 156,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.menu.tsx",
    lineNumber: 149,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.menu.tsx",
    lineNumber: 148,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.menu.tsx",
    lineNumber: 147,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.menu.tsx",
    lineNumber: 146,
    columnNumber: 10
  }, this);
}
_s(MenuDemo, "+aMDa7FPcESUyQDF1vq0RSMn4/k=");
_c = MenuDemo;
var _c;
$RefreshReg$(_c, "MenuDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MenuDemo as default
};
//# sourceMappingURL=/build/routes/mui.menu-WWZFC66B.js.map
