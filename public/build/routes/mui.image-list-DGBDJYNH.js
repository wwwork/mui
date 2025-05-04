import {
  Box_default,
  ImageListItemBar_default,
  ImageListItem_default,
  ImageList_default,
  Paper_default,
  Stack_default
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

// app/routes/mui.image-list.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.image-list.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.image-list.tsx"
  );
  import.meta.hot.lastModified = "1746376642777.8533";
}
var images = [{
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}];
var images2 = [{
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}];
var images3 = [{
  img: "https://picsum.photos/400/600",
  title: "Tetst"
}, {
  img: "https://picsum.photos/100/300",
  title: "Tetst"
}, {
  img: "https://picsum.photos/400/400",
  title: "Tetst"
}, {
  img: "https://picsum.photos/400/300",
  title: "Tetst"
}, {
  img: "https://picsum.photos/300/300",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}, {
  img: "https://picsum.photos/200/200",
  title: "Tetst"
}];
function ImageListDemo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper_default, { elevation: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { spacing: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImageList_default, { sx: {
      width: 500,
      height: 450
    }, cols: 3, rowHeight: 164, children: images.map((item, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImageListItem_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.img, alt: item.title, loading: "lazy" }, void 0, false, {
        fileName: "app/routes/mui.image-list.tsx",
        lineNumber: 141,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImageListItemBar_default, { title: item.title }, void 0, false, {
        fileName: "app/routes/mui.image-list.tsx",
        lineNumber: 142,
        columnNumber: 15
      }, this)
    ] }, idx, true, {
      fileName: "app/routes/mui.image-list.tsx",
      lineNumber: 140,
      columnNumber: 38
    }, this)) }, void 0, false, {
      fileName: "app/routes/mui.image-list.tsx",
      lineNumber: 136,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImageList_default, { variant: "woven", sx: {
      width: 500,
      height: 450
    }, cols: 3, gap: 8, rowHeight: 164, children: images2.map((item, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImageListItem_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.img, alt: item.title, loading: "lazy" }, void 0, false, {
      fileName: "app/routes/mui.image-list.tsx",
      lineNumber: 151,
      columnNumber: 15
    }, this) }, idx, false, {
      fileName: "app/routes/mui.image-list.tsx",
      lineNumber: 150,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/routes/mui.image-list.tsx",
      lineNumber: 146,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { sx: {
      width: 500,
      height: 450,
      overflowY: "scroll"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImageList_default, { variant: "masonry", cols: 3, gap: 8, rowHeight: 164, children: images3.map((item, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImageListItem_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.img, alt: item.title, loading: "lazy" }, void 0, false, {
      fileName: "app/routes/mui.image-list.tsx",
      lineNumber: 162,
      columnNumber: 17
    }, this) }, idx, false, {
      fileName: "app/routes/mui.image-list.tsx",
      lineNumber: 161,
      columnNumber: 41
    }, this)) }, void 0, false, {
      fileName: "app/routes/mui.image-list.tsx",
      lineNumber: 160,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/mui.image-list.tsx",
      lineNumber: 155,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.image-list.tsx",
    lineNumber: 135,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.image-list.tsx",
    lineNumber: 134,
    columnNumber: 10
  }, this);
}
_c = ImageListDemo;
var _c;
$RefreshReg$(_c, "ImageListDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ImageListDemo as default
};
//# sourceMappingURL=/build/routes/mui.image-list-DGBDJYNH.js.map
