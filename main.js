/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n    --lime-400: #a3e635;\r\n    --lime-600: #65a30d;\r\n    --lime-700: #4d7c0f;\r\n    --gris: #FAFAFA;\r\n    --gris-oscuro: #8a8a8a;\r\n}\r\n\r\nbody, div, nav{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbutton{\r\n    border-radius: 8px;\r\n    border: none;\r\n    padding: 0.7rem 1rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n}\r\n\r\n.d-flex{\r\n    display: flex;\r\n    gap: 15px;\r\n    \r\n}\r\n\r\n#content{\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n    grid-template-rows: 44px 100px 1fr;\r\n    position: relative;\r\n    transition: all .2s;\r\n}\r\n\r\n/*nav bar top */\r\n\r\nnav{\r\n    background-color: var(--lime-600);\r\n    padding: 1rem 2rem;\r\n    position: sticky;\r\n    top: 0;\r\n    left: 0;\r\n    justify-content: space-between;\r\n    grid-column: 1 / 3;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\nnav a{\r\n    color: #fff;\r\n    padding: .2rem;\r\n}\r\n\r\nnav a:hover{\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n/*navbar top left side  */\r\n\r\n.nav-l{\r\n    align-items: center;\r\n}\r\n\r\n.nav-l > div{\r\n    background-color: #fff;\r\n    display: flex;\r\n    align-items: center;\r\n    border-radius: 3px;\r\n    padding: 0 .2rem;\r\n}\r\n\r\n.nav-l > div > input{\r\n    background-color: #00000000;\r\n    color: #000;\r\n    border: none;\r\n    outline-style: none;\r\n    \r\n}\r\n\r\n.nav-l .search-input a svg {\r\n    color: #000;\r\n}\r\n\r\n/*navbar top right side  */\r\n\r\n.nav-r{\r\n    align-items: center\r\n}\r\n\r\n\r\n/* white overlay */\r\n.overlay{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #ffffff44;\r\n    z-index: 5;\r\n}\r\n\r\n/* New task window */\r\n\r\n#new-task{\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n    background-color: #fff;\r\n    max-width: 550px;\r\n    width: 100%;\r\n    z-index: 10;\r\n    border-radius: 16px;\r\n    box-shadow: 0px 0px 35px 2px #00000040;\r\n}\r\n\r\n#new-task > form {\r\n    padding: 1rem 3rem;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n#new-task > form > div{\r\n    margin: .3rem 0;\r\n}\r\n\r\n#new-task > form input {\r\n    border: none;\r\n    outline-style: none;\r\n}\r\n\r\n#new-task > form #task-name{\r\n    font-size: 2rem;\r\n}\r\n\r\n\r\n#new-task > form > div:nth-child(3), #new-task > form > div:nth-child(4){\r\n    justify-content: space-between\r\n}\r\n\r\n#new-task .due-date-div {\r\n    display: flex;\r\n    flex-direction: column;    \r\n\r\n}\r\n\r\n#new-task > form .extra-fields > div {\r\n    align-items: center;\r\n}\r\n\r\n#new-task > form label{\r\n    font-size: .8rem;\r\n}\r\n\r\n#new-task > form #due-date{\r\n    color: #555;\r\n    border: 1px solid ;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n#new-task form .buttons{\r\n    justify-content: end;\r\n}\r\n\r\n\r\n.btn-green{\r\n    background-color: var(--lime-600);\r\n    color: #fff;\r\n}\r\n\r\n.btn-green:hover{\r\n    background-color: var(--lime-700);\r\n}\r\n\r\n.btn-cancel{\r\n    background-color: var(--gris);\r\n    color: var(--gris-oscuro);\r\n}\r\n\r\n.btn-cancel:hover{\r\n    background-color: #e3e3e3;\r\n}\r\n\r\n\r\n/* new project window */\r\n#new-project{\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n    background-color: #fff;\r\n    max-width: 550px;\r\n    width: 100%;\r\n    z-index: 10;\r\n    border-radius: 16px;\r\n    box-shadow: 0px 0px 35px 2px #00000040;\r\n}\r\n\r\n#new-project form{\r\n    flex-direction: column;\r\n    padding: 2rem;\r\n}\r\n\r\n#new-project > form input {\r\n    border: 1px solid var(--gris-oscuro);\r\n    border-radius: 6px;\r\n    outline-style: none;\r\n    padding: .5rem;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n#new-project > form input:focus{\r\n    border: 1px solid #000;\r\n}\r\n\r\n\r\n#new-project > form .proj-btns{\r\n    justify-content: flex-end\r\n}\r\n\r\n/* side bar */\r\n\r\n.side-bar{\r\n    position: sticky;\r\n    padding:  2rem;\r\n    top: 44px;\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 4;\r\n    background-color: var(--gris);\r\n}\r\n\r\n.side-bar > div > a, .task-header a, .side-bar #projects a {\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem;\r\n    font-size: 0.8rem;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    color: #000;    \r\n}\r\n\r\n.side-bar > div > a:hover,.task-header a:hover, .side-bar .active, .side-bar #projects a:hover{\r\n    background-color: #00000008;\r\n    \r\n}\r\n\r\n.side-bar #created-projects{\r\n    flex-direction: column;\r\n    gap: 0;\r\n}\r\n\r\n.side-bar #projects{\r\n    flex-direction: column;\r\n    gap: 0;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.side-bar #projects a{\r\n    margin-left: 1rem;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n\r\n/*task header */\r\n.task-header{\r\n    padding: 1rem 2rem;\r\n    grid-column: 2 / 2;\r\n    grid-row: 2 / 3;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n/* task space */\r\n.tasks{\r\n    padding: 1rem 2rem;\r\n    grid-column: 2 / 2;\r\n    grid-row: 3 / 4;\r\n    overflow-x: scroll;\r\n}\r\n\r\n/*each task*/\r\n.task {\r\n    margin: 1.5rem;\r\n    padding: 1rem;\r\n    border-bottom: 1px solid var(--gris-oscuro);\r\n    cursor: pointer;\r\n    transition: all .2s;\r\n}\r\n\r\n.task:hover{\r\n    border-bottom: 2px solid var(--gris-oscuro);\r\n}\r\n\r\n\r\n.task > div{\r\n    justify-content: space-between;\r\n}\r\n\r\n.task .display-date{\r\n    margin: .5rem 0;\r\n    font-size: .7rem;\r\n}\r\n\r\n.task .check-btn {\r\n    cursor: pointer;\r\n}\r\n\r\n.task .task-description{\r\n    font-size: .8rem;\r\n    margin: 0 3rem;\r\n    text-align: left;\r\n}\r\n\r\n.task .completed-task{\r\n    text-decoration:line-through;\r\n}\r\n\r\n.task .mod-btns svg:hover{\r\n    transition: all .2s;\r\n    transform: scale(1.2);\r\n}\r\n\r\n/* hide class */\r\n\r\n.hide{\r\n    display: none;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\r\n    --lime-400: #a3e635;\r\n    --lime-600: #65a30d;\r\n    --lime-700: #4d7c0f;\r\n    --gris: #FAFAFA;\r\n    --gris-oscuro: #8a8a8a;\r\n}\r\n\r\nbody, div, nav{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbutton{\r\n    border-radius: 8px;\r\n    border: none;\r\n    padding: 0.7rem 1rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n}\r\n\r\n.d-flex{\r\n    display: flex;\r\n    gap: 15px;\r\n    \r\n}\r\n\r\n#content{\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n    grid-template-rows: 44px 100px 1fr;\r\n    position: relative;\r\n    transition: all .2s;\r\n}\r\n\r\n/*nav bar top */\r\n\r\nnav{\r\n    background-color: var(--lime-600);\r\n    padding: 1rem 2rem;\r\n    position: sticky;\r\n    top: 0;\r\n    left: 0;\r\n    justify-content: space-between;\r\n    grid-column: 1 / 3;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\nnav a{\r\n    color: #fff;\r\n    padding: .2rem;\r\n}\r\n\r\nnav a:hover{\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n/*navbar top left side  */\r\n\r\n.nav-l{\r\n    align-items: center;\r\n}\r\n\r\n.nav-l > div{\r\n    background-color: #fff;\r\n    display: flex;\r\n    align-items: center;\r\n    border-radius: 3px;\r\n    padding: 0 .2rem;\r\n}\r\n\r\n.nav-l > div > input{\r\n    background-color: #00000000;\r\n    color: #000;\r\n    border: none;\r\n    outline-style: none;\r\n    \r\n}\r\n\r\n.nav-l .search-input a svg {\r\n    color: #000;\r\n}\r\n\r\n/*navbar top right side  */\r\n\r\n.nav-r{\r\n    align-items: center\r\n}\r\n\r\n\r\n/* white overlay */\r\n.overlay{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #ffffff44;\r\n    z-index: 5;\r\n}\r\n\r\n/* New task window */\r\n\r\n#new-task{\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n    background-color: #fff;\r\n    max-width: 550px;\r\n    width: 100%;\r\n    z-index: 10;\r\n    border-radius: 16px;\r\n    box-shadow: 0px 0px 35px 2px #00000040;\r\n}\r\n\r\n#new-task > form {\r\n    padding: 1rem 3rem;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n#new-task > form > div{\r\n    margin: .3rem 0;\r\n}\r\n\r\n#new-task > form input {\r\n    border: none;\r\n    outline-style: none;\r\n}\r\n\r\n#new-task > form #task-name{\r\n    font-size: 2rem;\r\n}\r\n\r\n\r\n#new-task > form > div:nth-child(3), #new-task > form > div:nth-child(4){\r\n    justify-content: space-between\r\n}\r\n\r\n#new-task .due-date-div {\r\n    display: flex;\r\n    flex-direction: column;    \r\n\r\n}\r\n\r\n#new-task > form .extra-fields > div {\r\n    align-items: center;\r\n}\r\n\r\n#new-task > form label{\r\n    font-size: .8rem;\r\n}\r\n\r\n#new-task > form #due-date{\r\n    color: #555;\r\n    border: 1px solid ;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n#new-task form .buttons{\r\n    justify-content: end;\r\n}\r\n\r\n\r\n.btn-green{\r\n    background-color: var(--lime-600);\r\n    color: #fff;\r\n}\r\n\r\n.btn-green:hover{\r\n    background-color: var(--lime-700);\r\n}\r\n\r\n.btn-cancel{\r\n    background-color: var(--gris);\r\n    color: var(--gris-oscuro);\r\n}\r\n\r\n.btn-cancel:hover{\r\n    background-color: #e3e3e3;\r\n}\r\n\r\n\r\n/* new project window */\r\n#new-project{\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n    background-color: #fff;\r\n    max-width: 550px;\r\n    width: 100%;\r\n    z-index: 10;\r\n    border-radius: 16px;\r\n    box-shadow: 0px 0px 35px 2px #00000040;\r\n}\r\n\r\n#new-project form{\r\n    flex-direction: column;\r\n    padding: 2rem;\r\n}\r\n\r\n#new-project > form input {\r\n    border: 1px solid var(--gris-oscuro);\r\n    border-radius: 6px;\r\n    outline-style: none;\r\n    padding: .5rem;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n#new-project > form input:focus{\r\n    border: 1px solid #000;\r\n}\r\n\r\n\r\n#new-project > form .proj-btns{\r\n    justify-content: flex-end\r\n}\r\n\r\n/* side bar */\r\n\r\n.side-bar{\r\n    position: sticky;\r\n    padding:  2rem;\r\n    top: 44px;\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 4;\r\n    background-color: var(--gris);\r\n}\r\n\r\n.side-bar > div > a, .task-header a, .side-bar #projects a {\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem;\r\n    font-size: 0.8rem;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    color: #000;    \r\n}\r\n\r\n.side-bar > div > a:hover,.task-header a:hover, .side-bar .active, .side-bar #projects a:hover{\r\n    background-color: #00000008;\r\n    \r\n}\r\n\r\n.side-bar #created-projects{\r\n    flex-direction: column;\r\n    gap: 0;\r\n}\r\n\r\n.side-bar #projects{\r\n    flex-direction: column;\r\n    gap: 0;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.side-bar #projects a{\r\n    margin-left: 1rem;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n\r\n/*task header */\r\n.task-header{\r\n    padding: 1rem 2rem;\r\n    grid-column: 2 / 2;\r\n    grid-row: 2 / 3;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n/* task space */\r\n.tasks{\r\n    padding: 1rem 2rem;\r\n    grid-column: 2 / 2;\r\n    grid-row: 3 / 4;\r\n    overflow-x: scroll;\r\n}\r\n\r\n/*each task*/\r\n.task {\r\n    margin: 1.5rem;\r\n    padding: 1rem;\r\n    border-bottom: 1px solid var(--gris-oscuro);\r\n    cursor: pointer;\r\n    transition: all .2s;\r\n}\r\n\r\n.task:hover{\r\n    border-bottom: 2px solid var(--gris-oscuro);\r\n}\r\n\r\n\r\n.task > div{\r\n    justify-content: space-between;\r\n}\r\n\r\n.task .display-date{\r\n    margin: .5rem 0;\r\n    font-size: .7rem;\r\n}\r\n\r\n.task .check-btn {\r\n    cursor: pointer;\r\n}\r\n\r\n.task .task-description{\r\n    font-size: .8rem;\r\n    margin: 0 3rem;\r\n    text-align: left;\r\n}\r\n\r\n.task .completed-task{\r\n    text-decoration:line-through;\r\n}\r\n\r\n.task .mod-btns svg:hover{\r\n    transition: all .2s;\r\n    transform: scale(1.2);\r\n}\r\n\r\n/* hide class */\r\n\r\n.hide{\r\n    display: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isAfter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isAfter/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/create-new.js":
/*!***************************!*\
  !*** ./src/create-new.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrTemporal": () => (/* binding */ arrTemporal),
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _dom_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-content */ "./src/dom-content.js");
/* harmony import */ var _task_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-form */ "./src/task-form.js");




