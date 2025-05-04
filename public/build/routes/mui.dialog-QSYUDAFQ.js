import {
  DialogActions_default,
  DialogContentText_default,
  DialogContent_default,
  DialogTitle_default,
  Dialog_default
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

// app/routes/mui.dialog.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.dialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.dialog.tsx"
  );
  import.meta.hot.lastModified = "1746376589628.2312";
}
function DialogDemo() {
  _s();
  const [open, setOpen] = (0, import_react.useState)(false);
  const handleClose = () => {
    setOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { onClick: () => setOpen(true), children: "Submit" }, void 0, false, {
      fileName: "app/routes/mui.dialog.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog_default, { open, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle_default, { children: "Lorem title" }, void 0, false, {
        fileName: "app/routes/mui.dialog.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContentText_default, { children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias maiores quo expedita porro quidem, totam reprehenderit! Placeat nostrum ab minima optio ullam cum recusandae quibusdam, quidem fugiat non blanditiis. Enim." }, void 0, false, {
        fileName: "app/routes/mui.dialog.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/mui.dialog.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogActions_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { onClick: handleClose, children: "Submit" }, void 0, false, {
          fileName: "app/routes/mui.dialog.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { onClick: handleClose, children: "Cancel" }, void 0, false, {
          fileName: "app/routes/mui.dialog.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/mui.dialog.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mui.dialog.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.dialog.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_s(DialogDemo, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = DialogDemo;
var _c;
$RefreshReg$(_c, "DialogDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DialogDemo as default
};
//# sourceMappingURL=/build/routes/mui.dialog-QSYUDAFQ.js.map
