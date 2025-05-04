import {
  Avatar_default,
  Box_default,
  Skeleton_default,
  Stack_default
} from "/build/_shared/chunk-VVCGEEIT.js";
import "/build/_shared/chunk-NWPYD5HA.js";
import "/build/_shared/chunk-Z47PA6EN.js";
import "/build/_shared/chunk-BD5NIOCF.js";
import {
  Typography_default
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
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/mui.skeleton.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.skeleton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.skeleton.tsx"
  );
  import.meta.hot.lastModified = "1745852284180.543";
}
function SkeletonDemo() {
  _s();
  const [loading, setLoading] = (0, import_react.useState)(true);
  (0, import_react.useEffect)(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3e3);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { width: "230px", children: [
    loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton_default, { variant: "rectangular", width: "256px", height: "144px", animation: "wave" }, void 0, false, {
      fileName: "app/routes/mui.skeleton.tsx",
      lineNumber: 33,
      columnNumber: 18
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://picsum.photos/200/300", alt: "test", width: 256, height: 144 }, void 0, false, {
      fileName: "app/routes/mui.skeleton.tsx",
      lineNumber: 33,
      columnNumber: 101
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { direction: "row", spacing: 1, sx: {
      width: "100%",
      marginTop: "12px"
    }, children: [
      loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton_default, { variant: "circular", width: "40px", height: "40px", animation: "wave" }, void 0, false, {
        fileName: "app/routes/mui.skeleton.tsx",
        lineNumber: 39,
        columnNumber: 20
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar_default, { children: "V" }, void 0, false, {
        fileName: "app/routes/mui.skeleton.tsx",
        lineNumber: 39,
        columnNumber: 98
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { sx: {
        width: "80%"
      }, children: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "body1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton_default, { animation: "wave", variant: "text", width: "100%" }, void 0, false, {
          fileName: "app/routes/mui.skeleton.tsx",
          lineNumber: 46,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/mui.skeleton.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "body2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton_default, { animation: "wave", variant: "text", width: "100%" }, void 0, false, {
          fileName: "app/routes/mui.skeleton.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/mui.skeleton.tsx",
          lineNumber: 48,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/mui.skeleton.tsx",
        lineNumber: 44,
        columnNumber: 22
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "body1", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus" }, void 0, false, {
          fileName: "app/routes/mui.skeleton.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "body2", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem voluptatum unde, quas ipsa quae ducimus sint dolores asperiores libero architecto tempore repudiandae suscipit deleniti enim, laboriosam sequi porro distinctio." }, void 0, false, {
          fileName: "app/routes/mui.skeleton.tsx",
          lineNumber: 55,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/mui.skeleton.tsx",
        lineNumber: 51,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/mui.skeleton.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mui.skeleton.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.skeleton.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(SkeletonDemo, "J7PPXooW06IQ11rfabbvgk72KFw=");
_c = SkeletonDemo;
var _c;
$RefreshReg$(_c, "SkeletonDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SkeletonDemo as default
};
//# sourceMappingURL=/build/routes/mui.skeleton-ZCWWSC75.js.map
