import {
  Box_default,
  MenuItem_default,
  TextField_default
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
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/mui.select.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.select.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.select.tsx"
  );
  import.meta.hot.lastModified = "1746377054448.1318";
}
function SelectDemo() {
  _s();
  const [countries, setCountries] = (0, import_react.useState)([]);
  console.log(countries);
  const handleChange = (event) => {
    const value = typeof event.target.value === "string" ? event.target.value.split(",") : event.target.value;
    setCountries(value);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { width: "250px", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { label: "Select country", select: true, value: countries, onChange: handleChange, fullWidth: true, SelectProps: {
    multiple: true
  }, size: "small", helperText: "pls select country", color: "secondary", error: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, { value: "in", children: " India" }, void 0, false, {
      fileName: "app/routes/mui.select.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, { value: "us", children: " USA" }, void 0, false, {
      fileName: "app/routes/mui.select.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, { value: "au", children: " Australia" }, void 0, false, {
      fileName: "app/routes/mui.select.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.select.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.select.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.select.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(SelectDemo, "gwqfcWgq2x/FJogDCUDGbZQoAlg=");
_c = SelectDemo;
var _c;
$RefreshReg$(_c, "SelectDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SelectDemo as default
};
//# sourceMappingURL=/build/routes/mui.select-ABUFUYCH.js.map
