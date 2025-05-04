import {
  Paper_default,
  TableBody_default,
  TableCell_default,
  TableContainer_default,
  TableHead_default,
  TableRow_default,
  Table_default
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

// app/routes/mui.table.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mui.table.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mui.table.tsx"
  );
  import.meta.hot.lastModified = "1746377116052.1118";
}
var data = [{
  id: 1,
  first_name: "Dwayne",
  last_name: "Leeb",
  email: "dleeb0@delicious.com",
  gender: "Non-binary",
  ip_address: "97.73.70.188"
}, {
  id: 2,
  first_name: "Helaina",
  last_name: "Davidove",
  email: "hdavidove1@ovh.net",
  gender: "Female",
  ip_address: "27.214.14.177"
}, {
  id: 3,
  first_name: "Cthrine",
  last_name: "MacUchadair",
  email: "cmacuchadair2@tinyurl.com",
  gender: "Female",
  ip_address: "46.203.76.43"
}, {
  id: 4,
  first_name: "Georgie",
  last_name: "Sizzey",
  email: "gsizzey3@reference.com",
  gender: "Male",
  ip_address: "140.201.196.227"
}, {
  id: 5,
  first_name: "Bell",
  last_name: "Shillan",
  email: "bshillan4@webeden.co.uk",
  gender: "Female",
  ip_address: "221.168.44.28"
}, {
  id: 6,
  first_name: "Enriqueta",
  last_name: "Chettle",
  email: "echettle5@sciencedaily.com",
  gender: "Female",
  ip_address: "24.115.31.2"
}, {
  id: 7,
  first_name: "Stevie",
  last_name: "Dumini",
  email: "sdumini6@t.co",
  gender: "Male",
  ip_address: "145.52.250.212"
}, {
  id: 8,
  first_name: "Nelle",
  last_name: "Kocher",
  email: "nkocher7@bandcamp.com",
  gender: "Female",
  ip_address: "111.215.90.145"
}, {
  id: 9,
  first_name: "Elenore",
  last_name: "Benley",
  email: "ebenley8@last.fm",
  gender: "Female",
  ip_address: "167.94.73.202"
}, {
  id: 10,
  first_name: "Davie",
  last_name: "Clitherow",
  email: "dclitherow9@reference.com",
  gender: "Agender",
  ip_address: "73.146.211.118"
}];
function TableDemo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableContainer_default, { component: Paper_default, sx: {
    height: "300px"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table_default, { "aria-aria-label": "simple table", stickyHeader: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, { children: "Id" }, void 0, false, {
        fileName: "app/routes/mui.table.tsx",
        lineNumber: 100,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, { children: "nama" }, void 0, false, {
        fileName: "app/routes/mui.table.tsx",
        lineNumber: 101,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, { children: "Last name" }, void 0, false, {
        fileName: "app/routes/mui.table.tsx",
        lineNumber: 102,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, { children: "Last name" }, void 0, false, {
        fileName: "app/routes/mui.table.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, { children: "email" }, void 0, false, {
        fileName: "app/routes/mui.table.tsx",
        lineNumber: 104,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mui.table.tsx",
      lineNumber: 99,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/mui.table.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody_default, { children: data.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow_default, { sx: {
      "&: last-chile td, &: last-child th": {
        border: 0
      }
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, { children: item.id }, void 0, false, {
        fileName: "app/routes/mui.table.tsx",
        lineNumber: 114,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, { children: item.first_name }, void 0, false, {
        fileName: "app/routes/mui.table.tsx",
        lineNumber: 115,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, { children: item.last_name }, void 0, false, {
        fileName: "app/routes/mui.table.tsx",
        lineNumber: 116,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, { children: item.email }, void 0, false, {
        fileName: "app/routes/mui.table.tsx",
        lineNumber: 117,
        columnNumber: 15
      }, this)
    ] }, item.id, true, {
      fileName: "app/routes/mui.table.tsx",
      lineNumber: 109,
      columnNumber: 29
    }, this)) }, void 0, false, {
      fileName: "app/routes/mui.table.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mui.table.tsx",
    lineNumber: 97,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/mui.table.tsx",
    lineNumber: 94,
    columnNumber: 10
  }, this);
}
_c = TableDemo;
var _c;
$RefreshReg$(_c, "TableDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TableDemo as default
};
//# sourceMappingURL=/build/routes/mui.table-GHPHX7J5.js.map
