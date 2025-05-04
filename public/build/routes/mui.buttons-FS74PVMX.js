import {
  FormatBold_default,
  FormatItalic_default,
  FormatUnderlined_default,
  Send_default
} from "/build/_shared/chunk-NRTV55SN.js";
import "/build/_shared/chunk-MQSBA43Q.js";
import {
  ButtonGroup_default,
  IconButton_default,
  Stack_default,
  ToggleButtonGroup_default,
  ToggleButton_default
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

// app/routes/mui.buttons.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.buttons.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.buttons.tsx"
  );
  import.meta.hot.lastModified = "1746376500931.6404";
}
function ButtonDemo() {
  _s();
  const [formats, setFormats] = (0, import_react.useState)(null);
  const handleFormats = (_event, updateFormats) => {
    console.log(updateFormats);
    setFormats(updateFormats);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { spacing: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { spacing: 2, direction: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "text", href: "http://google.com", children: "Button" }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "contained", children: "Button" }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "outlined", children: "Button" }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      "\xA1"
    ] }, void 0, true, {
      fileName: "app/routes/mui.buttons.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { spacing: 2, direction: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "contained", color: "primary", children: "Primary" }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "contained", color: "warning", children: "Warning" }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "contained", color: "error", children: "Error" }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "contained", color: "info", children: "Info" }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "contained", color: "success", children: "Success" }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mui.buttons.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { spacing: 2, direction: "row", display: "block", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "contained", size: "small", children: "Small" }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "contained", size: "medium", children: "Medium" }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "contained", size: "large", children: "Large" }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mui.buttons.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { direction: "row", spacing: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send_default, {}, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 74,
        columnNumber: 28
      }, this), variant: "contained", onClick: () => alert("test"), children: "SendIcon" }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "contained", endIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send_default, {}, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 77,
        columnNumber: 46
      }, this), disableElevation: true, children: "SendIcon" }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, { "aria-label": "Send icon", color: "success", size: "large", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send_default, {}, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mui.buttons.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { direction: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleButtonGroup_default, { exclusive: true, value: formats, onChange: handleFormats, size: "large", color: "warning", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleButton_default, { "aria-label": "bold", value: "bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormatBold_default, {}, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleButton_default, { "aria-label": "Italic", value: "italic", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormatItalic_default, {}, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleButton_default, { "aria-label": "underline", value: "underline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormatUnderlined_default, {}, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mui.buttons.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/mui.buttons.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { direction: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonGroup_default, { "aria-aria-label": "test", variant: "outlined", orientation: "vertical", size: "large", color: "warning", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { children: "Left " }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { children: "Center " }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { children: "Right" }, void 0, false, {
        fileName: "app/routes/mui.buttons.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mui.buttons.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/mui.buttons.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.buttons.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s(ButtonDemo, "53NhuosXKxM1BOZqmWmyn0VbUaU=");
_c = ButtonDemo;
var _c;
$RefreshReg$(_c, "ButtonDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ButtonDemo as default
};
//# sourceMappingURL=/build/routes/mui.buttons-FS74PVMX.js.map