let arrTemporal = [
    {
        "title": "Telefono en modo avión",
        "desciption": "Hasta las 9 no conectar el móvil",
        "dueDate": "2023-01-31T22:44",
        "priority": "high",
        "project": "",
        "checklist": true
    },
    {
        "title": "Estirar",
        "desciption": "Estiramientos cali move",
        "dueDate": "2023-02-28T22:44",
        "priority": "middle",
        "project": "",
        "checklist": false
    },
    {
        "title": "16 min mindfullness",
        "desciption": "Estiramientos cali move",
        "dueDate": "2023-01-04T08:44",
        "priority": "low",
        "project": "",
        "checklist": false
    },
    {
        "title": "Lutheria",
        "desciption": "Una hora a mis guitarras",
        "dueDate": "2023-01-18T18:00",
        "priority": "middle",
        "project": "",
        "checklist": false
    },
    {
        "title": "Comprar toalla japonesa",
        "desciption": "",
        "dueDate": "2023-01-05T18:00",
        "priority": "low",
        "project": "",
        "checklist": false
    }
]


const btnAddTask = document.getElementById('btn-add')

btnAddTask.addEventListener('click', e => {
    e.preventDefault();
    createTask();
    (0,_dom_content__WEBPACK_IMPORTED_MODULE_0__.closeTask)();
})

const createTask = () =>  {

    let newTask = (0,_task_form__WEBPACK_IMPORTED_MODULE_1__.createIt)();

    if(window.localStorage.getItem('task')){
        console.log('hey')
        let storagedTasks = JSON.parse(window.localStorage.getItem('task'))
        storagedTasks.push(newTask)
        localStorage.setItem('task', JSON.stringify(storagedTasks))
    }else{
        localStorage.setItem('task', JSON.stringify([newTask]))

    }

    (0,_task_form__WEBPACK_IMPORTED_MODULE_1__.reInitValues)();
    (0,_dom_content__WEBPACK_IMPORTED_MODULE_0__.loadTasks)();

}






/***/ }),

/***/ "./src/create-project.js":
/*!*******************************!*\
  !*** ./src/create-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "getProject": () => (/* binding */ getProject)
/* harmony export */ });
/* harmony import */ var _dom_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-content */ "./src/dom-content.js");


const createProject = projectName =>  {

    if(window.localStorage.getItem('projects')){

        let storagedProject = JSON.parse(window.localStorage.getItem('projects'))
        storagedProject.push(projectName)
        localStorage.setItem('projects', JSON.stringify(storagedProject))

    }else{

        localStorage.setItem('projects', JSON.stringify([projectName]))

    }

    (0,_dom_content__WEBPACK_IMPORTED_MODULE_0__.loadProjects)()
}

const getProject = () => {
    if(window.localStorage.getItem('projects')){
        return JSON.parse(window.localStorage.getItem('projects'))
    }
}

/***/ }),

