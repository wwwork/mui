import {
  ExpandMore_default
} from "/build/_shared/chunk-YDPTG5UG.js";
import "/build/_shared/chunk-NRTV55SN.js";
import "/build/_shared/chunk-DTJNWNJD.js";
import "/build/_shared/chunk-MQSBA43Q.js";
import {
  AccordionDetails_default,
  AccordionSummary_default,
  Accordion_default,
  Box_default,
  Paper_default
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

// app/routes/mui.accordion.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.accordion.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.accordion.tsx"
  );
  import.meta.hot.lastModified = "1746376347328.773";
}
function AccordionDemo() {
  _s();
  const [expanded, setExpanded] = (0, import_react.useState)(false);
  const handleChange = (isExpanded, panel) => {
    if (isExpanded) {
      setExpanded(isExpanded ? panel : false);
    } else {
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper_default, { elevation: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Accordion_default, { expanded: expanded === "panel1", onChange: (event, isExpanded) => handleChange(isExpanded, "panel1"), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionSummary_default, { id: "panel1-header", "aria-controls": "panel1-content", expandIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExpandMore_default, {}, void 0, false, {
        fileName: "app/routes/mui.accordion.tsx",
        lineNumber: 36,
        columnNumber: 91
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { children: "Accordion summary 1" }, void 0, false, {
        fileName: "app/routes/mui.accordion.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/mui.accordion.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionDetails_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique minima quae, nihil sunt animi, ex veniam aliquam quo veritatis, vero eius eos quaerat quibusdam soluta culpa beatae aspernatur suscipit officia?" }, void 0, false, {
          fileName: "app/routes/mui.accordion.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        "?"
      ] }, void 0, true, {
        fileName: "app/routes/mui.accordion.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mui.accordion.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Accordion_default, { expanded: expanded === "panel2", onChange: (event, isExpanded) => handleChange(isExpanded, "panel2"), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionSummary_default, { id: "panel2-header", "aria-controls": "panel2-content", expandIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExpandMore_default, {}, void 0, false, {
        fileName: "app/routes/mui.accordion.tsx",
        lineNumber: 50,
        columnNumber: 91
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { children: "Accordion summary 1" }, void 0, false, {
        fileName: "app/routes/mui.accordion.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/mui.accordion.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionDetails_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique minima quae, nihil sunt animi, ex veniam aliquam quo veritatis, vero eius eos quaerat quibusdam soluta culpa beatae aspernatur suscipit officia?" }, void 0, false, {
          fileName: "app/routes/mui.accordion.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        "?"
      ] }, void 0, true, {
        fileName: "app/routes/mui.accordion.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mui.accordion.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Accordion_default, { expanded: expanded === "panel3", onChange: (event, isExpanded) => handleChange(isExpanded, "panel3"), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionSummary_default, { id: "panel3-header", "aria-controls": "panel3-content", expandIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExpandMore_default, {}, void 0, false, {
        fileName: "app/routes/mui.accordion.tsx",
        lineNumber: 64,
        columnNumber: 91
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { children: "Accordion summary 1" }, void 0, false, {
        fileName: "app/routes/mui.accordion.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/mui.accordion.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionDetails_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique minima quae, nihil sunt animi, ex veniam aliquam quo veritatis, vero eius eos quaerat quibusdam soluta culpa beatae aspernatur suscipit officia?" }, void 0, false, {
          fileName: "app/routes/mui.accordion.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this),
        "?"
      ] }, void 0, true, {
        fileName: "app/routes/mui.accordion.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mui.accordion.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.accordion.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.accordion.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s(AccordionDemo, "DuL5jiiQQFgbn7gBKAyxwS/H4Ek=");
_c = AccordionDemo;
var _c;
$RefreshReg$(_c, "AccordionDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AccordionDemo as default
};
//# sourceMappingURL=/build/routes/mui.accordion-FEKX2ZYL.js.map
