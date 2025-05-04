import {
  TabContext,
  TabList_default,
  TabPanel_default
} from "/build/_shared/chunk-WHYBWGUG.js";
import {
  Favorite_default
} from "/build/_shared/chunk-YDPTG5UG.js";
import "/build/_shared/chunk-NRTV55SN.js";
import "/build/_shared/chunk-DTJNWNJD.js";
import "/build/_shared/chunk-MQSBA43Q.js";
import {
  Box_default,
  Tab_default
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

// app/routes/mui.tab.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.tab.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.tab.tsx"
  );
  import.meta.hot.lastModified = "1746377102893.529";
}
function TabDemo() {
  _s();
  const [value, setValue] = (0, import_react.useState)("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { bgcolor: "success", p: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabContext, { value, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { sx: {
      borderBottom: 1,
      borderColor: "divider"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabList_default, { "aria-label": "MUI Tabs demo", onChange: handleChange, textColor: "secondary", indicatorColor: "secondary", variant: "scrollable", scrollButtons: "auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default, { label: "Tab one", value: "1", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Favorite_default, {}, void 0, false, {
        fileName: "app/routes/mui.tab.tsx",
        lineNumber: 40,
        columnNumber: 52
      }, this), iconPosition: "start" }, void 0, false, {
        fileName: "app/routes/mui.tab.tsx",
        lineNumber: 40,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default, { label: "Tab two", value: "2", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Favorite_default, {}, void 0, false, {
        fileName: "app/routes/mui.tab.tsx",
        lineNumber: 41,
        columnNumber: 52
      }, this), disabled: true, iconPosition: "start" }, void 0, false, {
        fileName: "app/routes/mui.tab.tsx",
        lineNumber: 41,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default, { label: "Tab three", value: "3", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Favorite_default, {}, void 0, false, {
        fileName: "app/routes/mui.tab.tsx",
        lineNumber: 42,
        columnNumber: 54
      }, this), iconPosition: "start" }, void 0, false, {
        fileName: "app/routes/mui.tab.tsx",
        lineNumber: 42,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default, { label: "Tab four", value: "4", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Favorite_default, {}, void 0, false, {
        fileName: "app/routes/mui.tab.tsx",
        lineNumber: 43,
        columnNumber: 53
      }, this), iconPosition: "start" }, void 0, false, {
        fileName: "app/routes/mui.tab.tsx",
        lineNumber: 43,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default, { label: "Tab five", value: "5", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Favorite_default, {}, void 0, false, {
        fileName: "app/routes/mui.tab.tsx",
        lineNumber: 44,
        columnNumber: 53
      }, this), disabled: true, iconPosition: "start" }, void 0, false, {
        fileName: "app/routes/mui.tab.tsx",
        lineNumber: 44,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default, { label: "Tab six", value: "6", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Favorite_default, {}, void 0, false, {
        fileName: "app/routes/mui.tab.tsx",
        lineNumber: 45,
        columnNumber: 52
      }, this), iconPosition: "start" }, void 0, false, {
        fileName: "app/routes/mui.tab.tsx",
        lineNumber: 45,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mui.tab.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/mui.tab.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabPanel_default, { value: "1", children: "Panel one" }, void 0, false, {
      fileName: "app/routes/mui.tab.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabPanel_default, { value: "2", children: "Panel two" }, void 0, false, {
      fileName: "app/routes/mui.tab.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabPanel_default, { value: "3", children: "Panel three" }, void 0, false, {
      fileName: "app/routes/mui.tab.tsx",
      lineNumber: 50,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabPanel_default, { value: "4", children: "Panel four" }, void 0, false, {
      fileName: "app/routes/mui.tab.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabPanel_default, { value: "5", children: "Panel five" }, void 0, false, {
      fileName: "app/routes/mui.tab.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabPanel_default, { value: "6", children: "Panel six" }, void 0, false, {
      fileName: "app/routes/mui.tab.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.tab.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.tab.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.tab.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(TabDemo, "66qkskYDixovVgEci0u+VP3yF88=");
_c = TabDemo;
var _c;
$RefreshReg$(_c, "TabDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TabDemo as default
};
//# sourceMappingURL=/build/routes/mui.tab-NXPZDODA.js.map
