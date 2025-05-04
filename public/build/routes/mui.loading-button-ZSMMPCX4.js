import {
  LoadingButton_default
} from "/build/_shared/chunk-WHYBWGUG.js";
import {
  Stack_default
} from "/build/_shared/chunk-VVCGEEIT.js";
import "/build/_shared/chunk-NWPYD5HA.js";
import "/build/_shared/chunk-Z47PA6EN.js";
import {
  SvgIcon_default
} from "/build/_shared/chunk-BD5NIOCF.js";
import "/build/_shared/chunk-6FKJNZ6L.js";
import "/build/_shared/chunk-B43JI2TA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-76XV2BQS.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/mui.loading-button.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.loading-button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.loading-button.tsx"
  );
  import.meta.hot.lastModified = "1745852988403.1575";
}
function LoadingButtonDemo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { width: "330px", spacing: 2, direction: "row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingButton_default, { variant: "outlined", children: "Submit" }, void 0, false, {
      fileName: "app/routes/mui.loading-button.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingButton_default, { variant: "outlined", loading: true, loadingPosition: "start", startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SvgIcon_default, {}, void 0, false, {
      fileName: "app/routes/mui.loading-button.tsx",
      lineNumber: 26,
      columnNumber: 84
    }, this), children: "SvgIcon" }, void 0, false, {
      fileName: "app/routes/mui.loading-button.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingButton_default, { variant: "outlined", loadingPosition: "end", startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SvgIcon_default, {}, void 0, false, {
      fileName: "app/routes/mui.loading-button.tsx",
      lineNumber: 29,
      columnNumber: 74
    }, this), children: "SvgIcon" }, void 0, false, {
      fileName: "app/routes/mui.loading-button.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingButton_default, { variant: "outlined", loadingIndicator: "loading", children: "Submit" }, void 0, false, {
      fileName: "app/routes/mui.loading-button.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingButton_default, { loading: true, variant: "outlined", children: "Cancel" }, void 0, false, {
      fileName: "app/routes/mui.loading-button.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.loading-button.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = LoadingButtonDemo;
var _c;
$RefreshReg$(_c, "LoadingButtonDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LoadingButtonDemo as default
};
//# sourceMappingURL=/build/routes/mui.loading-button-ZSMMPCX4.js.map
