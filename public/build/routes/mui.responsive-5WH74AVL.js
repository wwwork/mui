import {
  Box_default
} from "/build/_shared/chunk-VVCGEEIT.js";
import "/build/_shared/chunk-NWPYD5HA.js";
import "/build/_shared/chunk-Z47PA6EN.js";
import "/build/_shared/chunk-BD5NIOCF.js";
import {
  styled_default
} from "/build/_shared/chunk-6FKJNZ6L.js";
import "/build/_shared/chunk-B43JI2TA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-76XV2BQS.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/mui.responsive.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.responsive.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.responsive.tsx"
  );
  import.meta.hot.lastModified = "1746376214928.0034";
}
var StyledBox = styled_default(Box_default)(({
  theme
}) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.palette.defaultSecondary?.darker
}));
_c = StyledBox;
function ResponsiveDemo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { sx: {
      width: {
        xs: 100,
        // 0
        sm: 200,
        // 600
        md: 300,
        // 900
        lg: 400,
        // 1200
        xl: 500
        // 1536
      },
      height: "300px",
      bgcolor: "secondary.main"
    } }, void 0, false, {
      fileName: "app/routes/mui.responsive.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledBox, {}, void 0, false, {
      fileName: "app/routes/mui.responsive.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.responsive.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c2 = ResponsiveDemo;
var _c;
var _c2;
$RefreshReg$(_c, "StyledBox");
$RefreshReg$(_c2, "ResponsiveDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ResponsiveDemo as default
};
//# sourceMappingURL=/build/routes/mui.responsive-5WH74AVL.js.map
