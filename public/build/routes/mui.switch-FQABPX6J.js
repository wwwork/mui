import {
  Box_default,
  FormControlLabel_default,
  Switch_default
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

// app/routes/mui.switch.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.switch.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.switch.tsx"
  );
  import.meta.hot.lastModified = "1746377095665.66";
}
function SwitchDemo() {
  _s();
  const [checked, setChecked] = (0, import_react.useState)(false);
  console.log({
    checked
  });
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, { label: "DArk mode", control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch_default, { checked: !!checked, onChange: handleChange, size: "small", color: "warning" }, void 0, false, {
    fileName: "app/routes/mui.switch.tsx",
    lineNumber: 34,
    columnNumber: 52
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.switch.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.switch.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s(SwitchDemo, "OiiR1BYWvMsLHMiD2uYkeM3TCO0=");
_c = SwitchDemo;
var _c;
$RefreshReg$(_c, "SwitchDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SwitchDemo as default
};
//# sourceMappingURL=/build/routes/mui.switch-FQABPX6J.js.map
