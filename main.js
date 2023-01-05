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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n    --lime-400: #a3e635;\r\n    --lime-600: #65a30d;\r\n    --lime-700: #4d7c0f;\r\n    --gris: #FAFAFA;\r\n    --gris-oscuro: #8a8a8a;\r\n}\r\n\r\nbody, div, nav{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbutton{\r\n    border-radius: 8px;\r\n    border: none;\r\n    padding: 0.7rem 1rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n}\r\n\r\n.d-flex{\r\n    display: flex;\r\n    gap: 15px;\r\n    \r\n}\r\n\r\n#content{\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n    grid-template-rows: 44px 100px 1fr;\r\n    position: relative;\r\n    transition: all .2s;\r\n}\r\n\r\nnav{\r\n    background-color: var(--lime-600);\r\n    padding: 1rem 2rem;\r\n    position: sticky;\r\n    top: 0;\r\n    left: 0;\r\n    justify-content: space-between;\r\n    grid-column: 1 / 3;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\nnav a{\r\n    color: #fff;\r\n    padding: .2rem;\r\n}\r\n\r\nnav a:hover{\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.nav-l{\r\n    align-items: center;\r\n}\r\n\r\n.nav-l > div{\r\n    background-color: #fff;\r\n    display: flex;\r\n    align-items: center;\r\n    border-radius: 3px;\r\n    padding: 0 .2rem;\r\n}\r\n\r\n.nav-l > div > input{\r\n    background-color: #00000000;\r\n    color: #000;\r\n    border: none;\r\n    outline-style: none;\r\n    \r\n}\r\n\r\n.nav-l .search-input a svg {\r\n    color: #000;\r\n}\r\n\r\n.nav-r{\r\n    align-items: center\r\n}\r\n\r\n.overlay{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #ffffff44;\r\n    z-index: 5;\r\n}\r\n\r\n\r\n#new-task{\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n    background-color: #fff;\r\n    max-width: 550px;\r\n    width: 100%;\r\n    z-index: 10;\r\n    border-radius: 16px;\r\n    box-shadow: 0px 0px 35px 2px #00000040;\r\n}\r\n\r\n#new-task > form {\r\n    padding: 1rem 3rem;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n#new-task > form > div{\r\n    margin: .3rem 0;\r\n}\r\n\r\n#new-task > form input {\r\n    border: none;\r\n    outline-style: none;\r\n}\r\n\r\n#new-task > form #task-name{\r\n    font-size: 2rem;\r\n}\r\n\r\n\r\n#new-task > form > div:nth-child(3), #new-task > form > div:nth-child(4){\r\n    justify-content: space-between\r\n}\r\n\r\n#new-task .due-date-div {\r\n    display: flex;\r\n    flex-direction: column;    \r\n\r\n}\r\n\r\n#new-task > form .extra-fields > div {\r\n    align-items: center;\r\n}\r\n\r\n#new-task > form label{\r\n    font-size: .8rem;\r\n}\r\n\r\n#new-task > form #due-date{\r\n    color: #555;\r\n    border: 1px solid ;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n#new-task form .buttons{\r\n    justify-content: end;\r\n}\r\n\r\n\r\n.btn-add{\r\n    background-color: var(--lime-600);\r\n    color: #fff;\r\n}\r\n\r\n.btn-add:hover{\r\n    background-color: var(--lime-700);\r\n}\r\n\r\n.btn-cancel{\r\n    background-color: var(--gris);\r\n    color: var(--gris-oscuro);\r\n}\r\n\r\n.btn-cancel:hover{\r\n    background-color: #e3e3e3;\r\n}\r\n\r\n.side-bar{\r\n    position: sticky;\r\n    padding:  2rem;\r\n    top: 44px;\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 4;\r\n    background-color: var(--gris);\r\n}\r\n\r\n.side-bar > div > a, .task-header a {\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem;\r\n    font-size: 0.8rem;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    color: #000\r\n}\r\n\r\n.side-bar > div > a:hover,.task-header a:hover, .side-bar .active{\r\n    background-color: #00000008;\r\n    \r\n}\r\n\r\n.task-header{\r\n    padding: 1rem 2rem;\r\n    grid-column: 2 / 2;\r\n    grid-row: 2 / 3;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.tasks{\r\n    padding: 1rem 2rem;\r\n    grid-column: 2 / 2;\r\n    grid-row: 3 / 4;\r\n    overflow-x: scroll;\r\n}\r\n\r\n/*each task*/\r\n.task {\r\n    margin: 1.5rem;\r\n    padding: 1rem;\r\n    border-bottom: 1px solid var(--gris-oscuro);\r\n    cursor: pointer;\r\n    transition: all .2s;\r\n}\r\n\r\n.task:hover{\r\n    border-bottom: 2px solid var(--gris-oscuro);\r\n}\r\n\r\n\r\n.task > div{\r\n    justify-content: space-between;\r\n}\r\n\r\n.task .display-date{\r\n    margin: .5rem 0;\r\n    font-size: .7rem;\r\n}\r\n\r\n.task .check-btn {\r\n    cursor: pointer;\r\n}\r\n\r\n.task .completed-task{\r\n    text-decoration:line-through;\r\n}\r\n\r\n\r\n.hide{\r\n    display: none;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,yCAAyC;AAC7C;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;IACpB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,SAAS;;AAEb;;AAEA;IACI,aAAa;IACb,aAAa;IACb,gCAAgC;IAChC,kCAAkC;IAClC,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,gBAAgB;IAChB,MAAM;IACN,OAAO;IACP,8BAA8B;IAC9B,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;IAC3B,WAAW;IACX,YAAY;IACZ,mBAAmB;;AAEvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI;AACJ;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,UAAU;AACd;;;AAGA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,sBAAsB;IACtB,gBAAgB;IAChB,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,sCAAsC;AAC1C;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;;AAE1B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;;AAE1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;;AAGA;IACI,oBAAoB;AACxB;;;AAGA;IACI,iCAAiC;IACjC,WAAW;AACf;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,6BAA6B;IAC7B,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,SAAS;IACT,kBAAkB;IAClB,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB;AACJ;;AAEA;IACI,2BAA2B;;AAE/B;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;AACtB;;AAEA,YAAY;AACZ;IACI,cAAc;IACd,aAAa;IACb,2CAA2C;IAC3C,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,2CAA2C;AAC/C;;;AAGA;IACI,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,4BAA4B;AAChC;;;AAGA;IACI,aAAa;AACjB","sourcesContent":[":root{\r\n    --lime-400: #a3e635;\r\n    --lime-600: #65a30d;\r\n    --lime-700: #4d7c0f;\r\n    --gris: #FAFAFA;\r\n    --gris-oscuro: #8a8a8a;\r\n}\r\n\r\nbody, div, nav{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbutton{\r\n    border-radius: 8px;\r\n    border: none;\r\n    padding: 0.7rem 1rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n}\r\n\r\n.d-flex{\r\n    display: flex;\r\n    gap: 15px;\r\n    \r\n}\r\n\r\n#content{\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n    grid-template-rows: 44px 100px 1fr;\r\n    position: relative;\r\n    transition: all .2s;\r\n}\r\n\r\nnav{\r\n    background-color: var(--lime-600);\r\n    padding: 1rem 2rem;\r\n    position: sticky;\r\n    top: 0;\r\n    left: 0;\r\n    justify-content: space-between;\r\n    grid-column: 1 / 3;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\nnav a{\r\n    color: #fff;\r\n    padding: .2rem;\r\n}\r\n\r\nnav a:hover{\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.nav-l{\r\n    align-items: center;\r\n}\r\n\r\n.nav-l > div{\r\n    background-color: #fff;\r\n    display: flex;\r\n    align-items: center;\r\n    border-radius: 3px;\r\n    padding: 0 .2rem;\r\n}\r\n\r\n.nav-l > div > input{\r\n    background-color: #00000000;\r\n    color: #000;\r\n    border: none;\r\n    outline-style: none;\r\n    \r\n}\r\n\r\n.nav-l .search-input a svg {\r\n    color: #000;\r\n}\r\n\r\n.nav-r{\r\n    align-items: center\r\n}\r\n\r\n.overlay{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #ffffff44;\r\n    z-index: 5;\r\n}\r\n\r\n\r\n#new-task{\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n    background-color: #fff;\r\n    max-width: 550px;\r\n    width: 100%;\r\n    z-index: 10;\r\n    border-radius: 16px;\r\n    box-shadow: 0px 0px 35px 2px #00000040;\r\n}\r\n\r\n#new-task > form {\r\n    padding: 1rem 3rem;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n#new-task > form > div{\r\n    margin: .3rem 0;\r\n}\r\n\r\n#new-task > form input {\r\n    border: none;\r\n    outline-style: none;\r\n}\r\n\r\n#new-task > form #task-name{\r\n    font-size: 2rem;\r\n}\r\n\r\n\r\n#new-task > form > div:nth-child(3), #new-task > form > div:nth-child(4){\r\n    justify-content: space-between\r\n}\r\n\r\n#new-task .due-date-div {\r\n    display: flex;\r\n    flex-direction: column;    \r\n\r\n}\r\n\r\n#new-task > form .extra-fields > div {\r\n    align-items: center;\r\n}\r\n\r\n#new-task > form label{\r\n    font-size: .8rem;\r\n}\r\n\r\n#new-task > form #due-date{\r\n    color: #555;\r\n    border: 1px solid ;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n#new-task form .buttons{\r\n    justify-content: end;\r\n}\r\n\r\n\r\n.btn-add{\r\n    background-color: var(--lime-600);\r\n    color: #fff;\r\n}\r\n\r\n.btn-add:hover{\r\n    background-color: var(--lime-700);\r\n}\r\n\r\n.btn-cancel{\r\n    background-color: var(--gris);\r\n    color: var(--gris-oscuro);\r\n}\r\n\r\n.btn-cancel:hover{\r\n    background-color: #e3e3e3;\r\n}\r\n\r\n.side-bar{\r\n    position: sticky;\r\n    padding:  2rem;\r\n    top: 44px;\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 4;\r\n    background-color: var(--gris);\r\n}\r\n\r\n.side-bar > div > a, .task-header a {\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem;\r\n    font-size: 0.8rem;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    color: #000\r\n}\r\n\r\n.side-bar > div > a:hover,.task-header a:hover, .side-bar .active{\r\n    background-color: #00000008;\r\n    \r\n}\r\n\r\n.task-header{\r\n    padding: 1rem 2rem;\r\n    grid-column: 2 / 2;\r\n    grid-row: 2 / 3;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.tasks{\r\n    padding: 1rem 2rem;\r\n    grid-column: 2 / 2;\r\n    grid-row: 3 / 4;\r\n    overflow-x: scroll;\r\n}\r\n\r\n/*each task*/\r\n.task {\r\n    margin: 1.5rem;\r\n    padding: 1rem;\r\n    border-bottom: 1px solid var(--gris-oscuro);\r\n    cursor: pointer;\r\n    transition: all .2s;\r\n}\r\n\r\n.task:hover{\r\n    border-bottom: 2px solid var(--gris-oscuro);\r\n}\r\n\r\n\r\n.task > div{\r\n    justify-content: space-between;\r\n}\r\n\r\n.task .display-date{\r\n    margin: .5rem 0;\r\n    font-size: .7rem;\r\n}\r\n\r\n.task .check-btn {\r\n    cursor: pointer;\r\n}\r\n\r\n.task .completed-task{\r\n    text-decoration:line-through;\r\n}\r\n\r\n\r\n.hide{\r\n    display: none;\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");




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