/***/ "./src/delete-task.js":
/*!****************************!*\
  !*** ./src/delete-task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask)
/* harmony export */ });
/* harmony import */ var _dom_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-content */ "./src/dom-content.js");


const deleteTask = (index) => {
    let storagedTasks = JSON.parse(window.localStorage.getItem('task'))
    storagedTasks.splice(index, 1);
    localStorage.setItem('task', JSON.stringify(storagedTasks))

    ;(0,_dom_content__WEBPACK_IMPORTED_MODULE_0__.loadTasks)();
}


/***/ }),

/***/ "./src/dom-content.js":
/*!****************************!*\
  !*** ./src/dom-content.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeTask": () => (/* binding */ closeTask),
/* harmony export */   "loadProjects": () => (/* binding */ loadProjects),
/* harmony export */   "loadTasks": () => (/* binding */ loadTasks)
/* harmony export */ });
/* harmony import */ var _create_new__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-new */ "./src/create-new.js");
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");
/* harmony import */ var _delete_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-task */ "./src/delete-task.js");
/* harmony import */ var _edit_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-task */ "./src/edit-task.js");
/* harmony import */ var _task_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-form */ "./src/task-form.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");








const task = document.querySelector('.tasks')

const content = document.getElementById('content')
const menuBtn = document.getElementById('menu')
const homeBtn = document.getElementById('home')
const sideBar = document.querySelector('.side-bar')

const taskHeaderText = document.querySelector('#task-header > h2')
let sideBarItems = document.querySelectorAll('.side-bar div:first-child a, .side-bar #projects a')

taskHeaderText.innerHTML = 'Today'
sideBarItems[1].classList.add('active')

homeBtn.addEventListener('click', e => {
    e.preventDefault();
    sideBarItems.forEach(i => {
        i.classList.remove('active')
    })
    sideBarItems[1].classList.add('active')
    taskHeaderText.innerHTML = 'Today'
})

console.log(sideBarItems)
const sideBarItemsEvent = () => {
    sideBarItems.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            sideBarItems.forEach(i => {
                i.classList.remove('active')
            })
            item.classList.add('active')
            taskHeaderText.innerHTML = item.querySelector('div').textContent
            loadTasks();
        })
    })

}

menuBtn.addEventListener('click', e => {
    e.preventDefault();
    if(sideBar.classList.contains('hide')){
        content.style.gridTemplateColumns = "300px 1fr";
        sideBar.classList.remove('hide')
    }else{
        content.style.gridTemplateColumns = "0 1fr";
        sideBar.classList.add('hide')
    }
})

const newTask = document.getElementById('new-task')
const newProject = document.getElementById('new-project')
const overlay = document.querySelector('.overlay')
const addTaskBtn = document.getElementById('add-task')
const newTaskWindow = document.querySelector('#new-task > form')
const btnCancel = document.getElementById('btn-cancel')
const btnClose = document.getElementById('btn-close')
const btnAdd = document.getElementById('btn-add')
const btnEdit = document.getElementById('btn-edit')



addTaskBtn.addEventListener('click', e => {
    e.preventDefault();
    btnAdd.classList.remove('hide')
    overlay.classList.remove('hide')
    newTaskWindow.classList.remove('hide')
    newTask.classList.remove('hide')
})


const closeTask = () => {
    btnAdd.classList.add('hide')
    btnEdit.classList.add('hide')
    overlay.classList.add('hide')
    newTaskWindow.classList.add('hide')
    projectForm.classList.add('hide');
    newTask.classList.add('hide')
    newProject.classList.add('hide')
}

btnCancel.addEventListener('click', e => { 
        e.preventDefault();
        closeTask() 
    }
)

btnClose.addEventListener('click', e => { 
        e.preventDefault();
        closeTask() 
    }
)

overlay.addEventListener('click', e => { 
        e.preventDefault();
        closeTask() 
    }
)

const loadTasks = () => {
    if(window.localStorage.getItem('task')){
        let taskStored = JSON.parse(window.localStorage.getItem('task'))
        let taskContent = taskStored.reduce((acc, task, i) => {
            console.log(taskHeaderText.innerHTML)
            let {title, desciption, dueDate, dueTime, priority, project, checklist} = task
            console.log(new Date(dueDate))
            if(
                taskHeaderText.innerHTML.trim() === 'Inbox' ||
                taskHeaderText.innerHTML.trim() === 'Today' && (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(dueDate)) ||
                taskHeaderText.innerHTML.trim() === 'Upcoming' && (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(dueDate), new Date()) ||
                taskHeaderText.innerHTML.trim() === 'Finished not deleted' && checklist === true
            
            
            ){
                acc += `
                <div class="task" data-task="${i}">
                        <div class="d-flex  ${checklist ? `completed-task`: ``}">
                            <div class="d-flex">
                                <div class="check-btn">
                                    ${showChecked(checklist)}
                                </div>
                                <div>
                                    ${title}
                                </div>
                            </div> 
                            <div class="task-description">
                                ${desciption}
                            </div>
                            <div class="d-flex mod-btns">    
                                ${editSvg(i)}
                                ${showPriority(priority)}
                                ${trashSvg(i)}
                            </div>
                        </div>
                    <div class="display-date">
                        ${dueDate} at ${dueTime}
                    </div>
                </div> `
            }
            return acc
        }, '')
        task.innerHTML = taskContent;
        
    }

    editEventListener();
    deleteEventListener();
}

const projectsDiv = document.getElementById('projects')
const projectsOptions = document.getElementById('project')

const loadProjects = () => {
    projectsDiv.innerHTML = ''
    projectsOptions.innerHTML = `<option value="" selected disabled>Select Project</option>`
    let projects = (0,_create_project__WEBPACK_IMPORTED_MODULE_1__.getProject)()

    projects.forEach(proj => {
        projectsDiv.innerHTML += `<a href=""><div>${proj}</div></a>`
        projectsOptions.innerHTML += `<option value="${proj}">${proj}</option>`
    })
    sideBarItems = document.querySelectorAll('.side-bar div:first-child a, .side-bar #projects a')
    console.log(sideBarItems)
    sideBarItemsEvent();
}

let taskInfo, taskIndex;

const editEventListener = () => {
    const editBtns = document.querySelectorAll('svg.edit-btn')
    editBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btnEdit.classList.remove('hide')
            overlay.classList.remove('hide')
            newTaskWindow.classList.remove('hide')
            newTask.classList.remove('hide')
            taskIndex = btn.dataset.task
            taskInfo = (0,_edit_task__WEBPACK_IMPORTED_MODULE_3__.loadEdition)(taskIndex)
            console.log(taskInfo)
            ;(0,_task_form__WEBPACK_IMPORTED_MODULE_4__.valuesEdit)(taskInfo)
           // writeEdition(btn.dataset.task, valuesEdit(taskInfo))
            /*----------------------------------------------------------------------------------------------------------*/
        })
    })
}

const deleteEventListener = () => {
    const deleteBtn = document.querySelectorAll('svg.delete-btn')
    deleteBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            ;(0,_delete_task__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(btn.dataset.delete)
        })
        
    })
}

btnEdit.addEventListener('click', e => {
    e.preventDefault()
    console.log(taskInfo)
    ;(0,_edit_task__WEBPACK_IMPORTED_MODULE_3__.writeEdition)(taskIndex, (0,_task_form__WEBPACK_IMPORTED_MODULE_4__.createIt)())
    ;(0,_task_form__WEBPACK_IMPORTED_MODULE_4__.reInitValues)();
    closeTask() 
})

const showPriority = priority => {
    let displayPriority = `${priority==='high'? `<svg style="width:20px;height:20px" viewBox="0 0 24 24">
    <path fill="red" d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" />
</svg>`: (priority==='middle'? `<svg style="width:20px;height:20px" viewBox="0 0 24 24">
<path fill="orange" d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" />
</svg>` : `<svg style="width:20px;height:20px" viewBox="0 0 24 24">
<path fill="green" d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" />
</svg>`)}`
    return displayPriority
}

const showChecked = checklist => {
    let displayChecked = `${checklist ? `<svg style="width:16px;height:16px" viewBox="0 0 24 24">
        <path fill="green" d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
        </svg>` : `<svg style="width:16px;height:16px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" />
        </svg>`}`
    return displayChecked
}

