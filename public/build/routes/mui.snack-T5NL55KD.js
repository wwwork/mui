import {
  Alert_default,
  Snackbar_default
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
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/mui.snack.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.snack.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.snack.tsx"
  );
  import.meta.hot.lastModified = "1745846860891.5933";
}
var SnackbarAlert = (0, import_react.forwardRef)(_c = function SnaBarAlert(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, { elevation: 4, ref, ...props }, void 0, false, {
    fileName: "app/routes/mui.snack.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
});
_c2 = SnackbarAlert;
function Boks() {
  _s();
  const [open, setOpen] = (0, import_react.useState)(false);
  const handleClose = () => {
    setOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { onClick: () => setOpen(true), children: "Submit" }, void 0, false, {
      fileName: "app/routes/mui.snack.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Snackbar_default, { open, autoHideDuration: 6e3, onClose: handleClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SnackbarAlert, { onClose: handleClose, children: "FormSubmitted successfully" }, void 0, false, {
      fileName: "app/routes/mui.snack.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/mui.snack.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.snack.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s(Boks, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c3 = Boks;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "SnackbarAlert$forwardRef");
$RefreshReg$(_c2, "SnackbarAlert");
$RefreshReg$(_c3, "Boks");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Boks as default
};
//# sourceMappingURL=/build/routes/mui.snack-T5NL55KD.js.map