const taskNameInput = document.getElementById('task-name')
const taskDescriptionInput = document.getElementById('task-description')
const dueDateInput = document.getElementById('due-date')
const projectSelect = document.getElementById('project')
const prioritySelect = document.getElementById('priority')
const taskDoneCheckbutton = document.getElementById('task-done')

const btnAddTask = document.getElementById('btn-add')

btnAddTask.addEventListener('click', e => {
    e.preventDefault();
    createTask();
    (0,_dom_content__WEBPACK_IMPORTED_MODULE_0__.closeNewTask)();
})


const createTask = () =>  {
    
    let taskName = taskNameInput.value;
    let taskDescription = taskDescriptionInput.value;
    let dueDate = dueDateInput.value;
    let project = projectSelect.value;
    let priority = prioritySelect.value;
    let taskDone = taskDoneCheckbutton.checked;
    
    let newTask = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, taskDescription, dueDate, priority, project, taskDone);

    if(window.localStorage.getItem('task')){
        console.log('hey')
        let storagedTasks = JSON.parse(window.localStorage.getItem('task'))
        storagedTasks.push(newTask)
        localStorage.setItem('task', JSON.stringify(storagedTasks))
    }else{
        localStorage.setItem('task', JSON.stringify([newTask]))

    }

    
    arrTemporal.push(newTask);

    console.log(arrTemporal)
}