const editSvg = i => {
    return `<svg class="edit-btn" data-task="${i}" style="width:20px;height:20px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.11 2.9 18 4 18H8L12 22L16 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M9.08 15H7V12.91L13.17 6.72L15.24 8.8L9.08 15M16.84 7.2L15.83 8.21L13.76 6.18L14.77 5.16C14.97 4.95 15.31 4.94 15.55 5.16L16.84 6.41C17.05 6.62 17.06 6.96 16.84 7.2Z" />
</svg>`
}

const trashSvg = i => {
    return `<svg class="delete-btn" data-delete="${i}" style="width:20px;height:20px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
</svg>`
}


const projectForm = document.getElementById('project-form')
const addProjBtn = document.getElementById('add-proj-btn')
const addTheProjBtn = document.getElementById('add-proj')
const projName = document.getElementById('proj-name')

addProjBtn.addEventListener('click', e => {
    e.preventDefault();
    overlay.classList.remove('hide')
    projectForm.classList.remove('hide');
    newProject.classList.remove('hide')
})

addTheProjBtn.addEventListener('click', e => {
    e.preventDefault();

    (0,_create_project__WEBPACK_IMPORTED_MODULE_1__.createProject)(projName.value)

    projName.value = ''
    closeTask();
})


/***/ }),

/***/ "./src/edit-task.js":
/*!**************************!*\
  !*** ./src/edit-task.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadEdition": () => (/* binding */ loadEdition),
/* harmony export */   "writeEdition": () => (/* binding */ writeEdition)
/* harmony export */ });
/* harmony import */ var _dom_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-content */ "./src/dom-content.js");


const loadEdition = (index) => {
    let storagedTasks = JSON.parse(window.localStorage.getItem('task'))
    return storagedTasks[index]
}


const writeEdition = (index, editedTask) => {
    let storagedTasks = JSON.parse(window.localStorage.getItem('task'))
    storagedTasks[index] = editedTask
    localStorage.setItem('task', JSON.stringify(storagedTasks))

    ;(0,_dom_content__WEBPACK_IMPORTED_MODULE_0__.loadTasks)();
}


/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storageAvailable": () => (/* binding */ storageAvailable)
/* harmony export */ });
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

/***/ }),

/***/ "./src/task-form.js":
/*!**************************!*\
  !*** ./src/task-form.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createIt": () => (/* binding */ createIt),
/* harmony export */   "reInitValues": () => (/* binding */ reInitValues),
/* harmony export */   "valuesEdit": () => (/* binding */ valuesEdit)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


const taskNameInput = document.getElementById('task-name')
const taskDescriptionInput = document.getElementById('task-description')
const dueDateInput = document.getElementById('due-date')
const projectSelect = document.getElementById('project')
const prioritySelect = document.getElementById('priority')
const taskDoneCheckbutton = document.getElementById('task-done')

let taskName = taskNameInput.value;
let taskDescription = taskDescriptionInput.value;
let dueDate = dueDateInput.value;
let project = projectSelect.value;
let priority = prioritySelect.value;
let taskDone = taskDoneCheckbutton.checked;


const reInitValues = () => {
    taskNameInput.value = ''
    taskDescriptionInput.value = ''
    dueDateInput.value = ''
    projectSelect.value = ''
    prioritySelect.value = ''
    taskDoneCheckbutton.checked = false
}

const valuesEdit = (task) => {
    let {title, desciption, dueDate, priority, project, checklist} = task

    taskNameInput.value = title;
    taskDescriptionInput.value = desciption;
    dueDateInput.value = dueDate;
    projectSelect.value = project
    prioritySelect.value = priority;
    taskDoneCheckbutton.checked = checklist;
     
}

const createIt = () => {
    taskName = taskNameInput.value;
    taskDescription = taskDescriptionInput.value;
    dueDate = dueDateInput.value;
    project = projectSelect.value;
    priority = prioritySelect.value;
    taskDone = taskDoneCheckbutton.checked;
    
    return new _task__WEBPACK_IMPORTED_MODULE_0__["default"](taskName, taskDescription, dueDate, priority, project, taskDone);
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });

class Task {

