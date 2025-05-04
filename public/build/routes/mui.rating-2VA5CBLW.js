import {
  FavoriteBorder_default,
  Favorite_default
} from "/build/_shared/chunk-YDPTG5UG.js";
import "/build/_shared/chunk-NRTV55SN.js";
import "/build/_shared/chunk-DTJNWNJD.js";
import "/build/_shared/chunk-MQSBA43Q.js";
import {
  Rating_default,
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
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/mui.rating.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.rating.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.rating.tsx"
  );
  import.meta.hot.lastModified = "1746377035181.8943";
}
function RatingDemo() {
  _s();
  const [rating, setRating] = (0, import_react.useState)(0);
  console.log(rating);
  const handleRating = (_, value) => {
    setRating(value);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { spacing: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Rating_default, { value: rating, onChange: handleRating, emptyIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FavoriteBorder_default, { fontSize: "inherit" }, void 0, false, {
    fileName: "app/routes/mui.rating.tsx",
    lineNumber: 33,
    columnNumber: 65
  }, this), icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Favorite_default, { fontSize: "inherit" }, void 0, false, {
    fileName: "app/routes/mui.rating.tsx",
    lineNumber: 33,
    columnNumber: 110
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.rating.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.rating.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(RatingDemo, "z38YjvLLtbN6A1iRiKF1lIyGHjc=");
_c = RatingDemo;
var _c;
$RefreshReg$(_c, "RatingDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  RatingDemo as default
};
//# sourceMappingURL=/build/routes/mui.rating-2VA5CBLW.js.map
