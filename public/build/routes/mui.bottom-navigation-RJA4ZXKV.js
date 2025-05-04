import {
  Favorite_default,
  Home_default,
  Person_default
} from "/build/_shared/chunk-YDPTG5UG.js";
import "/build/_shared/chunk-NRTV55SN.js";
import "/build/_shared/chunk-DTJNWNJD.js";
import "/build/_shared/chunk-MQSBA43Q.js";
import {
  BottomNavigationAction_default,
  BottomNavigation_default
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

// app/routes/mui.bottom-navigation.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.bottom-navigation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.bottom-navigation.tsx"
  );
  import.meta.hot.lastModified = "1746376455637.3953";
}
function BottomNavigationDemo() {
  _s();
  const [value, setValue] = (0, import_react.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BottomNavigation_default, { sx: {
    position: "absolute",
    bottom: 0
  }, value, onChange: (event, newValue) => setValue(newValue), showLabels: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BottomNavigationAction_default, { label: "Home", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Home_default, {}, void 0, false, {
      fileName: "app/routes/mui.bottom-navigation.tsx",
      lineNumber: 32,
      columnNumber: 50
    }, this) }, void 0, false, {
      fileName: "app/routes/mui.bottom-navigation.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BottomNavigationAction_default, { label: "Favorites", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Favorite_default, {}, void 0, false, {
      fileName: "app/routes/mui.bottom-navigation.tsx",
      lineNumber: 33,
      columnNumber: 55
    }, this) }, void 0, false, {
      fileName: "app/routes/mui.bottom-navigation.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BottomNavigationAction_default, { label: "Profile", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Person_default, {}, void 0, false, {
      fileName: "app/routes/mui.bottom-navigation.tsx",
      lineNumber: 34,
      columnNumber: 53
    }, this) }, void 0, false, {
      fileName: "app/routes/mui.bottom-navigation.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.bottom-navigation.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_s(BottomNavigationDemo, "qPBOvRc2Co1iWTsdTL0g7j/rpjU=");
_c = BottomNavigationDemo;
var _c;
$RefreshReg$(_c, "BottomNavigationDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  BottomNavigationDemo as default
};
//# sourceMappingURL=/build/routes/mui.bottom-navigation-RJA4ZXKV.js.map