    constructor(title, desciption, dueDate,  priority, project, checklist){
     
        const inputDate = dueDate.split('T')[0];
        const date = new Date(Date.parse(inputDate));
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        
        this.title = title
        this.desciption = desciption 
        this.dueDate = formattedDate
        this.dueTime = dueDate.split('T')[1]
        this.priority = priority
        this.project = project
        this.checklist = checklist

    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_new__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-new */ "./src/create-new.js");
/* harmony import */ var _dom_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-content */ "./src/dom-content.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






if ((0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.storageAvailable)('localStorage')) {
    console.log('local storage found')
  }
  else {
    console.log('no local storage available')
  }

(0,_dom_content__WEBPACK_IMPORTED_MODULE_1__.loadTasks)();
(0,_dom_content__WEBPACK_IMPORTED_MODULE_1__.loadProjects)();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLEtBQUssT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssS0FBSyxNQUFNLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtB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V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXNDO0FBQ2tCO0FBQ0w7QUFDbkQ7QUFDcUI7QUFDckI7QUFDQSxJQUFJLGdFQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBUztBQUNULDBEQUFZO0FBQ1o7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQWZ0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlLW5ldy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kZWxldGUtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb20tY29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9lZGl0LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcclxcbiAgICAtLWxpbWUtNDAwOiAjYTNlNjM1O1xcclxcbiAgICAtLWxpbWUtNjAwOiAjNjVhMzBkO1xcclxcbiAgICAtLWxpbWUtNzAwOiAjNGQ3YzBmO1xcclxcbiAgICAtLWdyaXM6ICNGQUZBRkE7XFxyXFxuICAgIC0tZ3Jpcy1vc2N1cm86ICM4YThhOGE7XFxyXFxufVxcclxcblxcclxcbmJvZHksIGRpdiwgbmF2e1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b257XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1mbGV4e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDRweCAxMDBweCAxZnI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLypuYXYgYmFyIHRvcCAqL1xcclxcblxcclxcbm5hdntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZS02MDApO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGF7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGE6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLypuYXZiYXIgdG9wIGxlZnQgc2lkZSAgKi9cXHJcXG5cXHJcXG4ubmF2LWx7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbCA+IGRpdntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBwYWRkaW5nOiAwIC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWwgPiBkaXYgPiBpbnB1dHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sIC5zZWFyY2gtaW5wdXQgYSBzdmcge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLypuYXZiYXIgdG9wIHJpZ2h0IHNpZGUgICovXFxyXFxuXFxyXFxuLm5hdi1ye1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHdoaXRlIG92ZXJsYXkgKi9cXHJcXG4ub3ZlcmxheXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNDQ7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxufVxcclxcblxcclxcbi8qIE5ldyB0YXNrIHdpbmRvdyAqL1xcclxcblxcclxcbiNuZXctdGFza3tcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIG1heC13aWR0aDogNTUwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzNXB4IDJweCAjMDAwMDAwNDA7XFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzayA+IGZvcm0ge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzayA+IGZvcm0gPiBkaXZ7XFxyXFxuICAgIG1hcmdpbjogLjNyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSAjdGFzay1uYW1le1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbiNuZXctdGFzayA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDMpLCAjbmV3LXRhc2sgPiBmb3JtID4gZGl2Om50aC1jaGlsZCg0KXtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzayAuZHVlLWRhdGUtZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzayA+IGZvcm0gLmV4dHJhLWZpZWxkcyA+IGRpdiB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzayA+IGZvcm0gbGFiZWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzayA+IGZvcm0gI2R1ZS1kYXRle1xcclxcbiAgICBjb2xvcjogIzU1NTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNuZXctdGFzayBmb3JtIC5idXR0b25ze1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ0bi1ncmVlbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZS02MDApO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1ncmVlbjpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZS03MDApO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWNhbmNlbHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3Jpcyk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmlzLW9zY3Vybyk7XFxyXFxufVxcclxcblxcclxcbi5idG4tY2FuY2VsOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBuZXcgcHJvamVjdCB3aW5kb3cgKi9cXHJcXG4jbmV3LXByb2plY3R7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyNSU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzVweCAycHggIzAwMDAwMDQwO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QgZm9ybXtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0ID4gZm9ybSBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyaXMtb3NjdXJvKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QgPiBmb3JtIGlucHV0OmZvY3Vze1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QgPiBmb3JtIC5wcm9qLWJ0bnN7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmRcXHJcXG59XFxyXFxuXFxyXFxuLyogc2lkZSBiYXIgKi9cXHJcXG5cXHJcXG4uc2lkZS1iYXJ7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgIHBhZGRpbmc6ICAycmVtO1xcclxcbiAgICB0b3A6IDQ0cHg7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlzKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYmFyID4gZGl2ID4gYSwgLnRhc2staGVhZGVyIGEsIC5zaWRlLWJhciAjcHJvamVjdHMgYSB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjMDAwOyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYmFyID4gZGl2ID4gYTpob3ZlciwudGFzay1oZWFkZXIgYTpob3ZlciwgLnNpZGUtYmFyIC5hY3RpdmUsIC5zaWRlLWJhciAjcHJvamVjdHMgYTpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDA4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYmFyICNjcmVhdGVkLXByb2plY3Rze1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDA7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhciAjcHJvamVjdHN7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgI3Byb2plY3RzIGF7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyp0YXNrIGhlYWRlciAqL1xcclxcbi50YXNrLWhlYWRlcntcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgICBncmlkLWNvbHVtbjogMiAvIDI7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0YXNrIHNwYWNlICovXFxyXFxuLnRhc2tze1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMjtcXHJcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcclxcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi8qZWFjaCB0YXNrKi9cXHJcXG4udGFzayB7XFxyXFxuICAgIG1hcmdpbjogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3Jpcy1vc2N1cm8pO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxufVxcclxcblxcclxcbi50YXNrOmhvdmVye1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZ3Jpcy1vc2N1cm8pO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGFzayA+IGRpdntcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayAuZGlzcGxheS1kYXRle1xcclxcbiAgICBtYXJnaW46IC41cmVtIDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5jaGVjay1idG4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrIC50YXNrLWRlc2NyaXB0aW9ue1xcclxcbiAgICBmb250LXNpemU6IC44cmVtO1xcclxcbiAgICBtYXJnaW46IDAgM3JlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgLmNvbXBsZXRlZC10YXNre1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayAubW9kLWJ0bnMgc3ZnOmhvdmVye1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi8qIGhpZGUgY2xhc3MgKi9cXHJcXG5cXHJcXG4uaGlkZXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQSxlQUFlOztBQUVmO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLE9BQU87SUFDUCw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQSx5QkFBeUI7O0FBRXpCO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFD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QjtBQUNoQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUEsZUFBZTs7QUFFZjtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxyXFxuICAgIC0tbGltZS00MDA6ICNhM2U2MzU7XFxyXFxuICAgIC0tbGltZS02MDA6ICM2NWEzMGQ7XFxyXFxuICAgIC0tbGltZS03MDA6ICM0ZDdjMGY7XFxyXFxuICAgIC0tZ3JpczogI0ZBRkFGQTtcXHJcXG4gICAgLS1ncmlzLW9zY3VybzogIzhhOGE4YTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSwgZGl2LCBuYXZ7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbntcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kLWZsZXh7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbiNjb250ZW50e1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NHB4IDEwMHB4IDFmcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4vKm5hdiBiYXIgdG9wICovXFxyXFxuXFxyXFxubmF2e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lLTYwMCk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYXtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYTpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKm5hdmJhciB0b3AgbGVmdCBzaWRlICAqL1xcclxcblxcclxcbi5uYXYtbHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sID4gZGl2e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtbCA+IGRpdiA+IGlucHV0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWwgLnNlYXJjaC1pbnB1dCBhIHN2ZyB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKm5hdmJhciB0b3AgcmlnaHQgc2lkZSAgKi9cXHJcXG5cXHJcXG4ubmF2LXJ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogd2hpdGUgb3ZlcmxheSAqL1xcclxcbi5vdmVybGF5e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY0NDtcXHJcXG4gICAgei1pbmRleDogNTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTmV3IHRhc2sgd2luZG93ICovXFxyXFxuXFxyXFxuI25ldy10YXNre1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDM1cHggMnB4ICMwMDAwMDA0MDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSA+IGRpdntcXHJcXG4gICAgbWFyZ2luOiAuM3JlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtICN0YXNrLW5hbWV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSA+IGRpdjpudGgtY2hpbGQoMyksICNuZXctdGFzayA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpe1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrIC5kdWUtZGF0ZS1kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSAuZXh0cmEtZmllbGRzID4gZGl2IHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSBsYWJlbHtcXHJcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSAjZHVlLWRhdGV7XFxyXFxuICAgIGNvbG9yOiAjNTU1O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI25ldy10YXNrIGZvcm0gLmJ1dHRvbnN7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnRuLWdyZWVue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lLTYwMCk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWdyZWVuOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lLTcwMCk7XFxyXFxufVxcclxcblxcclxcbi5idG4tY2FuY2Vse1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlzKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyaXMtb3NjdXJvKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jYW5jZWw6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIG5ldyBwcm9qZWN0IHdpbmRvdyAqL1xcclxcbiNuZXctcHJvamVjdHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIG1heC13aWR0aDogNTUwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzNXB4IDJweCAjMDAwMDAwNDA7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdCBmb3Jte1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QgPiBmb3JtIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3Jpcy1vc2N1cm8pO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdCA+IGZvcm0gaW5wdXQ6Zm9jdXN7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNuZXctcHJvamVjdCA+IGZvcm0gLnByb2otYnRuc3tcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxcclxcbn1cXHJcXG5cXHJcXG4vKiBzaWRlIGJhciAqL1xcclxcblxcclxcbi5zaWRlLWJhcntcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgcGFkZGluZzogIDJyZW07XFxyXFxuICAgIHRvcDogNDRweDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaXMpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgPiBkaXYgPiBhLCAudGFzay1oZWFkZXIgYSwgLnNpZGUtYmFyICNwcm9qZWN0cyBhIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICMwMDA7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgPiBkaXYgPiBhOmhvdmVyLC50YXNrLWhlYWRlciBhOmhvdmVyLCAuc2lkZS1iYXIgLmFjdGl2ZSwgLnNpZGUtYmFyICNwcm9qZWN0cyBhOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgI2NyZWF0ZWQtcHJvamVjdHN7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYmFyICNwcm9qZWN0c3tcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhciAjcHJvamVjdHMgYXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKnRhc2sgaGVhZGVyICovXFxyXFxuLnRhc2staGVhZGVye1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMjtcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi8qIHRhc2sgc3BhY2UgKi9cXHJcXG4udGFza3N7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAyO1xcclxcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxyXFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLyplYWNoIHRhc2sqL1xcclxcbi50YXNrIHtcXHJcXG4gICAgbWFyZ2luOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmlzLW9zY3Vybyk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6aG92ZXJ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ncmlzLW9zY3Vybyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50YXNrID4gZGl2e1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5kaXNwbGF5LWRhdGV7XFxyXFxuICAgIG1hcmdpbjogLjVyZW0gMDtcXHJcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgLmNoZWNrLWJ0biB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgLnRhc2stZGVzY3JpcHRpb257XFxyXFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxyXFxuICAgIG1hcmdpbjogMCAzcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayAuY29tcGxldGVkLXRhc2t7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5tb2QtYnRucyBzdmc6aG92ZXJ7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogaGlkZSBjbGFzcyAqL1xcclxcblxcclxcbi5oaWRle1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNBZnRlclxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBhZnRlciB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBhZnRlciAxMSBGZWJydWFyeSAxOTg3P1xuICogY29uc3QgcmVzdWx0ID0gaXNBZnRlcihuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQWZ0ZXIoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA+IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY2xvc2VUYXNrLCBsb2FkVGFza3MgfSBmcm9tIFwiLi9kb20tY29udGVudFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVJdCwgcmVJbml0VmFsdWVzIH0gZnJvbSBcIi4vdGFzay1mb3JtXCI7XHJcblxyXG5cclxubGV0IGFyclRlbXBvcmFsID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJUZWxlZm9ubyBlbiBtb2RvIGF2acOzblwiLFxyXG4gICAgICAgIFwiZGVzY2lwdGlvblwiOiBcIkhhc3RhIGxhcyA5IG5vIGNvbmVjdGFyIGVsIG3Ds3ZpbFwiLFxyXG4gICAgICAgIFwiZHVlRGF0ZVwiOiBcIjIwMjMtMDEtMzFUMjI6NDRcIixcclxuICAgICAgICBcInByaW9yaXR5XCI6IFwiaGlnaFwiLFxyXG4gICAgICAgIFwicHJvamVjdFwiOiBcIlwiLFxyXG4gICAgICAgIFwiY2hlY2tsaXN0XCI6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkVzdGlyYXJcIixcclxuICAgICAgICBcImRlc2NpcHRpb25cIjogXCJFc3RpcmFtaWVudG9zIGNhbGkgbW92ZVwiLFxyXG4gICAgICAgIFwiZHVlRGF0ZVwiOiBcIjIwMjMtMDItMjhUMjI6NDRcIixcclxuICAgICAgICBcInByaW9yaXR5XCI6IFwibWlkZGxlXCIsXHJcbiAgICAgICAgXCJwcm9qZWN0XCI6IFwiXCIsXHJcbiAgICAgICAgXCJjaGVja2xpc3RcIjogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIjE2IG1pbiBtaW5kZnVsbG5lc3NcIixcclxuICAgICAgICBcImRlc2NpcHRpb25cIjogXCJFc3RpcmFtaWVudG9zIGNhbGkgbW92ZVwiLFxyXG4gICAgICAgIFwiZHVlRGF0ZVwiOiBcIjIwMjMtMDEtMDRUMDg6NDRcIixcclxuICAgICAgICBcInByaW9yaXR5XCI6IFwibG93XCIsXHJcbiAgICAgICAgXCJwcm9qZWN0XCI6IFwiXCIsXHJcbiAgICAgICAgXCJjaGVja2xpc3RcIjogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkx1dGhlcmlhXCIsXHJcbiAgICAgICAgXCJkZXNjaXB0aW9uXCI6IFwiVW5hIGhvcmEgYSBtaXMgZ3VpdGFycmFzXCIsXHJcbiAgICAgICAgXCJkdWVEYXRlXCI6IFwiMjAyMy0wMS0xOFQxODowMFwiLFxyXG4gICAgICAgIFwicHJpb3JpdHlcIjogXCJtaWRkbGVcIixcclxuICAgICAgICBcInByb2plY3RcIjogXCJcIixcclxuICAgICAgICBcImNoZWNrbGlzdFwiOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiQ29tcHJhciB0b2FsbGEgamFwb25lc2FcIixcclxuICAgICAgICBcImRlc2NpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcImR1ZURhdGVcIjogXCIyMDIzLTAxLTA1VDE4OjAwXCIsXHJcbiAgICAgICAgXCJwcmlvcml0eVwiOiBcImxvd1wiLFxyXG4gICAgICAgIFwicHJvamVjdFwiOiBcIlwiLFxyXG4gICAgICAgIFwiY2hlY2tsaXN0XCI6IGZhbHNlXHJcbiAgICB9XHJcbl1cclxuXHJcblxyXG5jb25zdCBidG5BZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1hZGQnKVxyXG5cclxuYnRuQWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY3JlYXRlVGFzaygpO1xyXG4gICAgY2xvc2VUYXNrKCk7XHJcbn0pXHJcblxyXG5jb25zdCBjcmVhdGVUYXNrID0gKCkgPT4gIHtcclxuXHJcbiAgICBsZXQgbmV3VGFzayA9IGNyZWF0ZUl0KCk7XHJcblxyXG4gICAgaWYod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrJykpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXknKVxyXG4gICAgICAgIGxldCBzdG9yYWdlZFRhc2tzID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2snKSlcclxuICAgICAgICBzdG9yYWdlZFRhc2tzLnB1c2gobmV3VGFzaylcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFzaycsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VkVGFza3MpKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2snLCBKU09OLnN0cmluZ2lmeShbbmV3VGFza10pKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZUluaXRWYWx1ZXMoKTtcclxuICAgIGxvYWRUYXNrcygpO1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7Y3JlYXRlVGFzaywgYXJyVGVtcG9yYWx9O1xyXG5cclxuIiwiaW1wb3J0IHsgbG9hZFByb2plY3RzIH0gZnJvbSBcIi4vZG9tLWNvbnRlbnRcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2plY3QgPSBwcm9qZWN0TmFtZSA9PiAge1xyXG5cclxuICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSl7XHJcblxyXG4gICAgICAgIGxldCBzdG9yYWdlZFByb2plY3QgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSlcclxuICAgICAgICBzdG9yYWdlZFByb2plY3QucHVzaChwcm9qZWN0TmFtZSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlZFByb2plY3QpKVxyXG5cclxuICAgIH1lbHNle1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShbcHJvamVjdE5hbWVdKSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFByb2plY3RzKClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2plY3QgPSAoKSA9PiB7XHJcbiAgICBpZih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpe1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSlcclxuICAgIH1cclxufSIsImltcG9ydCB7IGxvYWRUYXNrcyB9IGZyb20gXCIuL2RvbS1jb250ZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlVGFzayA9IChpbmRleCkgPT4ge1xyXG4gICAgbGV0IHN0b3JhZ2VkVGFza3MgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFzaycpKVxyXG4gICAgc3RvcmFnZWRUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2snLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlZFRhc2tzKSlcclxuXHJcbiAgICBsb2FkVGFza3MoKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhcnJUZW1wb3JhbCB9IGZyb20gJy4vY3JlYXRlLW5ldydcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgZ2V0UHJvamVjdCB9IGZyb20gJy4vY3JlYXRlLXByb2plY3QnXHJcbmltcG9ydCB7IGRlbGV0ZVRhc2sgfSBmcm9tICcuL2RlbGV0ZS10YXNrJ1xyXG5pbXBvcnQgeyBsb2FkRWRpdGlvbiwgd3JpdGVFZGl0aW9uIH0gZnJvbSAnLi9lZGl0LXRhc2snXHJcbmltcG9ydCB7IGNyZWF0ZUl0LCByZUluaXRWYWx1ZXMsIHZhbHVlc0VkaXQgfSBmcm9tICcuL3Rhc2stZm9ybSdcclxuaW1wb3J0IHsgaXNUb2RheSwgaXNBZnRlciB9IGZyb20gJ2RhdGUtZm5zJ1xyXG5cclxuXHJcbmNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcclxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcclxuY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLWJhcicpXHJcblxyXG5jb25zdCB0YXNrSGVhZGVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWhlYWRlciA+IGgyJylcclxubGV0IHNpZGVCYXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlLWJhciBkaXY6Zmlyc3QtY2hpbGQgYSwgLnNpZGUtYmFyICNwcm9qZWN0cyBhJylcclxuXHJcbnRhc2tIZWFkZXJUZXh0LmlubmVySFRNTCA9ICdUb2RheSdcclxuc2lkZUJhckl0ZW1zWzFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblxyXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzaWRlQmFySXRlbXMuZm9yRWFjaChpID0+IHtcclxuICAgICAgICBpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9KVxyXG4gICAgc2lkZUJhckl0ZW1zWzFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICB0YXNrSGVhZGVyVGV4dC5pbm5lckhUTUwgPSAnVG9kYXknXHJcbn0pXHJcblxyXG5jb25zb2xlLmxvZyhzaWRlQmFySXRlbXMpXHJcbmNvbnN0IHNpZGVCYXJJdGVtc0V2ZW50ID0gKCkgPT4ge1xyXG4gICAgc2lkZUJhckl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNpZGVCYXJJdGVtcy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIHRhc2tIZWFkZXJUZXh0LmlubmVySFRNTCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignZGl2JykudGV4dENvbnRlbnRcclxuICAgICAgICAgICAgbG9hZFRhc2tzKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZihzaWRlQmFyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKXtcclxuICAgICAgICBjb250ZW50LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcIjMwMHB4IDFmclwiO1xyXG4gICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb250ZW50LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcIjAgMWZyXCI7XHJcbiAgICAgICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2snKVxyXG5jb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0JylcclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JylcclxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpXHJcbmNvbnN0IG5ld1Rhc2tXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2sgPiBmb3JtJylcclxuY29uc3QgYnRuQ2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jYW5jZWwnKVxyXG5jb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY2xvc2UnKVxyXG5jb25zdCBidG5BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWFkZCcpXHJcbmNvbnN0IGJ0bkVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWVkaXQnKVxyXG5cclxuXHJcblxyXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBidG5BZGQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgbmV3VGFza1dpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgIG5ld1Rhc2suY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNsb3NlVGFzayA9ICgpID0+IHtcclxuICAgIGJ0bkFkZC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgIGJ0bkVkaXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgbmV3VGFza1dpbmRvdy5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG59XHJcblxyXG5idG5DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHsgXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNsb3NlVGFzaygpIFxyXG4gICAgfVxyXG4pXHJcblxyXG5idG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4geyBcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY2xvc2VUYXNrKCkgXHJcbiAgICB9XHJcbilcclxuXHJcbm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHsgXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNsb3NlVGFzaygpIFxyXG4gICAgfVxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZFRhc2tzID0gKCkgPT4ge1xyXG4gICAgaWYod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrJykpe1xyXG4gICAgICAgIGxldCB0YXNrU3RvcmVkID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2snKSlcclxuICAgICAgICBsZXQgdGFza0NvbnRlbnQgPSB0YXNrU3RvcmVkLnJlZHVjZSgoYWNjLCB0YXNrLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tIZWFkZXJUZXh0LmlubmVySFRNTClcclxuICAgICAgICAgICAgbGV0IHt0aXRsZSwgZGVzY2lwdGlvbiwgZHVlRGF0ZSwgZHVlVGltZSwgcHJpb3JpdHksIHByb2plY3QsIGNoZWNrbGlzdH0gPSB0YXNrXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKGR1ZURhdGUpKVxyXG4gICAgICAgICAgICBpZihcclxuICAgICAgICAgICAgICAgIHRhc2tIZWFkZXJUZXh0LmlubmVySFRNTC50cmltKCkgPT09ICdJbmJveCcgfHxcclxuICAgICAgICAgICAgICAgIHRhc2tIZWFkZXJUZXh0LmlubmVySFRNTC50cmltKCkgPT09ICdUb2RheScgJiYgaXNUb2RheShuZXcgRGF0ZShkdWVEYXRlKSkgfHxcclxuICAgICAgICAgICAgICAgIHRhc2tIZWFkZXJUZXh0LmlubmVySFRNTC50cmltKCkgPT09ICdVcGNvbWluZycgJiYgaXNBZnRlcihuZXcgRGF0ZShkdWVEYXRlKSwgbmV3IERhdGUoKSkgfHxcclxuICAgICAgICAgICAgICAgIHRhc2tIZWFkZXJUZXh0LmlubmVySFRNTC50cmltKCkgPT09ICdGaW5pc2hlZCBub3QgZGVsZXRlZCcgJiYgY2hlY2tsaXN0ID09PSB0cnVlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgIGFjYyArPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1wiIGRhdGEtdGFzaz1cIiR7aX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCAgJHtjaGVja2xpc3QgPyBgY29tcGxldGVkLXRhc2tgOiBgYH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2stYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c2hvd0NoZWNrZWQoY2hlY2tsaXN0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2Rlc2NpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggbW9kLWJ0bnNcIj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtlZGl0U3ZnKGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c2hvd1ByaW9yaXR5KHByaW9yaXR5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RyYXNoU3ZnKGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5LWRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtkdWVEYXRlfSBhdCAke2R1ZVRpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gYFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhY2NcclxuICAgICAgICB9LCAnJylcclxuICAgICAgICB0YXNrLmlubmVySFRNTCA9IHRhc2tDb250ZW50O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRFdmVudExpc3RlbmVyKCk7XHJcbiAgICBkZWxldGVFdmVudExpc3RlbmVyKCk7XHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJylcclxuY29uc3QgcHJvamVjdHNPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgIHByb2plY3RzRGl2LmlubmVySFRNTCA9ICcnXHJcbiAgICBwcm9qZWN0c09wdGlvbnMuaW5uZXJIVE1MID0gYDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZCBkaXNhYmxlZD5TZWxlY3QgUHJvamVjdDwvb3B0aW9uPmBcclxuICAgIGxldCBwcm9qZWN0cyA9IGdldFByb2plY3QoKVxyXG5cclxuICAgIHByb2plY3RzLmZvckVhY2gocHJvaiA9PiB7XHJcbiAgICAgICAgcHJvamVjdHNEaXYuaW5uZXJIVE1MICs9IGA8YSBocmVmPVwiXCI+PGRpdj4ke3Byb2p9PC9kaXY+PC9hPmBcclxuICAgICAgICBwcm9qZWN0c09wdGlvbnMuaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtwcm9qfVwiPiR7cHJvan08L29wdGlvbj5gXHJcbiAgICB9KVxyXG4gICAgc2lkZUJhckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGUtYmFyIGRpdjpmaXJzdC1jaGlsZCBhLCAuc2lkZS1iYXIgI3Byb2plY3RzIGEnKVxyXG4gICAgY29uc29sZS5sb2coc2lkZUJhckl0ZW1zKVxyXG4gICAgc2lkZUJhckl0ZW1zRXZlbnQoKTtcclxufVxyXG5cclxubGV0IHRhc2tJbmZvLCB0YXNrSW5kZXg7XHJcblxyXG5jb25zdCBlZGl0RXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3ZnLmVkaXQtYnRuJylcclxuICAgIGVkaXRCdG5zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGJ0bkVkaXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgIG5ld1Rhc2tXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgIHRhc2tJbmRleCA9IGJ0bi5kYXRhc2V0LnRhc2tcclxuICAgICAgICAgICAgdGFza0luZm8gPSBsb2FkRWRpdGlvbih0YXNrSW5kZXgpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tJbmZvKVxyXG4gICAgICAgICAgICB2YWx1ZXNFZGl0KHRhc2tJbmZvKVxyXG4gICAgICAgICAgIC8vIHdyaXRlRWRpdGlvbihidG4uZGF0YXNldC50YXNrLCB2YWx1ZXNFZGl0KHRhc2tJbmZvKSlcclxuICAgICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZGVsZXRlRXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N2Zy5kZWxldGUtYnRuJylcclxuICAgIGRlbGV0ZUJ0bi5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGVUYXNrKGJ0bi5kYXRhc2V0LmRlbGV0ZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufVxyXG5cclxuYnRuRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zb2xlLmxvZyh0YXNrSW5mbylcclxuICAgIHdyaXRlRWRpdGlvbih0YXNrSW5kZXgsIGNyZWF0ZUl0KCkpXHJcbiAgICByZUluaXRWYWx1ZXMoKTtcclxuICAgIGNsb3NlVGFzaygpIFxyXG59KVxyXG5cclxuY29uc3Qgc2hvd1ByaW9yaXR5ID0gcHJpb3JpdHkgPT4ge1xyXG4gICAgbGV0IGRpc3BsYXlQcmlvcml0eSA9IGAke3ByaW9yaXR5PT09J2hpZ2gnPyBgPHN2ZyBzdHlsZT1cIndpZHRoOjIwcHg7aGVpZ2h0OjIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICA8cGF0aCBmaWxsPVwicmVkXCIgZD1cIk0xNC40LDZMMTQsNEg1VjIxSDdWMTRIMTIuNkwxMywxNkgyMFY2SDE0LjRaXCIgLz5cclxuPC9zdmc+YDogKHByaW9yaXR5PT09J21pZGRsZSc/IGA8c3ZnIHN0eWxlPVwid2lkdGg6MjBweDtoZWlnaHQ6MjBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuPHBhdGggZmlsbD1cIm9yYW5nZVwiIGQ9XCJNMTQuNCw2TDE0LDRINVYyMUg3VjE0SDEyLjZMMTMsMTZIMjBWNkgxNC40WlwiIC8+XHJcbjwvc3ZnPmAgOiBgPHN2ZyBzdHlsZT1cIndpZHRoOjIwcHg7aGVpZ2h0OjIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbjxwYXRoIGZpbGw9XCJncmVlblwiIGQ9XCJNMTQuNCw2TDE0LDRINVYyMUg3VjE0SDEyLjZMMTMsMTZIMjBWNkgxNC40WlwiIC8+XHJcbjwvc3ZnPmApfWBcclxuICAgIHJldHVybiBkaXNwbGF5UHJpb3JpdHlcclxufVxyXG5cclxuY29uc3Qgc2hvd0NoZWNrZWQgPSBjaGVja2xpc3QgPT4ge1xyXG4gICAgbGV0IGRpc3BsYXlDaGVja2VkID0gYCR7Y2hlY2tsaXN0ID8gYDxzdmcgc3R5bGU9XCJ3aWR0aDoxNnB4O2hlaWdodDoxNnB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgIDxwYXRoIGZpbGw9XCJncmVlblwiIGQ9XCJNOSwyMC40MkwyLjc5LDE0LjIxTDUuNjIsMTEuMzhMOSwxNC43N0wxOC44OCw0Ljg4TDIxLjcxLDcuNzFMOSwyMC40MlpcIiAvPlxyXG4gICAgICAgIDwvc3ZnPmAgOiBgPHN2ZyBzdHlsZT1cIndpZHRoOjE2cHg7aGVpZ2h0OjE2cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE5LDNINUMzLjg5LDMgMywzLjg5IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWNUMyMSwzLjg5IDIwLjEsMyAxOSwzTTE5LDVWMTlINVY1SDE5WlwiIC8+XHJcbiAgICAgICAgPC9zdmc+YH1gXHJcbiAgICByZXR1cm4gZGlzcGxheUNoZWNrZWRcclxufVxyXG5cclxuY29uc3QgZWRpdFN2ZyA9IGkgPT4ge1xyXG4gICAgcmV0dXJuIGA8c3ZnIGNsYXNzPVwiZWRpdC1idG5cIiBkYXRhLXRhc2s9XCIke2l9XCIgc3R5bGU9XCJ3aWR0aDoyMHB4O2hlaWdodDoyMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjAgMkg0QzIuOSAyIDIgMi45IDIgNFYxNkMyIDE3LjExIDIuOSAxOCA0IDE4SDhMMTIgMjJMMTYgMThIMjBDMjEuMTEgMTggMjIgMTcuMTEgMjIgMTZWNEMyMiAyLjkgMjEuMTEgMiAyMCAyTTkuMDggMTVIN1YxMi45MUwxMy4xNyA2LjcyTDE1LjI0IDguOEw5LjA4IDE1TTE2Ljg0IDcuMkwxNS44MyA4LjIxTDEzLjc2IDYuMThMMTQuNzcgNS4xNkMxNC45NyA0Ljk1IDE1LjMxIDQuOTQgMTUuNTUgNS4xNkwxNi44NCA2LjQxQzE3LjA1IDYuNjIgMTcuMDYgNi45NiAxNi44NCA3LjJaXCIgLz5cclxuPC9zdmc+YFxyXG59XHJcblxyXG5jb25zdCB0cmFzaFN2ZyA9IGkgPT4ge1xyXG4gICAgcmV0dXJuIGA8c3ZnIGNsYXNzPVwiZGVsZXRlLWJ0blwiIGRhdGEtZGVsZXRlPVwiJHtpfVwiIHN0eWxlPVwid2lkdGg6MjBweDtoZWlnaHQ6MjBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE5LDRIMTUuNUwxNC41LDNIOS41TDguNSw0SDVWNkgxOU02LDE5QTIsMiAwIDAsMCA4LDIxSDE2QTIsMiAwIDAsMCAxOCwxOVY3SDZWMTlaXCIgLz5cclxuPC9zdmc+YFxyXG59XHJcblxyXG5cclxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtJylcclxuY29uc3QgYWRkUHJvakJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvai1idG4nKVxyXG5jb25zdCBhZGRUaGVQcm9qQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qJylcclxuY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvai1uYW1lJylcclxuXHJcbmFkZFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG59KVxyXG5cclxuYWRkVGhlUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNyZWF0ZVByb2plY3QocHJvak5hbWUudmFsdWUpXHJcblxyXG4gICAgcHJvak5hbWUudmFsdWUgPSAnJ1xyXG4gICAgY2xvc2VUYXNrKCk7XHJcbn0pXHJcbiIsImltcG9ydCB7IGxvYWRUYXNrcyB9IGZyb20gXCIuL2RvbS1jb250ZW50XCJcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkRWRpdGlvbiA9IChpbmRleCkgPT4ge1xyXG4gICAgbGV0IHN0b3JhZ2VkVGFza3MgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFzaycpKVxyXG4gICAgcmV0dXJuIHN0b3JhZ2VkVGFza3NbaW5kZXhdXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgd3JpdGVFZGl0aW9uID0gKGluZGV4LCBlZGl0ZWRUYXNrKSA9PiB7XHJcbiAgICBsZXQgc3RvcmFnZWRUYXNrcyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrJykpXHJcbiAgICBzdG9yYWdlZFRhc2tzW2luZGV4XSA9IGVkaXRlZFRhc2tcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZWRUYXNrcykpXHJcblxyXG4gICAgbG9hZFRhc2tzKCk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xyXG4gICAgbGV0IHN0b3JhZ2U7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XHJcbiAgICAgICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcclxuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXHJcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxyXG4gICAgICAgICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxyXG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcclxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG4gICAgICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XHJcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxyXG4gICAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxyXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5jb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbmFtZScpXHJcbmNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGVzY3JpcHRpb24nKVxyXG5jb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUnKVxyXG5jb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKVxyXG5jb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpXHJcbmNvbnN0IHRhc2tEb25lQ2hlY2tidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kb25lJylcclxuXHJcbmxldCB0YXNrTmFtZSA9IHRhc2tOYW1lSW5wdXQudmFsdWU7XHJcbmxldCB0YXNrRGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcclxubGV0IGR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XHJcbmxldCBwcm9qZWN0ID0gcHJvamVjdFNlbGVjdC52YWx1ZTtcclxubGV0IHByaW9yaXR5ID0gcHJpb3JpdHlTZWxlY3QudmFsdWU7XHJcbmxldCB0YXNrRG9uZSA9IHRhc2tEb25lQ2hlY2tidXR0b24uY2hlY2tlZDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVJbml0VmFsdWVzID0gKCkgPT4ge1xyXG4gICAgdGFza05hbWVJbnB1dC52YWx1ZSA9ICcnXHJcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9ICcnXHJcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSAnJ1xyXG4gICAgcHJvamVjdFNlbGVjdC52YWx1ZSA9ICcnXHJcbiAgICBwcmlvcml0eVNlbGVjdC52YWx1ZSA9ICcnXHJcbiAgICB0YXNrRG9uZUNoZWNrYnV0dG9uLmNoZWNrZWQgPSBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdmFsdWVzRWRpdCA9ICh0YXNrKSA9PiB7XHJcbiAgICBsZXQge3RpdGxlLCBkZXNjaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgY2hlY2tsaXN0fSA9IHRhc2tcclxuXHJcbiAgICB0YXNrTmFtZUlucHV0LnZhbHVlID0gdGl0bGU7XHJcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IGRlc2NpcHRpb247XHJcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBkdWVEYXRlO1xyXG4gICAgcHJvamVjdFNlbGVjdC52YWx1ZSA9IHByb2plY3RcclxuICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gcHJpb3JpdHk7XHJcbiAgICB0YXNrRG9uZUNoZWNrYnV0dG9uLmNoZWNrZWQgPSBjaGVja2xpc3Q7XHJcbiAgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVJdCA9ICgpID0+IHtcclxuICAgIHRhc2tOYW1lID0gdGFza05hbWVJbnB1dC52YWx1ZTtcclxuICAgIHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG4gICAgZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcclxuICAgIHByb2plY3QgPSBwcm9qZWN0U2VsZWN0LnZhbHVlO1xyXG4gICAgcHJpb3JpdHkgPSBwcmlvcml0eVNlbGVjdC52YWx1ZTtcclxuICAgIHRhc2tEb25lID0gdGFza0RvbmVDaGVja2J1dHRvbi5jaGVja2VkO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbmV3IFRhc2sodGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIHRhc2tEb25lKTtcclxufSIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY2lwdGlvbiwgZHVlRGF0ZSwgIHByaW9yaXR5LCBwcm9qZWN0LCBjaGVja2xpc3Qpe1xyXG4gICAgIFxyXG4gICAgICAgIGNvbnN0IGlucHV0RGF0ZSA9IGR1ZURhdGUuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoRGF0ZS5wYXJzZShpbnB1dERhdGUpKTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0geyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJyB9O1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLmRlc2NpcHRpb24gPSBkZXNjaXB0aW9uIFxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGZvcm1hdHRlZERhdGVcclxuICAgICAgICB0aGlzLmR1ZVRpbWUgPSBkdWVEYXRlLnNwbGl0KCdUJylbMV1cclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XHJcbiAgICAgICAgdGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3RcclxuXHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL2NyZWF0ZS1uZXcnO1xyXG5pbXBvcnQgeyBsb2FkUHJvamVjdHMsIGxvYWRUYXNrcyB9IGZyb20gJy4vZG9tLWNvbnRlbnQnO1xyXG5pbXBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XHJcbiAgICBjb25zb2xlLmxvZygnbG9jYWwgc3RvcmFnZSBmb3VuZCcpXHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ25vIGxvY2FsIHN0b3JhZ2UgYXZhaWxhYmxlJylcclxuICB9XHJcblxyXG5sb2FkVGFza3MoKTtcclxubG9hZFByb2plY3RzKCk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9