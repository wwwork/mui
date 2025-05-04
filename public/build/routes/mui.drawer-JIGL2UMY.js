import {
  Menu_default
} from "/build/_shared/chunk-DTJNWNJD.js";
import "/build/_shared/chunk-MQSBA43Q.js";
import {
  Box_default,
  Drawer_default,
  IconButton_default
} from "/build/_shared/chunk-VVCGEEIT.js";
import "/build/_shared/chunk-NWPYD5HA.js";
import "/build/_shared/chunk-Z47PA6EN.js";
import "/build/_shared/chunk-BD5NIOCF.js";
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

// app/routes/mui.drawer.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.drawer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.drawer.tsx"
  );
  import.meta.hot.lastModified = "1746376602098.163";
}
function DrawerDemo() {
  _s();
  const [iSDrawerOpen, setIsDrawerOpen] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, { size: "large", edge: "start", color: "inherit", "aria-lebel": "logo", onClick: () => setIsDrawerOpen(true), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu_default, {}, void 0, false, {
      fileName: "app/routes/mui.drawer.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/mui.drawer.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Drawer_default, { anchor: "left", open: iSDrawerOpen, onClose: () => setIsDrawerOpen(false), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { p: 3, width: "250px", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "h6", component: "div", role: "presentation", textAlign: "center", children: "Side panel" }, void 0, false, {
      fileName: "app/routes/mui.drawer.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/mui.drawer.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/mui.drawer.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.drawer.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_s(DrawerDemo, "zg1OVt3KuOqhXnzpVPHGmiI8KuA=");
_c = DrawerDemo;
var _c;
$RefreshReg$(_c, "DrawerDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DrawerDemo as default
};
//# sourceMappingURL=/build/routes/mui.drawer-JIGL2UMY.js.map
