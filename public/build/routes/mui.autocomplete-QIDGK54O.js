import {
  Autocomplete_default,
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

// app/routes/mui.autocomplete.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.autocomplete.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.autocomplete.tsx"
  );
  import.meta.hot.lastModified = "1746376378399.0598";
}
var skills = ["Test,", "html", "js", "ts", "phyton"];
var skillsOptions = skills.map((item, index) => ({
  id: index + 1,
  label: item
}));
function AutocompleteDemo() {
  _s();
  const [value, setValue] = (0, import_react.useState)(null);
  const [skill, setSkill] = (0, import_react.useState)(null);
  console.log({
    value
  });
  console.log({
    skill
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { spacing: 2, width: "240px", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Autocomplete_default, { options: skills, value, onChange: (event, newValue) => setValue(newValue), renderInput: (params) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { ...params, label: "MuiAuticomplete" }, void 0, false, {
      fileName: "app/routes/mui.autocomplete.tsx",
      lineNumber: 40,
      columnNumber: 126
    }, this), freeSolo: true }, void 0, false, {
      fileName: "app/routes/mui.autocomplete.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Autocomplete_default, { options: skillsOptions.length ? skillsOptions : [], value: skill, onChange: (event, newValue) => setSkill(newValue), renderInput: (params) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { ...params, label: "rest" }, void 0, false, {
      fileName: "app/routes/mui.autocomplete.tsx",
      lineNumber: 42,
      columnNumber: 161
    }, this) }, void 0, false, {
      fileName: "app/routes/mui.autocomplete.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.autocomplete.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s(AutocompleteDemo, "Ughnrkd+33u72FValJKLmT0zwV0=");
_c = AutocompleteDemo;
var _c;
$RefreshReg$(_c, "AutocompleteDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AutocompleteDemo as default
};
//# sourceMappingURL=/build/routes/mui.autocomplete-QIDGK54O.js.map
