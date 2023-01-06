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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n    --lime-400: #a3e635;\r\n    --lime-600: #65a30d;\r\n    --lime-700: #4d7c0f;\r\n    --gris: #FAFAFA;\r\n    --gris-oscuro: #8a8a8a;\r\n}\r\n\r\nbody, div, nav{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbutton{\r\n    border-radius: 8px;\r\n    border: none;\r\n    padding: 0.7rem 1rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n}\r\n\r\n.d-flex{\r\n    display: flex;\r\n    gap: 15px;\r\n    \r\n}\r\n\r\n#content{\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n    grid-template-rows: 44px 100px 1fr;\r\n    position: relative;\r\n    transition: all .2s;\r\n}\r\n\r\nnav{\r\n    background-color: var(--lime-600);\r\n    padding: 1rem 2rem;\r\n    position: sticky;\r\n    top: 0;\r\n    left: 0;\r\n    justify-content: space-between;\r\n    grid-column: 1 / 3;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\nnav a{\r\n    color: #fff;\r\n    padding: .2rem;\r\n}\r\n\r\nnav a:hover{\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.nav-l{\r\n    align-items: center;\r\n}\r\n\r\n.nav-l > div{\r\n    background-color: #fff;\r\n    display: flex;\r\n    align-items: center;\r\n    border-radius: 3px;\r\n    padding: 0 .2rem;\r\n}\r\n\r\n.nav-l > div > input{\r\n    background-color: #00000000;\r\n    color: #000;\r\n    border: none;\r\n    outline-style: none;\r\n    \r\n}\r\n\r\n.nav-l .search-input a svg {\r\n    color: #000;\r\n}\r\n\r\n.nav-r{\r\n    align-items: center\r\n}\r\n\r\n.overlay{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #ffffff44;\r\n    z-index: 5;\r\n}\r\n\r\n/* New task window */\r\n\r\n#new-task{\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n    background-color: #fff;\r\n    max-width: 550px;\r\n    width: 100%;\r\n    z-index: 10;\r\n    border-radius: 16px;\r\n    box-shadow: 0px 0px 35px 2px #00000040;\r\n}\r\n\r\n#new-task > form {\r\n    padding: 1rem 3rem;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n#new-task > form > div{\r\n    margin: .3rem 0;\r\n}\r\n\r\n#new-task > form input {\r\n    border: none;\r\n    outline-style: none;\r\n}\r\n\r\n#new-task > form #task-name{\r\n    font-size: 2rem;\r\n}\r\n\r\n\r\n#new-task > form > div:nth-child(3), #new-task > form > div:nth-child(4){\r\n    justify-content: space-between\r\n}\r\n\r\n#new-task .due-date-div {\r\n    display: flex;\r\n    flex-direction: column;    \r\n\r\n}\r\n\r\n#new-task > form .extra-fields > div {\r\n    align-items: center;\r\n}\r\n\r\n#new-task > form label{\r\n    font-size: .8rem;\r\n}\r\n\r\n#new-task > form #due-date{\r\n    color: #555;\r\n    border: 1px solid ;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n#new-task form .buttons{\r\n    justify-content: end;\r\n}\r\n\r\n\r\n.btn-green{\r\n    background-color: var(--lime-600);\r\n    color: #fff;\r\n}\r\n\r\n.btn-green:hover{\r\n    background-color: var(--lime-700);\r\n}\r\n\r\n.btn-cancel{\r\n    background-color: var(--gris);\r\n    color: var(--gris-oscuro);\r\n}\r\n\r\n.btn-cancel:hover{\r\n    background-color: #e3e3e3;\r\n}\r\n\r\n\r\n/* new project window */\r\n#new-project{\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n    background-color: #fff;\r\n    max-width: 550px;\r\n    width: 100%;\r\n    z-index: 10;\r\n    border-radius: 16px;\r\n    box-shadow: 0px 0px 35px 2px #00000040;\r\n}\r\n\r\n#new-project form{\r\n    flex-direction: column;\r\n    padding: 2rem;\r\n}\r\n\r\n#new-project > form input {\r\n    border: 1px solid var(--gris-oscuro);\r\n    border-radius: 6px;\r\n    outline-style: none;\r\n    padding: .5rem;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n#new-project > form input:focus{\r\n    border: 1px solid #000;\r\n}\r\n\r\n\r\n#new-project > form .proj-btns{\r\n    justify-content: flex-end\r\n}\r\n\r\n/* side bar */\r\n\r\n.side-bar{\r\n    position: sticky;\r\n    padding:  2rem;\r\n    top: 44px;\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 4;\r\n    background-color: var(--gris);\r\n}\r\n\r\n.side-bar > div > a, .task-header a {\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem;\r\n    font-size: 0.8rem;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    color: #000\r\n}\r\n\r\n.side-bar > div > a:hover,.task-header a:hover, .side-bar .active{\r\n    background-color: #00000008;\r\n    \r\n}\r\n\r\n.side-bar #created-projects{\r\n    flex-direction: column;\r\n    gap: 0;\r\n}\r\n\r\n.side-bar #created-projects a:not(:first-child){\r\n    margin-left: 1rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.task-header{\r\n    padding: 1rem 2rem;\r\n    grid-column: 2 / 2;\r\n    grid-row: 2 / 3;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.tasks{\r\n    padding: 1rem 2rem;\r\n    grid-column: 2 / 2;\r\n    grid-row: 3 / 4;\r\n    overflow-x: scroll;\r\n}\r\n\r\n/*each task*/\r\n.task {\r\n    margin: 1.5rem;\r\n    padding: 1rem;\r\n    border-bottom: 1px solid var(--gris-oscuro);\r\n    cursor: pointer;\r\n    transition: all .2s;\r\n}\r\n\r\n.task:hover{\r\n    border-bottom: 2px solid var(--gris-oscuro);\r\n}\r\n\r\n\r\n.task > div{\r\n    justify-content: space-between;\r\n}\r\n\r\n.task .display-date{\r\n    margin: .5rem 0;\r\n    font-size: .7rem;\r\n}\r\n\r\n.task .check-btn {\r\n    cursor: pointer;\r\n}\r\n\r\n.task .task-description{\r\n    font-size: .8rem;\r\n    margin: 0 3rem;\r\n    text-align: left;\r\n}\r\n\r\n.task .completed-task{\r\n    text-decoration:line-through;\r\n}\r\n\r\n.task .mod-btns svg:hover{\r\n    transition: all .2s;\r\n    transform: scale(1.2);\r\n}\r\n\r\n\r\n.hide{\r\n    display: none;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\r\n    --lime-400: #a3e635;\r\n    --lime-600: #65a30d;\r\n    --lime-700: #4d7c0f;\r\n    --gris: #FAFAFA;\r\n    --gris-oscuro: #8a8a8a;\r\n}\r\n\r\nbody, div, nav{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbutton{\r\n    border-radius: 8px;\r\n    border: none;\r\n    padding: 0.7rem 1rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n}\r\n\r\n.d-flex{\r\n    display: flex;\r\n    gap: 15px;\r\n    \r\n}\r\n\r\n#content{\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n    grid-template-rows: 44px 100px 1fr;\r\n    position: relative;\r\n    transition: all .2s;\r\n}\r\n\r\nnav{\r\n    background-color: var(--lime-600);\r\n    padding: 1rem 2rem;\r\n    position: sticky;\r\n    top: 0;\r\n    left: 0;\r\n    justify-content: space-between;\r\n    grid-column: 1 / 3;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\nnav a{\r\n    color: #fff;\r\n    padding: .2rem;\r\n}\r\n\r\nnav a:hover{\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.nav-l{\r\n    align-items: center;\r\n}\r\n\r\n.nav-l > div{\r\n    background-color: #fff;\r\n    display: flex;\r\n    align-items: center;\r\n    border-radius: 3px;\r\n    padding: 0 .2rem;\r\n}\r\n\r\n.nav-l > div > input{\r\n    background-color: #00000000;\r\n    color: #000;\r\n    border: none;\r\n    outline-style: none;\r\n    \r\n}\r\n\r\n.nav-l .search-input a svg {\r\n    color: #000;\r\n}\r\n\r\n.nav-r{\r\n    align-items: center\r\n}\r\n\r\n.overlay{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #ffffff44;\r\n    z-index: 5;\r\n}\r\n\r\n/* New task window */\r\n\r\n#new-task{\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n    background-color: #fff;\r\n    max-width: 550px;\r\n    width: 100%;\r\n    z-index: 10;\r\n    border-radius: 16px;\r\n    box-shadow: 0px 0px 35px 2px #00000040;\r\n}\r\n\r\n#new-task > form {\r\n    padding: 1rem 3rem;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n#new-task > form > div{\r\n    margin: .3rem 0;\r\n}\r\n\r\n#new-task > form input {\r\n    border: none;\r\n    outline-style: none;\r\n}\r\n\r\n#new-task > form #task-name{\r\n    font-size: 2rem;\r\n}\r\n\r\n\r\n#new-task > form > div:nth-child(3), #new-task > form > div:nth-child(4){\r\n    justify-content: space-between\r\n}\r\n\r\n#new-task .due-date-div {\r\n    display: flex;\r\n    flex-direction: column;    \r\n\r\n}\r\n\r\n#new-task > form .extra-fields > div {\r\n    align-items: center;\r\n}\r\n\r\n#new-task > form label{\r\n    font-size: .8rem;\r\n}\r\n\r\n#new-task > form #due-date{\r\n    color: #555;\r\n    border: 1px solid ;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n#new-task form .buttons{\r\n    justify-content: end;\r\n}\r\n\r\n\r\n.btn-green{\r\n    background-color: var(--lime-600);\r\n    color: #fff;\r\n}\r\n\r\n.btn-green:hover{\r\n    background-color: var(--lime-700);\r\n}\r\n\r\n.btn-cancel{\r\n    background-color: var(--gris);\r\n    color: var(--gris-oscuro);\r\n}\r\n\r\n.btn-cancel:hover{\r\n    background-color: #e3e3e3;\r\n}\r\n\r\n\r\n/* new project window */\r\n#new-project{\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n    background-color: #fff;\r\n    max-width: 550px;\r\n    width: 100%;\r\n    z-index: 10;\r\n    border-radius: 16px;\r\n    box-shadow: 0px 0px 35px 2px #00000040;\r\n}\r\n\r\n#new-project form{\r\n    flex-direction: column;\r\n    padding: 2rem;\r\n}\r\n\r\n#new-project > form input {\r\n    border: 1px solid var(--gris-oscuro);\r\n    border-radius: 6px;\r\n    outline-style: none;\r\n    padding: .5rem;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n#new-project > form input:focus{\r\n    border: 1px solid #000;\r\n}\r\n\r\n\r\n#new-project > form .proj-btns{\r\n    justify-content: flex-end\r\n}\r\n\r\n/* side bar */\r\n\r\n.side-bar{\r\n    position: sticky;\r\n    padding:  2rem;\r\n    top: 44px;\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 4;\r\n    background-color: var(--gris);\r\n}\r\n\r\n.side-bar > div > a, .task-header a {\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem;\r\n    font-size: 0.8rem;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    color: #000\r\n}\r\n\r\n.side-bar > div > a:hover,.task-header a:hover, .side-bar .active{\r\n    background-color: #00000008;\r\n    \r\n}\r\n\r\n.side-bar #created-projects{\r\n    flex-direction: column;\r\n    gap: 0;\r\n}\r\n\r\n.side-bar #created-projects a:not(:first-child){\r\n    margin-left: 1rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.task-header{\r\n    padding: 1rem 2rem;\r\n    grid-column: 2 / 2;\r\n    grid-row: 2 / 3;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.tasks{\r\n    padding: 1rem 2rem;\r\n    grid-column: 2 / 2;\r\n    grid-row: 3 / 4;\r\n    overflow-x: scroll;\r\n}\r\n\r\n/*each task*/\r\n.task {\r\n    margin: 1.5rem;\r\n    padding: 1rem;\r\n    border-bottom: 1px solid var(--gris-oscuro);\r\n    cursor: pointer;\r\n    transition: all .2s;\r\n}\r\n\r\n.task:hover{\r\n    border-bottom: 2px solid var(--gris-oscuro);\r\n}\r\n\r\n\r\n.task > div{\r\n    justify-content: space-between;\r\n}\r\n\r\n.task .display-date{\r\n    margin: .5rem 0;\r\n    font-size: .7rem;\r\n}\r\n\r\n.task .check-btn {\r\n    cursor: pointer;\r\n}\r\n\r\n.task .task-description{\r\n    font-size: .8rem;\r\n    margin: 0 3rem;\r\n    text-align: left;\r\n}\r\n\r\n.task .completed-task{\r\n    text-decoration:line-through;\r\n}\r\n\r\n.task .mod-btns svg:hover{\r\n    transition: all .2s;\r\n    transform: scale(1.2);\r\n}\r\n\r\n\r\n.hide{\r\n    display: none;\r\n}"],"sourceRoot":""}]);
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
const createProject = projectName =>  {

    if(window.localStorage.getItem('projects')){

        let storagedProject = JSON.parse(window.localStorage.getItem('projects'))
        storagedProject.push(projectName)
        localStorage.setItem('projects', JSON.stringify(storagedProject))

    }else{

        localStorage.setItem('projects', JSON.stringify([projectName]))

    }
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







const task = document.querySelector('.tasks')

const content = document.getElementById('content')
const menuBtn = document.getElementById('menu')
const homeBtn = document.getElementById('home')
const sideBar = document.querySelector('.side-bar')

const taskHeaderText = document.querySelector('#task-header > h2')
const sideBarItems = document.querySelectorAll('.side-bar div:first-child a')

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
const btnClose = document.getElementById('btn-close')
const btnAdd = document.getElementById('btn-add')
const btnEdit = document.getElementById('btn-edit')



addTaskBtn.addEventListener('click', e => {
    e.preventDefault();
    btnAdd.classList.remove('hide')
    overlay.classList.remove('hide')
    newTaskWindow.classList.remove('hide')
})


const closeTask = () => {
    btnAdd.classList.add('hide')
    btnEdit.classList.add('hide')
    overlay.classList.add('hide')
    newTaskWindow.classList.add('hide')
    projectForm.classList.add('hide');
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
            let {title, desciption, dueDate, priority, project, checklist} = task
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
                    ${dueDate}
                </div>
            </div> `
            return acc
        }, '')
        task.innerHTML = taskContent;
        
    }

    editEventListener();
    deleteEventListener();
}

const projectsDiv = document.getElementById('created-projects')

const loadProjects = () => {
    let element;
    let projects = (0,_create_project__WEBPACK_IMPORTED_MODULE_1__.getProject)()
    projects.forEach(proj => {
        element = document.createElement('a')
        element.innerHTML = `${proj}`
        projectsDiv.appendChild(element)
    })
}

let taskInfo, taskIndex;

const editEventListener = () => {
    const editBtns = document.querySelectorAll('svg.edit-btn')
    editBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btnEdit.classList.remove('hide')
            overlay.classList.remove('hide')
            newTaskWindow.classList.remove('hide')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLEtBQUssTUFBTSxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FB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RjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBc0M7QUFDa0I7QUFDTDtBQUNuRDtBQUNxQjtBQUNyQjtBQUNBLElBQUksZ0VBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFTO0FBQ1QsMERBQVk7QUFDWjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlLW5ldy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kZWxldGUtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb20tY29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9lZGl0LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcclxcbiAgICAtLWxpbWUtNDAwOiAjYTNlNjM1O1xcclxcbiAgICAtLWxpbWUtNjAwOiAjNjVhMzBkO1xcclxcbiAgICAtLWxpbWUtNzAwOiAjNGQ3YzBmO1xcclxcbiAgICAtLWdyaXM6ICNGQUZBRkE7XFxyXFxuICAgIC0tZ3Jpcy1vc2N1cm86ICM4YThhOGE7XFxyXFxufVxcclxcblxcclxcbmJvZHksIGRpdiwgbmF2e1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b257XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1mbGV4e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDRweCAxMDBweCAxZnI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG59XFxyXFxuXFxyXFxubmF2e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lLTYwMCk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYXtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYTpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWx7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbCA+IGRpdntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBwYWRkaW5nOiAwIC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWwgPiBkaXYgPiBpbnB1dHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sIC5zZWFyY2gtaW5wdXQgYSBzdmcge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1ye1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY0NDtcXHJcXG4gICAgei1pbmRleDogNTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTmV3IHRhc2sgd2luZG93ICovXFxyXFxuXFxyXFxuI25ldy10YXNre1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDM1cHggMnB4ICMwMDAwMDA0MDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSA+IGRpdntcXHJcXG4gICAgbWFyZ2luOiAuM3JlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtICN0YXNrLW5hbWV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSA+IGRpdjpudGgtY2hpbGQoMyksICNuZXctdGFzayA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpe1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrIC5kdWUtZGF0ZS1kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSAuZXh0cmEtZmllbGRzID4gZGl2IHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSBsYWJlbHtcXHJcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSAjZHVlLWRhdGV7XFxyXFxuICAgIGNvbG9yOiAjNTU1O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI25ldy10YXNrIGZvcm0gLmJ1dHRvbnN7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnRuLWdyZWVue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lLTYwMCk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWdyZWVuOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lLTcwMCk7XFxyXFxufVxcclxcblxcclxcbi5idG4tY2FuY2Vse1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlzKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyaXMtb3NjdXJvKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jYW5jZWw6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIG5ldyBwcm9qZWN0IHdpbmRvdyAqL1xcclxcbiNuZXctcHJvamVjdHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIG1heC13aWR0aDogNTUwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzNXB4IDJweCAjMDAwMDAwNDA7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdCBmb3Jte1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QgPiBmb3JtIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3Jpcy1vc2N1cm8pO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdCA+IGZvcm0gaW5wdXQ6Zm9jdXN7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNuZXctcHJvamVjdCA+IGZvcm0gLnByb2otYnRuc3tcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxcclxcbn1cXHJcXG5cXHJcXG4vKiBzaWRlIGJhciAqL1xcclxcblxcclxcbi5zaWRlLWJhcntcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgcGFkZGluZzogIDJyZW07XFxyXFxuICAgIHRvcDogNDRweDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaXMpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgPiBkaXYgPiBhLCAudGFzay1oZWFkZXIgYSB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjMDAwXFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhciA+IGRpdiA+IGE6aG92ZXIsLnRhc2staGVhZGVyIGE6aG92ZXIsIC5zaWRlLWJhciAuYWN0aXZle1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgI2NyZWF0ZWQtcHJvamVjdHN7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYmFyICNjcmVhdGVkLXByb2plY3RzIGE6bm90KDpmaXJzdC1jaGlsZCl7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWhlYWRlcntcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgICBncmlkLWNvbHVtbjogMiAvIDI7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3N7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAyO1xcclxcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxyXFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLyplYWNoIHRhc2sqL1xcclxcbi50YXNrIHtcXHJcXG4gICAgbWFyZ2luOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmlzLW9zY3Vybyk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6aG92ZXJ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ncmlzLW9zY3Vybyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50YXNrID4gZGl2e1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5kaXNwbGF5LWRhdGV7XFxyXFxuICAgIG1hcmdpbjogLjVyZW0gMDtcXHJcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgLmNoZWNrLWJ0biB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgLnRhc2stZGVzY3JpcHRpb257XFxyXFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxyXFxuICAgIG1hcmdpbjogMCAzcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayAuY29tcGxldGVkLXRhc2t7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5tb2QtYnRucyBzdmc6aG92ZXJ7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmhpZGV7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTOztBQUViOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sT0FBTztJQUNQLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lB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Q25CLHFCQUFxQjtBQUN6Qjs7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcclxcbiAgICAtLWxpbWUtNDAwOiAjYTNlNjM1O1xcclxcbiAgICAtLWxpbWUtNjAwOiAjNjVhMzBkO1xcclxcbiAgICAtLWxpbWUtNzAwOiAjNGQ3YzBmO1xcclxcbiAgICAtLWdyaXM6ICNGQUZBRkE7XFxyXFxuICAgIC0tZ3Jpcy1vc2N1cm86ICM4YThhOGE7XFxyXFxufVxcclxcblxcclxcbmJvZHksIGRpdiwgbmF2e1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b257XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1mbGV4e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDRweCAxMDBweCAxZnI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG59XFxyXFxuXFxyXFxubmF2e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lLTYwMCk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYXtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYTpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWx7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbCA+IGRpdntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBwYWRkaW5nOiAwIC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWwgPiBkaXYgPiBpbnB1dHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sIC5zZWFyY2gtaW5wdXQgYSBzdmcge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1ye1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY0NDtcXHJcXG4gICAgei1pbmRleDogNTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTmV3IHRhc2sgd2luZG93ICovXFxyXFxuXFxyXFxuI25ldy10YXNre1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDM1cHggMnB4ICMwMDAwMDA0MDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSA+IGRpdntcXHJcXG4gICAgbWFyZ2luOiAuM3JlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sgPiBmb3JtICN0YXNrLW5hbWV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSA+IGRpdjpudGgtY2hpbGQoMyksICNuZXctdGFzayA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpe1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrIC5kdWUtZGF0ZS1kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSAuZXh0cmEtZmllbGRzID4gZGl2IHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSBsYWJlbHtcXHJcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrID4gZm9ybSAjZHVlLWRhdGV7XFxyXFxuICAgIGNvbG9yOiAjNTU1O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI25ldy10YXNrIGZvcm0gLmJ1dHRvbnN7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnRuLWdyZWVue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lLTYwMCk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWdyZWVuOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lLTcwMCk7XFxyXFxufVxcclxcblxcclxcbi5idG4tY2FuY2Vse1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlzKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyaXMtb3NjdXJvKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jYW5jZWw6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIG5ldyBwcm9qZWN0IHdpbmRvdyAqL1xcclxcbiNuZXctcHJvamVjdHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIG1heC13aWR0aDogNTUwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzNXB4IDJweCAjMDAwMDAwNDA7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdCBmb3Jte1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QgPiBmb3JtIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3Jpcy1vc2N1cm8pO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdCA+IGZvcm0gaW5wdXQ6Zm9jdXN7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNuZXctcHJvamVjdCA+IGZvcm0gLnByb2otYnRuc3tcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxcclxcbn1cXHJcXG5cXHJcXG4vKiBzaWRlIGJhciAqL1xcclxcblxcclxcbi5zaWRlLWJhcntcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgcGFkZGluZzogIDJyZW07XFxyXFxuICAgIHRvcDogNDRweDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaXMpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgPiBkaXYgPiBhLCAudGFzay1oZWFkZXIgYSB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjMDAwXFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhciA+IGRpdiA+IGE6aG92ZXIsLnRhc2staGVhZGVyIGE6aG92ZXIsIC5zaWRlLWJhciAuYWN0aXZle1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgI2NyZWF0ZWQtcHJvamVjdHN7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYmFyICNjcmVhdGVkLXByb2plY3RzIGE6bm90KDpmaXJzdC1jaGlsZCl7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWhlYWRlcntcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgICBncmlkLWNvbHVtbjogMiAvIDI7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3N7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAyO1xcclxcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxyXFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLyplYWNoIHRhc2sqL1xcclxcbi50YXNrIHtcXHJcXG4gICAgbWFyZ2luOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmlzLW9zY3Vybyk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6aG92ZXJ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ncmlzLW9zY3Vybyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50YXNrID4gZGl2e1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5kaXNwbGF5LWRhdGV7XFxyXFxuICAgIG1hcmdpbjogLjVyZW0gMDtcXHJcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgLmNoZWNrLWJ0biB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgLnRhc2stZGVzY3JpcHRpb257XFxyXFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxyXFxuICAgIG1hcmdpbjogMCAzcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayAuY29tcGxldGVkLXRhc2t7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5tb2QtYnRucyBzdmc6aG92ZXJ7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmhpZGV7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNsb3NlVGFzaywgbG9hZFRhc2tzIH0gZnJvbSBcIi4vZG9tLWNvbnRlbnRcIjtcclxuaW1wb3J0IHsgY3JlYXRlSXQsIHJlSW5pdFZhbHVlcyB9IGZyb20gXCIuL3Rhc2stZm9ybVwiO1xyXG5cclxuXHJcbmxldCBhcnJUZW1wb3JhbCA9IFtcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiVGVsZWZvbm8gZW4gbW9kbyBhdmnDs25cIixcclxuICAgICAgICBcImRlc2NpcHRpb25cIjogXCJIYXN0YSBsYXMgOSBubyBjb25lY3RhciBlbCBtw7N2aWxcIixcclxuICAgICAgICBcImR1ZURhdGVcIjogXCIyMDIzLTAxLTMxVDIyOjQ0XCIsXHJcbiAgICAgICAgXCJwcmlvcml0eVwiOiBcImhpZ2hcIixcclxuICAgICAgICBcInByb2plY3RcIjogXCJcIixcclxuICAgICAgICBcImNoZWNrbGlzdFwiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJFc3RpcmFyXCIsXHJcbiAgICAgICAgXCJkZXNjaXB0aW9uXCI6IFwiRXN0aXJhbWllbnRvcyBjYWxpIG1vdmVcIixcclxuICAgICAgICBcImR1ZURhdGVcIjogXCIyMDIzLTAyLTI4VDIyOjQ0XCIsXHJcbiAgICAgICAgXCJwcmlvcml0eVwiOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgIFwicHJvamVjdFwiOiBcIlwiLFxyXG4gICAgICAgIFwiY2hlY2tsaXN0XCI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCIxNiBtaW4gbWluZGZ1bGxuZXNzXCIsXHJcbiAgICAgICAgXCJkZXNjaXB0aW9uXCI6IFwiRXN0aXJhbWllbnRvcyBjYWxpIG1vdmVcIixcclxuICAgICAgICBcImR1ZURhdGVcIjogXCIyMDIzLTAxLTA0VDA4OjQ0XCIsXHJcbiAgICAgICAgXCJwcmlvcml0eVwiOiBcImxvd1wiLFxyXG4gICAgICAgIFwicHJvamVjdFwiOiBcIlwiLFxyXG4gICAgICAgIFwiY2hlY2tsaXN0XCI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJMdXRoZXJpYVwiLFxyXG4gICAgICAgIFwiZGVzY2lwdGlvblwiOiBcIlVuYSBob3JhIGEgbWlzIGd1aXRhcnJhc1wiLFxyXG4gICAgICAgIFwiZHVlRGF0ZVwiOiBcIjIwMjMtMDEtMThUMTg6MDBcIixcclxuICAgICAgICBcInByaW9yaXR5XCI6IFwibWlkZGxlXCIsXHJcbiAgICAgICAgXCJwcm9qZWN0XCI6IFwiXCIsXHJcbiAgICAgICAgXCJjaGVja2xpc3RcIjogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXByYXIgdG9hbGxhIGphcG9uZXNhXCIsXHJcbiAgICAgICAgXCJkZXNjaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJkdWVEYXRlXCI6IFwiMjAyMy0wMS0wNVQxODowMFwiLFxyXG4gICAgICAgIFwicHJpb3JpdHlcIjogXCJsb3dcIixcclxuICAgICAgICBcInByb2plY3RcIjogXCJcIixcclxuICAgICAgICBcImNoZWNrbGlzdFwiOiBmYWxzZVxyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuY29uc3QgYnRuQWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tYWRkJylcclxuXHJcbmJ0bkFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNyZWF0ZVRhc2soKTtcclxuICAgIGNsb3NlVGFzaygpO1xyXG59KVxyXG5cclxuY29uc3QgY3JlYXRlVGFzayA9ICgpID0+ICB7XHJcblxyXG4gICAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVJdCgpO1xyXG5cclxuICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFzaycpKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnaGV5JylcclxuICAgICAgICBsZXQgc3RvcmFnZWRUYXNrcyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrJykpXHJcbiAgICAgICAgc3RvcmFnZWRUYXNrcy5wdXNoKG5ld1Rhc2spXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2snLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlZFRhc2tzKSlcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrJywgSlNPTi5zdHJpbmdpZnkoW25ld1Rhc2tdKSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVJbml0VmFsdWVzKCk7XHJcbiAgICBsb2FkVGFza3MoKTtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQge2NyZWF0ZVRhc2ssIGFyclRlbXBvcmFsfTtcclxuXHJcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0ID0gcHJvamVjdE5hbWUgPT4gIHtcclxuXHJcbiAgICBpZih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpe1xyXG5cclxuICAgICAgICBsZXQgc3RvcmFnZWRQcm9qZWN0ID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpXHJcbiAgICAgICAgc3RvcmFnZWRQcm9qZWN0LnB1c2gocHJvamVjdE5hbWUpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZWRQcm9qZWN0KSlcclxuXHJcbiAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoW3Byb2plY3ROYW1lXSkpXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IHtcclxuICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSl7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgbG9hZFRhc2tzIH0gZnJvbSBcIi4vZG9tLWNvbnRlbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVUYXNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBsZXQgc3RvcmFnZWRUYXNrcyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrJykpXHJcbiAgICBzdG9yYWdlZFRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFzaycsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VkVGFza3MpKVxyXG5cclxuICAgIGxvYWRUYXNrcygpO1xyXG59XHJcbiIsImltcG9ydCB7IGFyclRlbXBvcmFsIH0gZnJvbSAnLi9jcmVhdGUtbmV3J1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBnZXRQcm9qZWN0IH0gZnJvbSAnLi9jcmVhdGUtcHJvamVjdCdcclxuaW1wb3J0IHsgZGVsZXRlVGFzayB9IGZyb20gJy4vZGVsZXRlLXRhc2snXHJcbmltcG9ydCB7IGxvYWRFZGl0aW9uLCB3cml0ZUVkaXRpb24gfSBmcm9tICcuL2VkaXQtdGFzaydcclxuaW1wb3J0IHsgY3JlYXRlSXQsIHJlSW5pdFZhbHVlcywgdmFsdWVzRWRpdCB9IGZyb20gJy4vdGFzay1mb3JtJ1xyXG5cclxuXHJcbmNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcclxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcclxuY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLWJhcicpXHJcblxyXG5jb25zdCB0YXNrSGVhZGVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWhlYWRlciA+IGgyJylcclxuY29uc3Qgc2lkZUJhckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGUtYmFyIGRpdjpmaXJzdC1jaGlsZCBhJylcclxuXHJcbnRhc2tIZWFkZXJUZXh0LmlubmVySFRNTCA9ICdUb2RheSdcclxuc2lkZUJhckl0ZW1zWzFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblxyXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzaWRlQmFySXRlbXMuZm9yRWFjaChpID0+IHtcclxuICAgICAgICBpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9KVxyXG4gICAgc2lkZUJhckl0ZW1zWzFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICB0YXNrSGVhZGVyVGV4dC5pbm5lckhUTUwgPSAnVG9kYXknXHJcbn0pXHJcblxyXG5jb25zb2xlLmxvZyhzaWRlQmFySXRlbXMpXHJcbnNpZGVCYXJJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzaWRlQmFySXRlbXMuZm9yRWFjaChpID0+IHtcclxuICAgICAgICAgICAgaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgIHRhc2tIZWFkZXJUZXh0LmlubmVySFRNTCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignZGl2JykudGV4dENvbnRlbnRcclxuICAgIH0pXHJcbn0pXHJcblxyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZihzaWRlQmFyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKXtcclxuICAgICAgICBjb250ZW50LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcIjMwMHB4IDFmclwiO1xyXG4gICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb250ZW50LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcIjAgMWZyXCI7XHJcbiAgICAgICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKVxyXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrJylcclxuY29uc3QgbmV3VGFza1dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzayA+IGZvcm0nKVxyXG5jb25zdCBidG5DYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNhbmNlbCcpXHJcbmNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jbG9zZScpXHJcbmNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tYWRkJylcclxuY29uc3QgYnRuRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tZWRpdCcpXHJcblxyXG5cclxuXHJcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGJ0bkFkZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICBuZXdUYXNrV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjbG9zZVRhc2sgPSAoKSA9PiB7XHJcbiAgICBidG5BZGQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICBidG5FZGl0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgIG5ld1Rhc2tXaW5kb3cuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbn1cclxuXHJcbmJ0bkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4geyBcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY2xvc2VUYXNrKCkgXHJcbiAgICB9XHJcbilcclxuXHJcbmJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7IFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjbG9zZVRhc2soKSBcclxuICAgIH1cclxuKVxyXG5cclxub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4geyBcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY2xvc2VUYXNrKCkgXHJcbiAgICB9XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkVGFza3MgPSAoKSA9PiB7XHJcbiAgICBpZih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2snKSl7XHJcbiAgICAgICAgbGV0IHRhc2tTdG9yZWQgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFzaycpKVxyXG4gICAgICAgIGxldCB0YXNrQ29udGVudCA9IHRhc2tTdG9yZWQucmVkdWNlKChhY2MsIHRhc2ssIGkpID0+IHtcclxuICAgICAgICAgICAgbGV0IHt0aXRsZSwgZGVzY2lwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIGNoZWNrbGlzdH0gPSB0YXNrXHJcbiAgICAgICAgICAgIGFjYyArPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCIgZGF0YS10YXNrPVwiJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggICR7Y2hlY2tsaXN0ID8gYGNvbXBsZXRlZC10YXNrYDogYGB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVjay1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3Nob3dDaGVja2VkKGNoZWNrbGlzdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2Rlc2NpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IG1vZC1idG5zXCI+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtlZGl0U3ZnKGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzaG93UHJpb3JpdHkocHJpb3JpdHkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0cmFzaFN2ZyhpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheS1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtkdWVEYXRlfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiBgXHJcbiAgICAgICAgICAgIHJldHVybiBhY2NcclxuICAgICAgICB9LCAnJylcclxuICAgICAgICB0YXNrLmlubmVySFRNTCA9IHRhc2tDb250ZW50O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRFdmVudExpc3RlbmVyKCk7XHJcbiAgICBkZWxldGVFdmVudExpc3RlbmVyKCk7XHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZWQtcHJvamVjdHMnKVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgIGxldCBlbGVtZW50O1xyXG4gICAgbGV0IHByb2plY3RzID0gZ2V0UHJvamVjdCgpXHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2ogPT4ge1xyXG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGAke3Byb2p9YFxyXG4gICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpXHJcbiAgICB9KVxyXG59XHJcblxyXG5sZXQgdGFza0luZm8sIHRhc2tJbmRleDtcclxuXHJcbmNvbnN0IGVkaXRFdmVudExpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzdmcuZWRpdC1idG4nKVxyXG4gICAgZWRpdEJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgYnRuRWRpdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICAgICAgbmV3VGFza1dpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICAgICAgdGFza0luZGV4ID0gYnRuLmRhdGFzZXQudGFza1xyXG4gICAgICAgICAgICB0YXNrSW5mbyA9IGxvYWRFZGl0aW9uKHRhc2tJbmRleClcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFza0luZm8pXHJcbiAgICAgICAgICAgIHZhbHVlc0VkaXQodGFza0luZm8pXHJcbiAgICAgICAgICAgLy8gd3JpdGVFZGl0aW9uKGJ0bi5kYXRhc2V0LnRhc2ssIHZhbHVlc0VkaXQodGFza0luZm8pKVxyXG4gICAgICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBkZWxldGVFdmVudExpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3ZnLmRlbGV0ZS1idG4nKVxyXG4gICAgZGVsZXRlQnRuLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZVRhc2soYnRuLmRhdGFzZXQuZGVsZXRlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59XHJcblxyXG5idG5FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnNvbGUubG9nKHRhc2tJbmZvKVxyXG4gICAgd3JpdGVFZGl0aW9uKHRhc2tJbmRleCwgY3JlYXRlSXQoKSlcclxuICAgIHJlSW5pdFZhbHVlcygpO1xyXG4gICAgY2xvc2VUYXNrKCkgXHJcbn0pXHJcblxyXG5jb25zdCBzaG93UHJpb3JpdHkgPSBwcmlvcml0eSA9PiB7XHJcbiAgICBsZXQgZGlzcGxheVByaW9yaXR5ID0gYCR7cHJpb3JpdHk9PT0naGlnaCc/IGA8c3ZnIHN0eWxlPVwid2lkdGg6MjBweDtoZWlnaHQ6MjBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgIDxwYXRoIGZpbGw9XCJyZWRcIiBkPVwiTTE0LjQsNkwxNCw0SDVWMjFIN1YxNEgxMi42TDEzLDE2SDIwVjZIMTQuNFpcIiAvPlxyXG48L3N2Zz5gOiAocHJpb3JpdHk9PT0nbWlkZGxlJz8gYDxzdmcgc3R5bGU9XCJ3aWR0aDoyMHB4O2hlaWdodDoyMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG48cGF0aCBmaWxsPVwib3JhbmdlXCIgZD1cIk0xNC40LDZMMTQsNEg1VjIxSDdWMTRIMTIuNkwxMywxNkgyMFY2SDE0LjRaXCIgLz5cclxuPC9zdmc+YCA6IGA8c3ZnIHN0eWxlPVwid2lkdGg6MjBweDtoZWlnaHQ6MjBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuPHBhdGggZmlsbD1cImdyZWVuXCIgZD1cIk0xNC40LDZMMTQsNEg1VjIxSDdWMTRIMTIuNkwxMywxNkgyMFY2SDE0LjRaXCIgLz5cclxuPC9zdmc+YCl9YFxyXG4gICAgcmV0dXJuIGRpc3BsYXlQcmlvcml0eVxyXG59XHJcblxyXG5jb25zdCBzaG93Q2hlY2tlZCA9IGNoZWNrbGlzdCA9PiB7XHJcbiAgICBsZXQgZGlzcGxheUNoZWNrZWQgPSBgJHtjaGVja2xpc3QgPyBgPHN2ZyBzdHlsZT1cIndpZHRoOjE2cHg7aGVpZ2h0OjE2cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgPHBhdGggZmlsbD1cImdyZWVuXCIgZD1cIk05LDIwLjQyTDIuNzksMTQuMjFMNS42MiwxMS4zOEw5LDE0Ljc3TDE4Ljg4LDQuODhMMjEuNzEsNy43MUw5LDIwLjQyWlwiIC8+XHJcbiAgICAgICAgPC9zdmc+YCA6IGA8c3ZnIHN0eWxlPVwid2lkdGg6MTZweDtoZWlnaHQ6MTZweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTksM0g1QzMuODksMyAzLDMuODkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVY1QzIxLDMuODkgMjAuMSwzIDE5LDNNMTksNVYxOUg1VjVIMTlaXCIgLz5cclxuICAgICAgICA8L3N2Zz5gfWBcclxuICAgIHJldHVybiBkaXNwbGF5Q2hlY2tlZFxyXG59XHJcblxyXG5jb25zdCBlZGl0U3ZnID0gaSA9PiB7XHJcbiAgICByZXR1cm4gYDxzdmcgY2xhc3M9XCJlZGl0LWJ0blwiIGRhdGEtdGFzaz1cIiR7aX1cIiBzdHlsZT1cIndpZHRoOjIwcHg7aGVpZ2h0OjIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMCAySDRDMi45IDIgMiAyLjkgMiA0VjE2QzIgMTcuMTEgMi45IDE4IDQgMThIOEwxMiAyMkwxNiAxOEgyMEMyMS4xMSAxOCAyMiAxNy4xMSAyMiAxNlY0QzIyIDIuOSAyMS4xMSAyIDIwIDJNOS4wOCAxNUg3VjEyLjkxTDEzLjE3IDYuNzJMMTUuMjQgOC44TDkuMDggMTVNMTYuODQgNy4yTDE1LjgzIDguMjFMMTMuNzYgNi4xOEwxNC43NyA1LjE2QzE0Ljk3IDQuOTUgMTUuMzEgNC45NCAxNS41NSA1LjE2TDE2Ljg0IDYuNDFDMTcuMDUgNi42MiAxNy4wNiA2Ljk2IDE2Ljg0IDcuMlpcIiAvPlxyXG48L3N2Zz5gXHJcbn1cclxuXHJcbmNvbnN0IHRyYXNoU3ZnID0gaSA9PiB7XHJcbiAgICByZXR1cm4gYDxzdmcgY2xhc3M9XCJkZWxldGUtYnRuXCIgZGF0YS1kZWxldGU9XCIke2l9XCIgc3R5bGU9XCJ3aWR0aDoyMHB4O2hlaWdodDoyMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTksNEgxNS41TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5TTYsMTlBMiwyIDAgMCwwIDgsMjFIMTZBMiwyIDAgMCwwIDE4LDE5VjdINlYxOVpcIiAvPlxyXG48L3N2Zz5gXHJcbn1cclxuXHJcblxyXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKVxyXG5jb25zdCBhZGRQcm9qQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qLWJ0bicpXHJcbmNvbnN0IGFkZFRoZVByb2pCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2onKVxyXG5jb25zdCBwcm9qTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qLW5hbWUnKVxyXG5cclxuYWRkUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxufSlcclxuXHJcbmFkZFRoZVByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjcmVhdGVQcm9qZWN0KHByb2pOYW1lLnZhbHVlKVxyXG5cclxuICAgIHByb2pOYW1lLnZhbHVlID0gJydcclxuICAgIGNsb3NlVGFzaygpO1xyXG59KVxyXG4iLCJpbXBvcnQgeyBsb2FkVGFza3MgfSBmcm9tIFwiLi9kb20tY29udGVudFwiXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZEVkaXRpb24gPSAoaW5kZXgpID0+IHtcclxuICAgIGxldCBzdG9yYWdlZFRhc2tzID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2snKSlcclxuICAgIHJldHVybiBzdG9yYWdlZFRhc2tzW2luZGV4XVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHdyaXRlRWRpdGlvbiA9IChpbmRleCwgZWRpdGVkVGFzaykgPT4ge1xyXG4gICAgbGV0IHN0b3JhZ2VkVGFza3MgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFzaycpKVxyXG4gICAgc3RvcmFnZWRUYXNrc1tpbmRleF0gPSBlZGl0ZWRUYXNrXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFzaycsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VkVGFza3MpKVxyXG5cclxuICAgIGxvYWRUYXNrcygpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcclxuICAgIGxldCBzdG9yYWdlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xyXG4gICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XHJcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxyXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XHJcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcclxuICAgICAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcclxuICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XHJcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxyXG4gICAgICAgICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcclxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcclxuICAgICAgICAgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xyXG5cclxuY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLW5hbWUnKVxyXG5jb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2NyaXB0aW9uJylcclxuY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZS1kYXRlJylcclxuY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JylcclxuY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKVxyXG5jb25zdCB0YXNrRG9uZUNoZWNrYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZG9uZScpXHJcblxyXG5sZXQgdGFza05hbWUgPSB0YXNrTmFtZUlucHV0LnZhbHVlO1xyXG5sZXQgdGFza0Rlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbmxldCBkdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xyXG5sZXQgcHJvamVjdCA9IHByb2plY3RTZWxlY3QudmFsdWU7XHJcbmxldCBwcmlvcml0eSA9IHByaW9yaXR5U2VsZWN0LnZhbHVlO1xyXG5sZXQgdGFza0RvbmUgPSB0YXNrRG9uZUNoZWNrYnV0dG9uLmNoZWNrZWQ7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlSW5pdFZhbHVlcyA9ICgpID0+IHtcclxuICAgIHRhc2tOYW1lSW5wdXQudmFsdWUgPSAnJ1xyXG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSAnJ1xyXG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gJydcclxuICAgIHByb2plY3RTZWxlY3QudmFsdWUgPSAnJ1xyXG4gICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSAnJ1xyXG4gICAgdGFza0RvbmVDaGVja2J1dHRvbi5jaGVja2VkID0gZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHZhbHVlc0VkaXQgPSAodGFzaykgPT4ge1xyXG4gICAgbGV0IHt0aXRsZSwgZGVzY2lwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIGNoZWNrbGlzdH0gPSB0YXNrXHJcblxyXG4gICAgdGFza05hbWVJbnB1dC52YWx1ZSA9IHRpdGxlO1xyXG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBkZXNjaXB0aW9uO1xyXG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gZHVlRGF0ZTtcclxuICAgIHByb2plY3RTZWxlY3QudmFsdWUgPSBwcm9qZWN0XHJcbiAgICBwcmlvcml0eVNlbGVjdC52YWx1ZSA9IHByaW9yaXR5O1xyXG4gICAgdGFza0RvbmVDaGVja2J1dHRvbi5jaGVja2VkID0gY2hlY2tsaXN0O1xyXG4gICAgIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlSXQgPSAoKSA9PiB7XHJcbiAgICB0YXNrTmFtZSA9IHRhc2tOYW1lSW5wdXQudmFsdWU7XHJcbiAgICB0YXNrRGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcclxuICAgIGR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XHJcbiAgICBwcm9qZWN0ID0gcHJvamVjdFNlbGVjdC52YWx1ZTtcclxuICAgIHByaW9yaXR5ID0gcHJpb3JpdHlTZWxlY3QudmFsdWU7XHJcbiAgICB0YXNrRG9uZSA9IHRhc2tEb25lQ2hlY2tidXR0b24uY2hlY2tlZDtcclxuICAgIFxyXG4gICAgcmV0dXJuIG5ldyBUYXNrKHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCB0YXNrRG9uZSk7XHJcbn0iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NpcHRpb24sIGR1ZURhdGUsICBwcmlvcml0eSwgcHJvamVjdCwgY2hlY2tsaXN0KXtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLmRlc2NpcHRpb24gPSBkZXNjaXB0aW9uIFxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUvKi50b0lTT1N0cmluZygpLnNwbGl0KCdUJykqL1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RcclxuICAgICAgICB0aGlzLmNoZWNrbGlzdCA9IGNoZWNrbGlzdFxyXG5cclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vY3JlYXRlLW5ldyc7XHJcbmltcG9ydCB7IGxvYWRQcm9qZWN0cywgbG9hZFRhc2tzIH0gZnJvbSAnLi9kb20tY29udGVudCc7XHJcbmltcG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5pZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcclxuICAgIGNvbnNvbGUubG9nKCdsb2NhbCBzdG9yYWdlIGZvdW5kJylcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygnbm8gbG9jYWwgc3RvcmFnZSBhdmFpbGFibGUnKVxyXG4gIH1cclxuXHJcbmxvYWRUYXNrcygpO1xyXG5sb2FkUHJvamVjdHMoKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=