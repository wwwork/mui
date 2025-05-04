import {
  Face_default
} from "/build/_shared/chunk-YDPTG5UG.js";
import "/build/_shared/chunk-NRTV55SN.js";
import "/build/_shared/chunk-DTJNWNJD.js";
import "/build/_shared/chunk-MQSBA43Q.js";
import {
  Avatar_default,
  Chip_default,
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

// app/routes/mui.chip.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.chip.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.chip.tsx"
  );
  import.meta.hot.lastModified = "1746376555533.7488";
}
function ChipDemo() {
  _s();
  function handleClick() {
    alert(1);
  }
  const [chips, _] = (0, import_react.useState)(["chip1", "chip2", "chip3"]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { width: "150px", direction: "row", spacing: 1, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chip_default, { label: "test", color: "primary", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Face_default, {}, void 0, false, {
      fileName: "app/routes/mui.chip.tsx",
      lineNumber: 32,
      columnNumber: 48
    }, this) }, void 0, false, {
      fileName: "app/routes/mui.chip.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chip_default, { label: "Delete", color: "error", onDelete: () => alert("delete clicked") }, void 0, false, {
      fileName: "app/routes/mui.chip.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chip_default, { onClick: handleClick, label: "test", color: "primary", size: "medium", variant: "outlined", avatar: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar_default, { children: "V" }, void 0, false, {
      fileName: "app/routes/mui.chip.tsx",
      lineNumber: 34,
      columnNumber: 105
    }, this) }, void 0, false, {
      fileName: "app/routes/mui.chip.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    chips.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chip_default, { label: item, onDelete: () => alert(` delete ${item}`) }, item, false, {
      fileName: "app/routes/mui.chip.tsx",
      lineNumber: 36,
      columnNumber: 26
    }, this))
  ] }, void 0, true, {
    fileName: "app/routes/mui.chip.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_s(ChipDemo, "kKEa5vOusH4P3ds6HZ7SEZ13FUk=");
_c = ChipDemo;
var _c;
$RefreshReg$(_c, "ChipDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ChipDemo as default
};
//# sourceMappingURL=/build/routes/mui.chip-D4NW3DXO.js.map
