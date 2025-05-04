import {
  Box_default,
  FormControlLabel_default,
  FormControl_default,
  FormHelperText_default,
  FormLabel_default,
  RadioGroup_default,
  Radio_default
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

// app/routes/mui.radio-button.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.radio-button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.radio-button.tsx"
  );
  import.meta.hot.lastModified = "1746376734838.8667";
}
function RadioButtonDemo() {
  _s();
  const [value, setValue] = (0, import_react.useState)("");
  console.log({
    value
  });
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormLabel_default, { id: "job-exp-label", children: "Years of experience" }, void 0, false, {
      fileName: "app/routes/mui.radio-button.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup_default, { name: "job-experience", "aria-label": "job-exp-label", value, onChange: handleChange, row: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, { control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio_default, { size: "small" }, void 0, false, {
        fileName: "app/routes/mui.radio-button.tsx",
        lineNumber: 38,
        columnNumber: 40
      }, this), label: "0-2", value: "0-2" }, void 0, false, {
        fileName: "app/routes/mui.radio-button.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, { control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio_default, { size: "small" }, void 0, false, {
        fileName: "app/routes/mui.radio-button.tsx",
        lineNumber: 39,
        columnNumber: 40
      }, this), label: "3-4", value: "3-4" }, void 0, false, {
        fileName: "app/routes/mui.radio-button.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, { control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio_default, { size: "small", color: "info" }, void 0, false, {
        fileName: "app/routes/mui.radio-button.tsx",
        lineNumber: 40,
        columnNumber: 40
      }, this), label: "5-6", value: "5-6" }, void 0, false, {
        fileName: "app/routes/mui.radio-button.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mui.radio-button.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormHelperText_default, { children: "Test of form helper text" }, void 0, false, {
      fileName: "app/routes/mui.radio-button.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.radio-button.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.radio-button.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.radio-button.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s(RadioButtonDemo, "dBtK6I2q1m3rcfzPBa0nrbv/iCI=");
_c = RadioButtonDemo;
var _c;
$RefreshReg$(_c, "RadioButtonDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  RadioButtonDemo as default
};
//# sourceMappingURL=/build/routes/mui.radio-button-IZP3C7OT.js.map