/***/ }),

/***/ "./src/dom-content.js":
/*!****************************!*\
  !*** ./src/dom-content.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeNewTask": () => (/* binding */ closeNewTask),
/* harmony export */   "loadTasks": () => (/* binding */ loadTasks)
/* harmony export */ });
/* harmony import */ var _create_new__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-new */ "./src/create-new.js");


const task = document.querySelector('.tasks')

const content = document.getElementById('content')
const menuBtn = document.getElementById('menu')
const homeBtn = document.getElementById('home')
const sideBar = document.querySelector('.side-bar')

const taskHeaderText = document.querySelector('#task-header > h2')
const sideBarItems = document.querySelectorAll('.side-bar a')

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

sideBarItems.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        sideBarItems.forEach(i => {
            i.classList.remove('active')
        })
        item.classList.add('active')
        taskHeaderText.innerHTML = item.querySelector('div').textContent
    })
})

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


const overlay = document.querySelector('.overlay')
const addTaskBtn = document.getElementById('add-task')
const newTaskWindow = document.querySelector('#new-task > form')
const btnCancel = document.getElementById('btn-cancel')


addTaskBtn.addEventListener('click', e => {
    e.preventDefault();
    overlay.classList.remove('hide')
    newTaskWindow.classList.remove('hide')
})


