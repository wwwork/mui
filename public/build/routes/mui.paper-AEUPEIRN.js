import {
  Box_default,
  Divider_default,
  Paper_default,
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

// app/routes/mui.paper.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.paper.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.paper.tsx"
  );
  import.meta.hot.lastModified = "1746376722337.3882";
}
function PaperDemo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper_default, { elevation: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { sx: {
    direction: "revert",
    gap: "5px"
  }, direction: "row", spacing: 2, divider: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider_default, { orientation: "vertical", flexItem: true }, void 0, false, {
    fileName: "app/routes/mui.paper.tsx",
    lineNumber: 27,
    columnNumber: 47
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { sx: {
    backgroundColor: "primary.main",
    color: "red",
    height: "100px",
    width: "100px",
    padding: "16px",
    "&:hover": {
      backgroundColor: "primary.light"
    }
  }, children: "Test" }, void 0, false, {
    fileName: "app/routes/mui.paper.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.paper.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.paper.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = PaperDemo;
var _c;
$RefreshReg$(_c, "PaperDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PaperDemo as default
};
//# sourceMappingURL=/build/routes/mui.paper-AEUPEIRN.js.map
