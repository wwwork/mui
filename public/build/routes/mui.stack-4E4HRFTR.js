import {
  Box_default,
  Divider_default,
  Stack_default
} from "/build/_shared/chunk-VVCGEEIT.js";
import "/build/_shared/chunk-NWPYD5HA.js";
import "/build/_shared/chunk-Z47PA6EN.js";
import "/build/_shared/chunk-BD5NIOCF.js";
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

// app/routes/mui.stack.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.stack.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.stack.tsx"
  );
  import.meta.hot.lastModified = "1746377085213.41";
}
function StackDemo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { sx: {
    border: "1px solid",
    direction: "revert",
    gap: "5px"
  }, direction: "row", spacing: 2, divider: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider_default, { orientation: "vertical", flexItem: true }, void 0, false, {
    fileName: "app/routes/mui.stack.tsx",
    lineNumber: 27,
    columnNumber: 45
  }, this), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { sx: {
      backgroundColor: "primary.main",
      color: "red",
      height: "100px",
      width: "100px",
      "&:hover": {
        backgroundColor: "primary.light"
      }
    }, children: "Test" }, void 0, false, {
      fileName: "app/routes/mui.stack.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { sx: {
      backgroundColor: "primary.light",
      color: "green",
      height: "100px",
      width: "100px",
      "&:hover": {
        backgroundColor: "primary.main"
      }
    }, children: "Test" }, void 0, false, {
      fileName: "app/routes/mui.stack.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.stack.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = StackDemo;
var _c;
$RefreshReg$(_c, "StackDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StackDemo as default
};
//# sourceMappingURL=/build/routes/mui.stack-4E4HRFTR.js.map
