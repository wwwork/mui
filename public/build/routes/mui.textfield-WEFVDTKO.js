import {
  InputAdornment_default,
  Stack_default,
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

// app/routes/mui.textfield.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.textfield.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.textfield.tsx"
  );
  import.meta.hot.lastModified = "1746377131901.9614";
}
function TextFieldDemo() {
  _s();
  const [value, setValue] = (0, import_react.useState)("");
  const handleChange = (event) => {
    console.log(event.currentTarget.value);
    setValue(event.currentTarget.value);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { spacing: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { direction: "row", spacing: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { label: "test", variant: "outlined" }, void 0, false, {
        fileName: "app/routes/mui.textfield.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { label: "test", variant: "filled" }, void 0, false, {
        fileName: "app/routes/mui.textfield.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { label: "test", variant: "standard" }, void 0, false, {
        fileName: "app/routes/mui.textfield.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mui.textfield.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { direction: "row", spacing: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { label: "test1ss", variant: "outlined", size: "small", color: "warning", value, error: !value, helperText: !value ? "Require" : "Error happen", onChange: handleChange }, void 0, false, {
      fileName: "app/routes/mui.textfield.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/mui.textfield.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { direction: "row", spacing: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { label: "amount", InputProps: {
        startAdornment: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputAdornment_default, { position: "start", children: "$" }, void 0, false, {
          fileName: "app/routes/mui.textfield.tsx",
          lineNumber: 42,
          columnNumber: 25
        }, this)
      } }, void 0, false, {
        fileName: "app/routes/mui.textfield.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { label: "weight", InputProps: {
        endAdornment: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputAdornment_default, { position: "end", children: "kg" }, void 0, false, {
          fileName: "app/routes/mui.textfield.tsx",
          lineNumber: 45,
          columnNumber: 23
        }, this)
      } }, void 0, false, {
        fileName: "app/routes/mui.textfield.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mui.textfield.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { direction: "row", spacing: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { label: "test", variant: "outlined", size: "small", color: "warning", required: true, type: "password", value: "password" }, void 0, false, {
        fileName: "app/routes/mui.textfield.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { label: "test", variant: "outlined", size: "small", color: "warning", helperText: "helper text", disabled: true, error: true }, void 0, false, {
        fileName: "app/routes/mui.textfield.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { label: "readonly", variant: "outlined", size: "small", color: "warning", helperText: "readonly", InputProps: {
        readOnly: true
      } }, void 0, false, {
        fileName: "app/routes/mui.textfield.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mui.textfield.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.textfield.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_s(TextFieldDemo, "dBtK6I2q1m3rcfzPBa0nrbv/iCI=");
_c = TextFieldDemo;
var _c;
$RefreshReg$(_c, "TextFieldDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TextFieldDemo as default
};
//# sourceMappingURL=/build/routes/mui.textfield-WEFVDTKO.js.map
