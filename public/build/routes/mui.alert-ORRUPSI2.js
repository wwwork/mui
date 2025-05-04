import {
  Check_default
} from "/build/_shared/chunk-YDPTG5UG.js";
import "/build/_shared/chunk-NRTV55SN.js";
import "/build/_shared/chunk-DTJNWNJD.js";
import "/build/_shared/chunk-MQSBA43Q.js";
import {
  AlertTitle_default,
  Alert_default,
  Stack_default
} from "/build/_shared/chunk-VVCGEEIT.js";
import "/build/_shared/chunk-NWPYD5HA.js";
import "/build/_shared/chunk-Z47PA6EN.js";
import {
  Button_default
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

// app/routes/mui.alert.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.alert.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.alert.tsx"
  );
  import.meta.hot.lastModified = "1746376360900.863";
}
function AlertDemo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { spacing: 2, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, { security: "warning", onClose: () => alert("close"), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertTitle_default, { children: "AlertTitle" }, void 0, false, {
        fileName: "app/routes/mui.alert.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      "This an error"
    ] }, void 0, true, {
      fileName: "app/routes/mui.alert.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, { security: "info", children: "This an error" }, void 0, false, {
      fileName: "app/routes/mui.alert.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, { variant: "outlined", security: "error", action: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { color: "inherit", children: "test" }, void 0, false, {
      fileName: "app/routes/mui.alert.tsx",
      lineNumber: 30,
      columnNumber: 58
    }, this), children: "This an error" }, void 0, false, {
      fileName: "app/routes/mui.alert.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, { variant: "filled", security: "error", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check_default, {}, void 0, false, {
      fileName: "app/routes/mui.alert.tsx",
      lineNumber: 33,
      columnNumber: 54
    }, this), children: "This an error" }, void 0, false, {
      fileName: "app/routes/mui.alert.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.alert.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = AlertDemo;
var _c;
$RefreshReg$(_c, "AlertDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AlertDemo as default
};
//# sourceMappingURL=/build/routes/mui.alert-ORRUPSI2.js.map