const closeNewTask = () => {
    overlay.classList.add('hide')
    newTaskWindow.classList.add('hide')
}

btnCancel.addEventListener('click', e => { 
        e.preventDefault();
        closeNewTask() 
    }
)

overlay.addEventListener('click', e => { 
        e.preventDefault();
        closeNewTask() 
    }
)

const loadTasks = () => {
    if(window.localStorage.getItem('task')){
        let taskStored = JSON.parse(window.localStorage.getItem('task'))
        let taskContent = taskStored.reduce((acc, task) => {
            let {title, desciption, dueDate, priority, project, checklist} = task
            acc += `
            <div class="task">
                    <div class="d-flex  ${checklist ? `completed-task`: ``}">
                        <div class="d-flex">
                            <div class="check-btn">
                                ${showChecked(checklist)}
                            </div>
                            <div>
                                ${title}
                            </div>
                        </div> 
                        ${showPriority(priority)}
                    </div>
                <div class="display-date">
                    ${dueDate}
                </div>
            </div> `
            return acc
        }, '')
        task.innerHTML = taskContent;
        
    }
}


const showPriority = priority => {
    let displayPriority = `${priority==='high'? `<svg style="width:16px;height:16px" viewBox="0 0 24 24">
    <path fill="red" d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" />
</svg>`: (priority==='middle'? `<svg style="width:16px;height:16px" viewBox="0 0 24 24">
<path fill="orange" d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" />
</svg>` : `<svg style="width:16px;height:16px" viewBox="0 0 24 24">
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
        
        this.title = title
        this.desciption = desciption 
        this.dueDate = dueDate/*.toISOString().split('T')*/
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
    console.log('tuto bene')
  }
  else {
    console.log('no local storage available')
  }

