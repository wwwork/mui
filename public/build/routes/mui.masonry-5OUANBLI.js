import {
  Masonry_default
} from "/build/_shared/chunk-WHYBWGUG.js";
import {
  Box_default,
  Paper_default
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
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/mui.masonry.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.masonry.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.masonry.tsx"
  );
  import.meta.hot.lastModified = "1746201158033.238";
}
var height = [150, 40, 30, 100, 50, 150, 40, 30, 100, 50];
function MasonryDemo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { sx: {
    width: 500,
    minHeight: 400
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Masonry_default, { columns: 4, spacing: 1, children: height.map((height2, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper_default, { sx: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: height2,
    border: "1px solid"
  }, children: index + 1 }, index, false, {
    fileName: "app/routes/mui.masonry.tsx",
    lineNumber: 30,
    columnNumber: 40
  }, this)) }, void 0, false, {
    fileName: "app/routes/mui.masonry.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.masonry.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = MasonryDemo;
var _c;
$RefreshReg$(_c, "MasonryDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MasonryDemo as default
};
//# sourceMappingURL=/build/routes/mui.masonry-5OUANBLI.js.map
