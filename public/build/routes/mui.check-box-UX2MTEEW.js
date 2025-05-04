import {
  BookmarkBorder_default,
  Bookmark_default
} from "/build/_shared/chunk-YDPTG5UG.js";
import "/build/_shared/chunk-NRTV55SN.js";
import "/build/_shared/chunk-DTJNWNJD.js";
import "/build/_shared/chunk-MQSBA43Q.js";
import {
  Box_default,
  Checkbox_default,
  FormControlLabel_default,
  FormControl_default,
  FormGroup_default,
  FormHelperText_default,
  FormLabel_default
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

// app/routes/mui.check-box.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.check-box.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.check-box.tsx"
  );
  import.meta.hot.lastModified = "1746376525671.73";
}
function CheckBoxDemo() {
  _s();
  const [value, setValue] = (0, import_react.useState)(false);
  const [skills, setSkills] = (0, import_react.useState)([]);
  console.log({
    value
  });
  console.log({
    skills
  });
  const handleCHange = (event) => {
    setValue(event.target.checked);
  };
  const handleChangeSkills = (event) => {
    if (!skills.includes(event.target.value)) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, { id: "FormControlLabel", control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, { onChange: handleCHange }, void 0, false, {
      fileName: "app/routes/mui.check-box.tsx",
      lineNumber: 47,
      columnNumber: 58
    }, this), label: "Form control label" }, void 0, false, {
      fileName: "app/routes/mui.check-box.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookmarkBorder_default, {}, void 0, false, {
      fileName: "app/routes/mui.check-box.tsx",
      lineNumber: 49,
      columnNumber: 27
    }, this), checkedIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bookmark_default, {}, void 0, false, {
      fileName: "app/routes/mui.check-box.tsx",
      lineNumber: 49,
      columnNumber: 60
    }, this) }, void 0, false, {
      fileName: "app/routes/mui.check-box.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/mui.check-box.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl_default, { error: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormLabel_default, { children: "Skills" }, void 0, false, {
        fileName: "app/routes/mui.check-box.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormGroup_default, { row: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, { control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, { onChange: handleChangeSkills, checked: skills.includes("html") }, void 0, false, {
          fileName: "app/routes/mui.check-box.tsx",
          lineNumber: 56,
          columnNumber: 42
        }, this), label: "Html", value: "html" }, void 0, false, {
          fileName: "app/routes/mui.check-box.tsx",
          lineNumber: 56,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, { control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, { size: "small", color: "secondary", onChange: handleChangeSkills, checked: skills.includes("css") }, void 0, false, {
          fileName: "app/routes/mui.check-box.tsx",
          lineNumber: 57,
          columnNumber: 42
        }, this), label: "css", value: "css" }, void 0, false, {
          fileName: "app/routes/mui.check-box.tsx",
          lineNumber: 57,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, { control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, { onChange: handleChangeSkills, checked: skills.includes("js") }, void 0, false, {
          fileName: "app/routes/mui.check-box.tsx",
          lineNumber: 58,
          columnNumber: 42
        }, this), label: "Js", value: "js" }, void 0, false, {
          fileName: "app/routes/mui.check-box.tsx",
          lineNumber: 58,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/mui.check-box.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormHelperText_default, { children: " Invalid selection" }, void 0, false, {
        fileName: "app/routes/mui.check-box.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mui.check-box.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/mui.check-box.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.check-box.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.check-box.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(CheckBoxDemo, "6Veys23zJUhQFYKoQz8H9nOU7Hg=");
_c = CheckBoxDemo;
var _c;
$RefreshReg$(_c, "CheckBoxDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CheckBoxDemo as default
};
//# sourceMappingURL=/build/routes/mui.check-box-UX2MTEEW.js.map