(0,_dom_content__WEBPACK_IMPORTED_MODULE_1__.loadTasks)();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxrQ0FBa0M7QUFDbEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUhPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQztBQUNJO0FBQ1M7QUFDbkQ7QUFDcUI7QUFDckI7QUFDQSxJQUFJLGdFQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBUztBQUNUO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGUtbmV3LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RvbS1jb250ZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcclxcbiAgICAtLWxpbWUtNDAwOiAjYTNlNjM1O1xcclxcbiAgICAtLWxpbWUtNjAwOiAjNjVhMzBkO1xcclxcbiAgICAtLWxpbWUtNzAwOiAjNGQ3YzBmO1xcclxcbiAgICAtLWdyaXM6ICNGQUZBRkE7XFxyXFxuICAgIC0tZ3Jpcy1vc2N1cm86ICM4YThhOGE7XFxyXFxufVxcclxcblxcclxcbmJvZHksIGRpdiwgbmF2e1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b257XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1mbGV4e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDRweCAxMDBweCAxZnI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG59XFxyXFxuXFxyXFxubmF2e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lLTYwMCk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYXtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYTpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWx7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbCA+IGRpdntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBwYWRkaW5nOiAwIC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWwgPiBkaXYgPiBpbnB1dHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sIC5zZWFyY2gtaW5wdXQgYSBzdmcge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1ye1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY0NDtcXHJcXG4gICAgei1pbmRleDogNTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI25ldy10YXNre1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDM1cHggMnB4ICMwMDAwMDA0MDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSA+IGRpdntcXHJcXG4gICAgbWFyZ2luOiAuM3JlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtICN0YXNrLW5hbWV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSA+IGRpdjpudGgtY2hpbGQoMyksICNuZXctdGFzayA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpe1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrIC5kdWUtZGF0ZS1kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSAuZXh0cmEtZmllbGRzID4gZGl2IHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSBsYWJlbHtcXHJcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSAjZHVlLWRhdGV7XFxyXFxuICAgIGNvbG9yOiAjNTU1O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI25ldy10YXNrIGZvcm0gLmJ1dHRvbnN7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnRuLWFkZHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZS02MDApO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1hZGQ6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWUtNzAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jYW5jZWx7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaXMpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3Jpcy1vc2N1cm8pO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWNhbmNlbDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlMztcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYmFye1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICBwYWRkaW5nOiAgMnJlbTtcXHJcXG4gICAgdG9wOiA0NHB4O1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3Jpcyk7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhciA+IGRpdiA+IGEsIC50YXNrLWhlYWRlciBhIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICMwMDBcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYmFyID4gZGl2ID4gYTpob3ZlciwudGFzay1oZWFkZXIgYTpob3ZlciwgLnNpZGUtYmFyIC5hY3RpdmV7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwODtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi50YXNrLWhlYWRlcntcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgICBncmlkLWNvbHVtbjogMiAvIDI7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3N7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAyO1xcclxcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxyXFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLyplYWNoIHRhc2sqL1xcclxcbi50YXNrIHtcXHJcXG4gICAgbWFyZ2luOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmlzLW9zY3Vybyk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6aG92ZXJ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ncmlzLW9zY3Vybyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50YXNrID4gZGl2e1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5kaXNwbGF5LWRhdGV7XFxyXFxuICAgIG1hcmdpbjogLjVyZW0gMDtcXHJcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgLmNoZWNrLWJ0biB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgLmNvbXBsZXRlZC10YXNre1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uaGlkZXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixPQUFPO0lBQ1AsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsVUFBVTtBQUNkOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFHQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLG9CQUFvQjtBQUN4Qjs7O0FBR0E7SUFDSSxpQ0FBaUM7SUFDakMsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsU0FBUztJQUNULGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJLDJCQUEyQjs7QUFFL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBLFlBQVk7QUFDWjtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7OztBQUdBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7OztBQUdBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXHJcXG4gICAgLS1saW1lLTQwMDogI2EzZTYzNTtcXHJcXG4gICAgLS1saW1lLTYwMDogIzY1YTMwZDtcXHJcXG4gICAgLS1saW1lLTcwMDogIzRkN2MwZjtcXHJcXG4gICAgLS1ncmlzOiAjRkFGQUZBO1xcclxcbiAgICAtLWdyaXMtb3NjdXJvOiAjOGE4YThhO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LCBkaXYsIG5hdntcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9ue1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMC43cmVtIDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmQtZmxleHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ0cHggMTAwcHggMWZyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxufVxcclxcblxcclxcbm5hdntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZS02MDApO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGF7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGE6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1se1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWwgPiBkaXZ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgcGFkZGluZzogMCAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sID4gZGl2ID4gaW5wdXR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5uYXYtbCAuc2VhcmNoLWlucHV0IGEgc3ZnIHtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYtcntcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNDQ7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNuZXctdGFza3tcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIG1heC13aWR0aDogNTUwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzNXB4IDJweCAjMDAwMDAwNDA7XFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzayA+IGZvcm0ge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzayA+IGZvcm0gPiBkaXZ7XFxyXFxuICAgIG1hcmdpbjogLjNyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSAjdGFzay1uYW1le1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbiNuZXctdGFzayA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDMpLCAjbmV3LXRhc2sgPiBmb3JtID4gZGl2Om50aC1jaGlsZCg0KXtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzayAuZHVlLWRhdGUtZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzayA+IGZvcm0gLmV4dHJhLWZpZWxkcyA+IGRpdiB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzayA+IGZvcm0gbGFiZWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzayA+IGZvcm0gI2R1ZS1kYXRle1xcclxcbiAgICBjb2xvcjogIzU1NTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNuZXctdGFzayBmb3JtIC5idXR0b25ze1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ0bi1hZGR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWUtNjAwKTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5idG4tYWRkOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lLTcwMCk7XFxyXFxufVxcclxcblxcclxcbi5idG4tY2FuY2Vse1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlzKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyaXMtb3NjdXJvKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jYW5jZWw6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhcntcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgcGFkZGluZzogIDJyZW07XFxyXFxuICAgIHRvcDogNDRweDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaXMpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgPiBkaXYgPiBhLCAudGFzay1oZWFkZXIgYSB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjMDAwXFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhciA+IGRpdiA+IGE6aG92ZXIsLnRhc2staGVhZGVyIGE6aG92ZXIsIC5zaWRlLWJhciAuYWN0aXZle1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4udGFzay1oZWFkZXJ7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAyO1xcclxcbiAgICBncmlkLXJvdzogMiAvIDM7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tze1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMjtcXHJcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcclxcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi8qZWFjaCB0YXNrKi9cXHJcXG4udGFzayB7XFxyXFxuICAgIG1hcmdpbjogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3Jpcy1vc2N1cm8pO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxufVxcclxcblxcclxcbi50YXNrOmhvdmVye1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZ3Jpcy1vc2N1cm8pO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGFzayA+IGRpdntcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayAuZGlzcGxheS1kYXRle1xcclxcbiAgICBtYXJnaW46IC41cmVtIDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5jaGVjay1idG4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5jb21wbGV0ZWQtdGFza3tcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmhpZGV7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNsb3NlTmV3VGFzayB9IGZyb20gXCIuL2RvbS1jb250ZW50XCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcclxuXHJcblxyXG5sZXQgYXJyVGVtcG9yYWwgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRlbGVmb25vIGVuIG1vZG8gYXZpw7NuXCIsXHJcbiAgICAgICAgXCJkZXNjaXB0aW9uXCI6IFwiSGFzdGEgbGFzIDkgbm8gY29uZWN0YXIgZWwgbcOzdmlsXCIsXHJcbiAgICAgICAgXCJkdWVEYXRlXCI6IFwiMjAyMy0wMS0zMVQyMjo0NFwiLFxyXG4gICAgICAgIFwicHJpb3JpdHlcIjogXCJoaWdoXCIsXHJcbiAgICAgICAgXCJwcm9qZWN0XCI6IFwiXCIsXHJcbiAgICAgICAgXCJjaGVja2xpc3RcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiRXN0aXJhclwiLFxyXG4gICAgICAgIFwiZGVzY2lwdGlvblwiOiBcIkVzdGlyYW1pZW50b3MgY2FsaSBtb3ZlXCIsXHJcbiAgICAgICAgXCJkdWVEYXRlXCI6IFwiMjAyMy0wMi0yOFQyMjo0NFwiLFxyXG4gICAgICAgIFwicHJpb3JpdHlcIjogXCJtaWRkbGVcIixcclxuICAgICAgICBcInByb2plY3RcIjogXCJcIixcclxuICAgICAgICBcImNoZWNrbGlzdFwiOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiMTYgbWluIG1pbmRmdWxsbmVzc1wiLFxyXG4gICAgICAgIFwiZGVzY2lwdGlvblwiOiBcIkVzdGlyYW1pZW50b3MgY2FsaSBtb3ZlXCIsXHJcbiAgICAgICAgXCJkdWVEYXRlXCI6IFwiMjAyMy0wMS0wNFQwODo0NFwiLFxyXG4gICAgICAgIFwicHJpb3JpdHlcIjogXCJsb3dcIixcclxuICAgICAgICBcInByb2plY3RcIjogXCJcIixcclxuICAgICAgICBcImNoZWNrbGlzdFwiOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiTHV0aGVyaWFcIixcclxuICAgICAgICBcImRlc2NpcHRpb25cIjogXCJVbmEgaG9yYSBhIG1pcyBndWl0YXJyYXNcIixcclxuICAgICAgICBcImR1ZURhdGVcIjogXCIyMDIzLTAxLTE4VDE4OjAwXCIsXHJcbiAgICAgICAgXCJwcmlvcml0eVwiOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgIFwicHJvamVjdFwiOiBcIlwiLFxyXG4gICAgICAgIFwiY2hlY2tsaXN0XCI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJDb21wcmFyIHRvYWxsYSBqYXBvbmVzYVwiLFxyXG4gICAgICAgIFwiZGVzY2lwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwiZHVlRGF0ZVwiOiBcIjIwMjMtMDEtMDVUMTg6MDBcIixcclxuICAgICAgICBcInByaW9yaXR5XCI6IFwibG93XCIsXHJcbiAgICAgICAgXCJwcm9qZWN0XCI6IFwiXCIsXHJcbiAgICAgICAgXCJjaGVja2xpc3RcIjogZmFsc2VcclxuICAgIH1cclxuXVxyXG5cclxuY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLW5hbWUnKVxyXG5jb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2NyaXB0aW9uJylcclxuY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZS1kYXRlJylcclxuY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JylcclxuY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKVxyXG5jb25zdCB0YXNrRG9uZUNoZWNrYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZG9uZScpXHJcblxyXG5jb25zdCBidG5BZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1hZGQnKVxyXG5cclxuYnRuQWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY3JlYXRlVGFzaygpO1xyXG4gICAgY2xvc2VOZXdUYXNrKCk7XHJcbn0pXHJcblxyXG5cclxuY29uc3QgY3JlYXRlVGFzayA9ICgpID0+ICB7XHJcbiAgICBcclxuICAgIGxldCB0YXNrTmFtZSA9IHRhc2tOYW1lSW5wdXQudmFsdWU7XHJcbiAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgICBsZXQgZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcclxuICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdFNlbGVjdC52YWx1ZTtcclxuICAgIGxldCBwcmlvcml0eSA9IHByaW9yaXR5U2VsZWN0LnZhbHVlO1xyXG4gICAgbGV0IHRhc2tEb25lID0gdGFza0RvbmVDaGVja2J1dHRvbi5jaGVja2VkO1xyXG4gICAgXHJcbiAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCB0YXNrRG9uZSk7XHJcblxyXG4gICAgaWYod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrJykpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXknKVxyXG4gICAgICAgIGxldCBzdG9yYWdlZFRhc2tzID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2snKSlcclxuICAgICAgICBzdG9yYWdlZFRhc2tzLnB1c2gobmV3VGFzaylcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFzaycsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VkVGFza3MpKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2snLCBKU09OLnN0cmluZ2lmeShbbmV3VGFza10pKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGFyclRlbXBvcmFsLnB1c2gobmV3VGFzayk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYXJyVGVtcG9yYWwpXHJcbn1cclxuXHJcblxyXG5leHBvcnQge2NyZWF0ZVRhc2ssIGFyclRlbXBvcmFsfTtcclxuXHJcbiIsImltcG9ydCB7IGFyclRlbXBvcmFsIH0gZnJvbSAnLi9jcmVhdGUtbmV3J1xyXG5cclxuY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpXHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKVxyXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKVxyXG5jb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtYmFyJylcclxuXHJcbmNvbnN0IHRhc2tIZWFkZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2staGVhZGVyID4gaDInKVxyXG5jb25zdCBzaWRlQmFySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZS1iYXIgYScpXHJcblxyXG50YXNrSGVhZGVyVGV4dC5pbm5lckhUTUwgPSAnVG9kYXknXHJcbnNpZGVCYXJJdGVtc1sxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cclxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2lkZUJhckl0ZW1zLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfSlcclxuICAgIHNpZGVCYXJJdGVtc1sxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgdGFza0hlYWRlclRleHQuaW5uZXJIVE1MID0gJ1RvZGF5J1xyXG59KVxyXG5cclxuc2lkZUJhckl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNpZGVCYXJJdGVtcy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgICAgICBpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgdGFza0hlYWRlclRleHQuaW5uZXJIVE1MID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdkaXYnKS50ZXh0Q29udGVudFxyXG4gICAgfSlcclxufSlcclxuXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKHNpZGVCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpe1xyXG4gICAgICAgIGNvbnRlbnQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwiMzAwcHggMWZyXCI7XHJcbiAgICAgICAgc2lkZUJhci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnRlbnQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwiMCAxZnJcIjtcclxuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpXHJcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2snKVxyXG5jb25zdCBuZXdUYXNrV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrID4gZm9ybScpXHJcbmNvbnN0IGJ0bkNhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY2FuY2VsJylcclxuXHJcblxyXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgbmV3VGFza1dpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxufSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY2xvc2VOZXdUYXNrID0gKCkgPT4ge1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgIG5ld1Rhc2tXaW5kb3cuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbn1cclxuXHJcbmJ0bkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4geyBcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY2xvc2VOZXdUYXNrKCkgXHJcbiAgICB9XHJcbilcclxuXHJcbm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHsgXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNsb3NlTmV3VGFzaygpIFxyXG4gICAgfVxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZFRhc2tzID0gKCkgPT4ge1xyXG4gICAgaWYod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrJykpe1xyXG4gICAgICAgIGxldCB0YXNrU3RvcmVkID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2snKSlcclxuICAgICAgICBsZXQgdGFza0NvbnRlbnQgPSB0YXNrU3RvcmVkLnJlZHVjZSgoYWNjLCB0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB7dGl0bGUsIGRlc2NpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBjaGVja2xpc3R9ID0gdGFza1xyXG4gICAgICAgICAgICBhY2MgKz0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggICR7Y2hlY2tsaXN0ID8gYGNvbXBsZXRlZC10YXNrYDogYGB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVjay1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3Nob3dDaGVja2VkKGNoZWNrbGlzdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7c2hvd1ByaW9yaXR5KHByaW9yaXR5KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5LWRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2R1ZURhdGV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IGBcclxuICAgICAgICAgICAgcmV0dXJuIGFjY1xyXG4gICAgICAgIH0sICcnKVxyXG4gICAgICAgIHRhc2suaW5uZXJIVE1MID0gdGFza0NvbnRlbnQ7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBzaG93UHJpb3JpdHkgPSBwcmlvcml0eSA9PiB7XHJcbiAgICBsZXQgZGlzcGxheVByaW9yaXR5ID0gYCR7cHJpb3JpdHk9PT0naGlnaCc/IGA8c3ZnIHN0eWxlPVwid2lkdGg6MTZweDtoZWlnaHQ6MTZweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgIDxwYXRoIGZpbGw9XCJyZWRcIiBkPVwiTTE0LjQsNkwxNCw0SDVWMjFIN1YxNEgxMi42TDEzLDE2SDIwVjZIMTQuNFpcIiAvPlxyXG48L3N2Zz5gOiAocHJpb3JpdHk9PT0nbWlkZGxlJz8gYDxzdmcgc3R5bGU9XCJ3aWR0aDoxNnB4O2hlaWdodDoxNnB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG48cGF0aCBmaWxsPVwib3JhbmdlXCIgZD1cIk0xNC40LDZMMTQsNEg1VjIxSDdWMTRIMTIuNkwxMywxNkgyMFY2SDE0LjRaXCIgLz5cclxuPC9zdmc+YCA6IGA8c3ZnIHN0eWxlPVwid2lkdGg6MTZweDtoZWlnaHQ6MTZweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuPHBhdGggZmlsbD1cImdyZWVuXCIgZD1cIk0xNC40LDZMMTQsNEg1VjIxSDdWMTRIMTIuNkwxMywxNkgyMFY2SDE0LjRaXCIgLz5cclxuPC9zdmc+YCl9YFxyXG4gICAgcmV0dXJuIGRpc3BsYXlQcmlvcml0eVxyXG59XHJcblxyXG5jb25zdCBzaG93Q2hlY2tlZCA9IGNoZWNrbGlzdCA9PiB7XHJcbiAgICBsZXQgZGlzcGxheUNoZWNrZWQgPSBgJHtjaGVja2xpc3QgPyBgPHN2ZyBzdHlsZT1cIndpZHRoOjE2cHg7aGVpZ2h0OjE2cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgPHBhdGggZmlsbD1cImdyZWVuXCIgZD1cIk05LDIwLjQyTDIuNzksMTQuMjFMNS42MiwxMS4zOEw5LDE0Ljc3TDE4Ljg4LDQuODhMMjEuNzEsNy43MUw5LDIwLjQyWlwiIC8+XHJcbiAgICAgICAgPC9zdmc+YCA6IGA8c3ZnIHN0eWxlPVwid2lkdGg6MTZweDtoZWlnaHQ6MTZweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTksM0g1QzMuODksMyAzLDMuODkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVY1QzIxLDMuODkgMjAuMSwzIDE5LDNNMTksNVYxOUg1VjVIMTlaXCIgLz5cclxuICAgICAgICA8L3N2Zz5gfWBcclxuICAgIHJldHVybiBkaXNwbGF5Q2hlY2tlZFxyXG59XHJcblxyXG4iLCJleHBvcnQgZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XHJcbiAgICBsZXQgc3RvcmFnZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcclxuICAgICAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xyXG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcclxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG4gICAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XHJcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XHJcbiAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxyXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XHJcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcclxuICAgICAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXHJcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXHJcbiAgICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcclxuICAgIH1cclxufSIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY2lwdGlvbiwgZHVlRGF0ZSwgIHByaW9yaXR5LCBwcm9qZWN0LCBjaGVja2xpc3Qpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMuZGVzY2lwdGlvbiA9IGRlc2NpcHRpb24gXHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZS8qLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKSovXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxyXG4gICAgICAgIHRoaXMuY2hlY2tsaXN0ID0gY2hlY2tsaXN0XHJcblxyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi9jcmVhdGUtbmV3JztcclxuaW1wb3J0IHsgbG9hZFRhc2tzIH0gZnJvbSAnLi9kb20tY29udGVudCc7XHJcbmltcG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5pZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcclxuICAgIGNvbnNvbGUubG9nKCd0dXRvIGJlbmUnKVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKCdubyBsb2NhbCBzdG9yYWdlIGF2YWlsYWJsZScpXHJcbiAgfVxyXG5cclxubG9hZFRhc2tzKCk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9