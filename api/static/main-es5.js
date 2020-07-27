function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/ChartHelper.ts":
  /*!********************************!*\
    !*** ./src/app/ChartHelper.ts ***!
    \********************************/

  /*! exports provided: ChartHelper */

  /***/
  function srcAppChartHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartHelper", function () {
      return ChartHelper;
    });
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);

    var ChartHelper = /*#__PURE__*/function () {
      function ChartHelper() {
        _classCallCheck(this, ChartHelper);

        this.ict_unit = [];
        this.efficiency = [];
        this.coloR = [];
      }

      _createClass(ChartHelper, [{
        key: "createBarMontant_out",
        value: function createBarMontant_out(data, name, title) {
          var years = this.getYears(data, 'r');
          var montant_out = this.getData(data, 'montant_out');
          var bar = new chart_js__WEBPACK_IMPORTED_MODULE_0__(name, {
            type: 'bar',
            data: {
              datasets: [{
                label: 'montant par jour janvier',
                data: montant_out,
                backgroundColor: '#86C7F3',
                borderColor: '#5EB4EF'
              }],
              labels: years
            },
            options: {
              title: {
                text: title,
                display: true,
                fontSize: 20,
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
              },
              responsive: true
            }
          });
        }
      }, {
        key: "createBarMontant_out_in",
        value: function createBarMontant_out_in(data, name, title) {
          var years = this.getYears(data, 'r');
          var montant_out = this.getData(data, 'montant_out');
          var montant_in = this.getData(data, 'montant_in');
          var bar = new chart_js__WEBPACK_IMPORTED_MODULE_0__(name, {
            type: 'line',
            data: {
              datasets: [{
                label: 'montant out par jour janvier',
                data: montant_out,
                backgroundColor: '#86C7F3',
                borderColor: '#5EB4EF'
              }, {
                label: 'montant IN par jour janvier',
                data: montant_in,
                backgroundColor: '#FFA1B5',
                borderColor: '#f2e6ff'
              }],
              labels: years
            },
            options: {
              title: {
                text: title,
                display: true,
                fontSize: 20,
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
              },
              responsive: true
            }
          });
        }
      }, {
        key: "createBar_nb_subs_day",
        value: function createBar_nb_subs_day(data, name, title) {
          var years = this.getYears(data, 'r');
          var nb_activation = this.getData(data, 'nb_activation');
          var bar = new chart_js__WEBPACK_IMPORTED_MODULE_0__(name, {
            type: 'bar',
            data: {
              datasets: [{
                label: 'number activation  par jour ',
                data: nb_activation,
                backgroundColor: '#86C7F3',
                borderColor: '#5EB4EF'
              }],
              labels: years
            },
            options: {
              title: {
                text: title,
                display: true,
                fontSize: 20,
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
              },
              responsive: true
            }
          });
        }
      }, {
        key: "createPie_nb_subs_wilaya",
        value: function createPie_nb_subs_wilaya(data, name, title, type) {
          var nom_wilaya = this.getWilaya(data, 'nom_wilaya');
          var nb_suscrip = this.getData(data, type);
          this.getRandomColor(data);
          var bar = new chart_js__WEBPACK_IMPORTED_MODULE_0__(name, {
            type: 'doughnut',
            data: {
              datasets: [{
                label: 'number activation  par wilaya ',
                data: nb_suscrip,
                backgroundColor: this.coloR,
                borderColor: this.coloR
              }],
              labels: nom_wilaya
            },
            options: {
              title: {
                text: title,
                display: true,
                fontSize: 20,
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
              },
              responsive: true,
              legend: {
                display: false
              }
            }
          });
        }
      }, {
        key: "createBar_active_offer",
        value: function createBar_active_offer(data, name, title) {
          var years = this.getYears(data, 'Offer_ID');
          var active_offer = this.getData(data, 'number');
          var bar = new chart_js__WEBPACK_IMPORTED_MODULE_0__(name, {
            type: 'bar',
            data: {
              datasets: [{
                label: 'number activation  par jour ',
                data: active_offer,
                backgroundColor: '#86C7F3',
                borderColor: '#5EB4EF'
              }],
              labels: years
            },
            options: {
              title: {
                text: title,
                display: true,
                fontSize: 20,
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
              },
              responsive: true
            }
          });
        }
      }, {
        key: "createPie_custumer_value",
        value: function createPie_custumer_value(data, name, title) {
          var Customer_Value = this.getWilaya(data, 'Customer_Value');
          var sum = this.getData(data, 'sum');
          this.getRandomColor(data);
          var bar = new chart_js__WEBPACK_IMPORTED_MODULE_0__(name, {
            type: 'pie',
            data: {
              datasets: [{
                label: 'number activation  par wilaya ',
                data: sum,
                backgroundColor: this.coloR,
                borderColor: this.coloR
              }],
              labels: Customer_Value
            },
            options: {
              title: {
                text: title,
                display: true,
                fontSize: 20,
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
              },
              responsive: true
            }
          });
        }
      }, {
        key: "createPie_market_share",
        value: function createPie_market_share(data, name, title) {
          var market_share = data[0];
          console.log(market_share);
          var company = ['djezzy', 'mobilis', 'ooredoo'];
          var value = [market_share.djezzy, market_share.mobilis, market_share.ooredoo];
          this.getRandomColor(data);
          var bar = new chart_js__WEBPACK_IMPORTED_MODULE_0__(name, {
            type: 'pie',
            data: {
              datasets: [{
                label: 'number activation  par wilaya ',
                data: value,
                backgroundColor: this.coloR,
                borderColor: this.coloR
              }],
              labels: company
            },
            options: {
              title: {
                text: title,
                display: true,
                fontSize: 20,
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
              },
              responsive: true
            }
          });
        }
      }, {
        key: "createPie_tech",
        value: function createPie_tech(data, name, title) {
          var tech = this.getWilaya(data, 'TECHNOLOGIE');
          var sum = this.getData(data, 'pourcentage');
          this.getRandomColor(data);
          var bar = new chart_js__WEBPACK_IMPORTED_MODULE_0__(name, {
            type: 'pie',
            data: {
              datasets: [{
                label: 'number activation  par wilaya ',
                data: sum,
                backgroundColor: this.coloR,
                borderColor: this.coloR
              }],
              labels: tech
            },
            options: {
              title: {
                text: title,
                display: true,
                fontSize: 20,
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
              },
              responsive: true
            }
          });
        }
      }, {
        key: "createBarnb_chutes_day",
        value: function createBarnb_chutes_day(data, name, title) {
          var years = this.getYears(data, 'jour');
          var count = this.getData(data, 'count');
          var bar = new chart_js__WEBPACK_IMPORTED_MODULE_0__(name, {
            type: 'bar',
            data: {
              datasets: [{
                label: 'nb_chutes_day',
                data: count,
                backgroundColor: '#86C7F3',
                borderColor: '#5EB4EF'
              }],
              labels: years
            },
            options: {
              title: {
                text: title,
                display: true,
                fontSize: 20,
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
              },
              responsive: true
            }
          });
        }
      }, {
        key: "createBar_nb_chutes_per",
        value: function createBar_nb_chutes_per(data, name, title) {
          var count = this.getData(data, 'count');
          var etat = this.getWilaya(data, 'etat');
          var bar = new chart_js__WEBPACK_IMPORTED_MODULE_0__(name, {
            type: 'pie',
            data: {
              datasets: [{
                label: 'nb_chutes_day',
                data: count,
                backgroundColor: ['#86C7F3', '#FFA1B5'],
                borderColor: ['#86C7F3', '#f2e6ff']
              }],
              labels: etat
            },
            options: {
              title: {
                text: title,
                display: true,
                fontSize: 20,
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
              },
              responsive: true
            }
          });
        }
      }, {
        key: "getData",
        value: function getData(datas, type) {
          var datae = [];

          var _iterator = _createForOfIteratorHelper(datas),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var data = _step.value;
              datae.push(parseInt(data[type]));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return datae;
        }
      }, {
        key: "getYears",
        value: function getYears(datas, type) {
          var year = [];

          var _iterator2 = _createForOfIteratorHelper(datas),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var data = _step2.value;
              year.push(new Date(data[type]).getDate());
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return year;
        }
      }, {
        key: "getWilaya",
        value: function getWilaya(datas, type) {
          var wilaya = [];

          var _iterator3 = _createForOfIteratorHelper(datas),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var data = _step3.value;
              wilaya.push(data[type]);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          return wilaya;
        }
      }, {
        key: "getRandomColor",
        value: function getRandomColor(data) {
          var dynamicColors = function dynamicColors() {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            return "rgb(" + r + "," + g + "," + b + ",0.3)";
          };

          for (var i in data) {
            this.ict_unit.push("ICT Unit " + data[i].ict_unit);
            this.efficiency.push(data[i].efficiency);
            this.coloR.push(dynamicColors());
          }
        }
      }]);

      return ChartHelper;
    }(); //Class

    /***/

  },

  /***/
  "./src/app/analyde-plate/analyde-plate.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/analyde-plate/analyde-plate.component.ts ***!
    \**********************************************************/

  /*! exports provided: AnalydePlateComponent */

  /***/
  function srcAppAnalydePlateAnalydePlateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalydePlateComponent", function () {
      return AnalydePlateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _backend_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../backend-api.service */
    "./src/app/backend-api.service.ts");
    /* harmony import */


    var _ChartHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ChartHelper */
    "./src/app/ChartHelper.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AnalydePlateComponent = /*#__PURE__*/function () {
      function AnalydePlateComponent(_backendApi, _chart) {
        _classCallCheck(this, AnalydePlateComponent);

        this._backendApi = _backendApi;
        this._chart = _chart;
      }

      _createClass(AnalydePlateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._backendApi.getTotalSum().subscribe(function (data) {
            _this.setamount(data);
          });

          this._backendApi.getAnalyse().subscribe(function (data) {
            var montant_out = _this.getDataByrefrence(data, 'montant_out');

            var montant_in_out = _this.getDataByrefrence(data, 'montant_in_out');

            var nb_subs_day = _this.getDataByrefrence(data, 'nb_subs_day');

            var nb_subs_wilaya = _this.getDataByrefrence(data, 'nb_subs_wilaya');

            var active_offer = _this.getDataByrefrence(data, 'active_offer');

            var custumer_value = _this.getDataByrefrence(data, 'custumer_value');

            var market_share = _this.getDataByrefrence(data, 'market_share');

            var tech = _this.getDataByrefrence(data, 'tech');

            _this._chart.createBarMontant_out(montant_out, 'montant_out', 'montant out');

            _this._chart.createBarMontant_out_in(montant_in_out, 'montant_in_out', 'montant in  out');

            _this._chart.createBar_nb_subs_day(nb_subs_day, 'nb_subs_day', 'number activation  par jour');

            _this._chart.createPie_nb_subs_wilaya(nb_subs_wilaya, 'nb_subs_wilaya', 'nb_subs_wilaya', 'nb_suscrip');

            _this._chart.createBar_active_offer(active_offer, 'active_offer', 'active_offer');

            _this._chart.createPie_custumer_value(custumer_value, "custumer_value", "Custumer_value");

            _this._chart.createPie_market_share(market_share, "market_share", "market_share");

            _this._chart.createPie_tech(tech, 'tech', 'tech');
          });
        }
      }, {
        key: "setamount",
        value: function setamount(data) {
          this.Total_Amount = data.totale_amount_out;
          this.Total_Count = data.nb_transaction;
          this.Total_Amount1 = data.nb_sim_sale;
          this.Total_Count1 = data.nb_sim_activated;
        }
      }, {
        key: "getDataByrefrence",
        value: function getDataByrefrence(data, name) {
          return data[name];
        }
      }]);

      return AnalydePlateComponent;
    }(); //class


    AnalydePlateComponent.ɵfac = function AnalydePlateComponent_Factory(t) {
      return new (t || AnalydePlateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_backend_api_service__WEBPACK_IMPORTED_MODULE_1__["BackendApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ChartHelper__WEBPACK_IMPORTED_MODULE_2__["ChartHelper"]));
    };

    AnalydePlateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnalydePlateComponent,
      selectors: [["app-analyde-plate"]],
      decls: 35,
      vars: 4,
      consts: [[1, "card-container"], ["target", "_blank", "rel", "noopener", 1, "card", 2, "background-color", "#99c2ff"], ["target", "_blank", "rel", "noopener", 1, "card", 2, "background-color", "#66a3ff"], ["target", "_blank", "rel", "noopener", 1, "card", 2, "background-color", "#1a8cff"], ["target", "_blank", "rel", "noopener", 1, "card", 2, "background-color", "#0066cc"], [1, "G1", 2, "display", "block"], ["id", "montant_out"], [1, "G2", 2, "display", "block"], ["id", "montant_in_out"], [1, "G3", 2, "display", "block"], ["id", "nb_subs_day"], [1, "G4", 2, "display", "block"], ["id", "nb_subs_wilaya"], [1, "G5", 2, "display", "block"], ["id", "active_offer"], [1, "G6", 2, "display", "block"], ["id", "custumer_value"], [1, "G7", 2, "display", "block"], ["id", "market_share"], [1, "G8", 2, "display", "block"], ["id", "tech"], ["routerLink", "/Register", 1, "lien"], ["routerLink", "/Pr\xE9diction", 1, "lien"]],
      template: function AnalydePlateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "canvas", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "canvas", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "canvas", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "canvas", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "canvas", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "canvas", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "canvas", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "canvas", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Exite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Pr\xE9diction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total_Amount ", ctx.Total_Amount, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total_Count ", ctx.Total_Count, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total_Amount ", ctx.Total_Amount1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total_Count ", ctx.Total_Count1, "");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".G1[_ngcontent-%COMP%]{\r\n    background-color: #e6f2ff;\r\n    width:28%;\r\n    margin-top: 1%;\r\n    margin-right: 1%;\r\n    float: right;\r\n}\r\n.G2[_ngcontent-%COMP%]{\r\n    background-color: #e6f2ff;\r\n    width:28%;\r\n    margin-top: 1%;\r\n    margin-right: 1%;\r\n    float: right;\r\n}\r\n.G3[_ngcontent-%COMP%]{\r\n    background-color: #e6f2ff;\r\n    width:28%;\r\n    margin-top: 1%;\r\n    margin-right: 1%;\r\n    float: right;\r\n\r\n}\r\n.G4[_ngcontent-%COMP%]{\r\n    background-color: #e6f2ff;\r\n    width:28%;\r\n    margin-top: 1%;\r\n    margin-right: 1%;\r\n    float: right;\r\n}\r\n.G5[_ngcontent-%COMP%]{\r\n    background-color: #e6f2ff;\r\n    width:28%;\r\n    margin-top: 1%;\r\n    margin-right: 1%;\r\n    float: right;\r\n}\r\n.G6[_ngcontent-%COMP%]{\r\n    background-color: #e6f2ff;\r\n    width:28%;\r\n    margin-top: 1%;\r\n    margin-right: 1%;\r\n    float: right;\r\n}\r\n.G7[_ngcontent-%COMP%]{\r\n    background-color: #e6f2ff;\r\n    width:20%;\r\n    margin-top: 1%;\r\n    margin-left: 1%;\r\n    float: left;\r\n}\r\n.G8[_ngcontent-%COMP%]{\r\n    background-color: #e6f2ff;\r\n    width:20%;\r\n    margin-top: 1%;\r\n    margin-left: 1%;\r\n    float: left;\r\n\r\n}\r\n.card-container[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n    border: 1px solid #eee;\r\n    background-color: #fafafa;\r\n    height: 465px;\r\n    width: 12%;\r\n    margin-top: 1%;\r\n    padding: 0.5%;\r\n    float: left;\r\n    transition: all 0.2s ease-in-out;\r\n    line-height: 24px;\r\n     }\r\n.card[_ngcontent-%COMP%]{\r\n    background-color: #1976d2;\r\n    color: white;\r\n    font-weight: 600;\r\n    border: none;\r\n    width: auto;\r\n    height: 25%;\r\n    position: relative;\r\n    text-align: center;\r\n    transform: translateY(-3px);\r\n    \r\n    cursor: pointer;\r\n}\r\na[_ngcontent-%COMP%]:hover {\r\n    color: #000080;\r\n    text-decoration:  underline;\r\n}\r\n.lien[_ngcontent-%COMP%]{\r\n    float:right;\r\n    background-color: #7ca7da;\r\n    border-radius: 10px;\r\n    color: white;\r\n    font-weight: 600;\r\n    border: none;\r\n    width: 15%;\r\n    height: 40px;\r\n    margin: 1%;\r\n    margin-top: 7%;\r\n    position: relative;\r\n    text-align: center;\r\n    transform: translateY(-3px);\r\n    \r\n    cursor: pointer;\r\n        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hbHlkZS1wbGF0ZS9hbmFseWRlLXBsYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsU0FBUztJQUNULGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZOztBQUVoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsU0FBUztJQUNULGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7O0FBRWY7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixVQUFVO0lBQ1YsY0FBYztJQUNkLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtLQUNoQjtBQUNMO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IscUVBQXFFO0lBQ3JFLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixxRUFBcUU7SUFDckUsZUFBZTtRQUNYIiwiZmlsZSI6InNyYy9hcHAvYW5hbHlkZS1wbGF0ZS9hbmFseWRlLXBsYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuRzF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmMmZmO1xyXG4gICAgd2lkdGg6MjglO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5HMntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmYyZmY7XHJcbiAgICB3aWR0aDoyOCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLkcze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjJmZjtcclxuICAgIHdpZHRoOjI4JTtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuXHJcbn1cclxuLkc0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjJmZjtcclxuICAgIHdpZHRoOjI4JTtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4uRzV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmMmZmO1xyXG4gICAgd2lkdGg6MjglO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5HNntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmYyZmY7XHJcbiAgICB3aWR0aDoyOCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLkc3e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjJmZjtcclxuICAgIHdpZHRoOjIwJTtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLkc4e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjJmZjtcclxuICAgIHdpZHRoOjIwJTtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG59XHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGhlaWdodDogNDY1cHg7XHJcbiAgICB3aWR0aDogMTIlO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBwYWRkaW5nOiAwLjUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgIH1cclxuLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAvKiBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoNSwgMTAsIDkwLCAwLjM1KTtoc2woMjEwLCAxMDAlLCA0MCUpICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwMDA4MDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogIHVuZGVybGluZTtcclxufVxyXG4ubGllbntcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdjYTdkYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIC8qIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSg1LCAxMCwgOTAsIDAuMzUpO2hzbCgyMTAsIDEwMCUsIDQwJSkgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalydePlateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-analyde-plate',
          templateUrl: './analyde-plate.component.html',
          styleUrls: ['./analyde-plate.component.css']
        }]
      }], function () {
        return [{
          type: _backend_api_service__WEBPACK_IMPORTED_MODULE_1__["BackendApiService"]
        }, {
          type: _ChartHelper__WEBPACK_IMPORTED_MODULE_2__["ChartHelper"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _analyde_plate_analyde_plate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./analyde-plate/analyde-plate.component */
    "./src/app/analyde-plate/analyde-plate.component.ts");
    /* harmony import */


    var _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./prediction/prediction.component */
    "./src/app/prediction/prediction.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");

    var routes = [{
      path: 'Analyse-Plate',
      component: _analyde_plate_analyde_plate_component__WEBPACK_IMPORTED_MODULE_2__["AnalydePlateComponent"]
    }, {
      path: 'Prédiction',
      component: _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_3__["PredictionComponent"]
    }, {
      path: 'Register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }, {
      path: '',
      redirectTo: '/Register',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'PFE-app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 0,
      consts: [["charset", "utf-8"], [2, "text-align", "center", "color", "#3399ff", "background-color", "#ffffff", "font-family", "'Times New Roman', Times, serif"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Pfe Application ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _analyde_plate_analyde_plate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./analyde-plate/analyde-plate.component */
    "./src/app/analyde-plate/analyde-plate.component.ts");
    /* harmony import */


    var _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./prediction/prediction.component */
    "./src/app/prediction/prediction.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ChartHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./ChartHelper */
    "./src/app/ChartHelper.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_ChartHelper__WEBPACK_IMPORTED_MODULE_9__["ChartHelper"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _analyde_plate_analyde_plate_component__WEBPACK_IMPORTED_MODULE_5__["AnalydePlateComponent"], _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_6__["PredictionComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _analyde_plate_analyde_plate_component__WEBPACK_IMPORTED_MODULE_5__["AnalydePlateComponent"], _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_6__["PredictionComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
          providers: [_ChartHelper__WEBPACK_IMPORTED_MODULE_9__["ChartHelper"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/backend-api.service.ts":
  /*!****************************************!*\
    !*** ./src/app/backend-api.service.ts ***!
    \****************************************/

  /*! exports provided: BackendApiService */

  /***/
  function srcAppBackendApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendApiService", function () {
      return BackendApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BackendApiService = /*#__PURE__*/function () {
      function BackendApiService(http) {
        _classCallCheck(this, BackendApiService);

        this.http = http;
        this.url = "http://localhost:5000/";
      }

      _createClass(BackendApiService, [{
        key: "getTotalSum",
        value: function getTotalSum() {
          return this.http.get(this.url + "totalSum");
        }
      }, {
        key: "getAnalyse",
        value: function getAnalyse() {
          return this.http.get(this.url + "analyse");
        }
      }, {
        key: "getAnalysePred",
        value: function getAnalysePred() {
          return this.http.get(this.url + "analysePred");
        }
      }, {
        key: "getTotalPred",
        value: function getTotalPred() {
          return this.http.get(this.url + "totalPred");
        }
      }]);

      return BackendApiService;
    }();

    BackendApiService.ɵfac = function BackendApiService_Factory(t) {
      return new (t || BackendApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    BackendApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BackendApiService,
      factory: BackendApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/prediction/prediction.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/prediction/prediction.component.ts ***!
    \****************************************************/

  /*! exports provided: PredictionComponent */

  /***/
  function srcAppPredictionPredictionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionComponent", function () {
      return PredictionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _backend_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../backend-api.service */
    "./src/app/backend-api.service.ts");
    /* harmony import */


    var _ChartHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ChartHelper */
    "./src/app/ChartHelper.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PredictionComponent = /*#__PURE__*/function () {
      function PredictionComponent(_backendApi, _chart) {
        _classCallCheck(this, PredictionComponent);

        this._backendApi = _backendApi;
        this._chart = _chart;
      }

      _createClass(PredictionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this._backendApi.getTotalPred().subscribe(function (data) {
            _this2.setamount(data);
          });

          this._backendApi.getAnalysePred().subscribe(function (data) {
            var nb_chutes_wilaya = _this2.getDataByrefrence(data, 'nb_chutes_wilaya');

            var nb_chutes_day = _this2.getDataByrefrence(data, 'nb_chutes_day');

            var nb_chutes_per = _this2.getDataByrefrence(data, 'nb_chutes_per');

            var market_share = _this2.getDataByrefrence(data, 'market_share'); //create chart


            _this2._chart.createPie_market_share(market_share, "market_share", "market_share");

            _this2._chart.createPie_nb_subs_wilaya(nb_chutes_wilaya, 'nb_chutes_wilaya', 'nb_chutes_wilaya', 'nb_chute');

            _this2._chart.createBarnb_chutes_day(nb_chutes_day, 'nb_chutes_day', 'nb_chutes_day');

            _this2._chart.createBar_nb_chutes_per(nb_chutes_per, 'nb_chutes_per', 'nb_chutes_per');
          });
        }
      }, {
        key: "setamount",
        value: function setamount(data) {
          this.Total_Amount = data.totale_amount_out;
          this.Total_Count = data.nb_transaction;
          this.Total_Amount1 = data.nb_sim_sale;
          this.Total_Count1 = data.nb_sim_activated;
        }
      }, {
        key: "getDataByrefrence",
        value: function getDataByrefrence(data, name) {
          return data[name];
        }
      }]);

      return PredictionComponent;
    }(); //


    PredictionComponent.ɵfac = function PredictionComponent_Factory(t) {
      return new (t || PredictionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_backend_api_service__WEBPACK_IMPORTED_MODULE_1__["BackendApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ChartHelper__WEBPACK_IMPORTED_MODULE_2__["ChartHelper"]));
    };

    PredictionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PredictionComponent,
      selectors: [["app-prediction"]],
      decls: 36,
      vars: 4,
      consts: [[1, "research"], ["for", "Research"], ["type", "text", "name", "nom", "placeholder", "  Saisir votre recherche SVP   ", 1, "i"], [1, "card-container"], ["target", "_blank", "rel", "noopener", 1, "card", 2, "background-color", "#99c2ff"], ["target", "_blank", "rel", "noopener", 1, "card", 2, "background-color", "#66a3ff"], ["target", "_blank", "rel", "noopener", 1, "card", 2, "background-color", "#1a8cff"], ["target", "_blank", "rel", "noopener", 1, "card", 2, "background-color", "#0066cc"], [1, "G1", 2, "display", "block"], ["id", "table"], [1, "G2", 2, "display", "block"], ["id", "nb_chutes_wilaya"], [1, "G3", 2, "display", "block"], ["id", "nb_chutes_day"], [1, "G4", 2, "display", "block"], ["id", "nb_chutes_per"], [1, "G5", 2, "display", "block"], ["id", "market_share"], ["routerLink", "/Register", 1, "lien"], ["routerLink", "/Analyse-Plate", 1, "lien"]],
      template: function PredictionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Research :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Search results ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "canvas", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "canvas", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "canvas", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "canvas", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "canvas", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Exite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Analyste-Plate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total_Amount ", ctx.Total_Amount, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total_Count ", ctx.Total_Count, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total_Amount ", ctx.Total_Amount1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total_Count ", ctx.Total_Count1, "");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".G1[_ngcontent-%COMP%], .G2[_ngcontent-%COMP%]{\r\n    background-color: #e6f2ffab;\r\n    width:40%;\r\n    float: left;\r\n}\r\n.G1[_ngcontent-%COMP%]{\r\n    margin-right: 1%;\r\n    margin-left: 1%;\r\n}\r\n.G2[_ngcontent-%COMP%]{\r\n    margin-right: 2%;\r\n}\r\n.G3[_ngcontent-%COMP%]{\r\n    background-color: #e6f2ffa9;\r\n    width:28%;\r\n    margin-top: 1%;\r\n    margin-right: 1%;\r\n    float: right;\r\n}\r\n.G4[_ngcontent-%COMP%]{\r\n    background-color: #e6f2ffa6;\r\n    width:28%;\r\n    margin-top: 1%;\r\n    margin-right: 1%;\r\n    float: right;\r\n}\r\n.G5[_ngcontent-%COMP%]{\r\n    background-color: #e6f2ff93;\r\n    width:28%;\r\n    margin-top: 1%;\r\n    margin-right: 1%;\r\n    float: right;\r\n\r\n}\r\n.card-container[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n    border: 1px solid #eee;\r\n    background-color: #fafafa;\r\n    height: 465px;\r\n    width: 12%;\r\n    padding: 0.5%;\r\n    float: left;\r\n    transition: all 0.2s ease-in-out;\r\n    line-height: 24px;\r\n        }\r\n.card[_ngcontent-%COMP%]{\r\n    background-color: #1976d2;\r\n    color: white;\r\n    font-weight: 600;\r\n    border: none;\r\n    border-radius: 0px;\r\n    width: auto;\r\n    height: 25%;\r\n    position: relative;\r\n    text-align: center;\r\n    transform: translateY(-3px);\r\n    \r\n    cursor: pointer;\r\n}\r\na[_ngcontent-%COMP%]:hover {\r\n    color: #000080;\r\n    text-decoration:  underline;\r\n}\r\n.lien[_ngcontent-%COMP%]{\r\n    float:right;\r\n    background-color: #7ca7da;\r\n    color: white;\r\n    font-weight: 600;\r\n    border: none;\r\n    border-radius: 10px;\r\n    width: 15%;\r\n    height: 40px;\r\n    margin: 1%; \r\n    position: relative;\r\n    text-align: center;\r\n    transform: translateY(-3px);\r\n    \r\n    cursor: pointer;\r\n        }\r\n.i[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    border-radius: 8px;\r\n    margin: 0 2% 0 5%;\r\n    background-color: rgb(177, 202, 255);\r\n\r\n}\r\n.research[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    float: right;\r\n    margin-right: 45%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlZGljdGlvbi9wcmVkaWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsU0FBUztJQUNULGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtRQUNiO0FBQ1I7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IscUVBQXFFO0lBQ3JFLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHFFQUFxRTtJQUNyRSxlQUFlO1FBQ1g7QUFDUjtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9DQUFvQzs7QUFFeEM7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcHJlZGljdGlvbi9wcmVkaWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLkcxLC5HMntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmYyZmZhYjtcclxuICAgIHdpZHRoOjQwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5HMXtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxuLkcye1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxufVxyXG4uRzN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmMmZmYTk7XHJcbiAgICB3aWR0aDoyOCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLkc0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjJmZmE2O1xyXG4gICAgd2lkdGg6MjglO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5HNXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmYyZmY5MztcclxuICAgIHdpZHRoOjI4JTtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuXHJcbn1cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgaGVpZ2h0OiA0NjVweDtcclxuICAgIHdpZHRoOiAxMiU7XHJcbiAgICBwYWRkaW5nOiAwLjUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIH1cclxuLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAvKiBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoNSwgMTAsIDkwLCAwLjM1KTtoc2woMjEwLCAxMDAlLCA0MCUpICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwMDA4MDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogIHVuZGVybGluZTtcclxufVxyXG4ubGllbntcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdjYTdkYTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogMSU7IFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgLyogYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDUsIDEwLCA5MCwgMC4zNSk7aHNsKDIxMCwgMTAwJSwgNDAlKSAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuLml7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWFyZ2luOiAwIDIlIDAgNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAyMDIsIDI1NSk7XHJcblxyXG59XHJcblxyXG4ucmVzZWFyY2h7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0NSU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PredictionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-prediction',
          templateUrl: './prediction.component.html',
          styleUrls: ['./prediction.component.css']
        }]
      }], function () {
        return [{
          type: _backend_api_service__WEBPACK_IMPORTED_MODULE_1__["BackendApiService"]
        }, {
          type: _ChartHelper__WEBPACK_IMPORTED_MODULE_2__["ChartHelper"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent() {
        _classCallCheck(this, RegisterComponent);

        this.fullImagePath = 'assets/AppImage/1.jpg';
        this.fullImagePath1 = 'assets/AppImage/Logo_Usthb.png';
        this.fullImagePath2 = 'assets/AppImage/Logo_Djezzy.png';
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)();
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 27,
      vars: 2,
      consts: [["charset", "utf-8"], ["id", "image"], ["id", "img1", 3, "src"], ["id", "img2", 3, "src"], ["id", "cadre"], ["type", "text", "placeholder", "Entrer votre nom d'utilisateur SVP", "name", "username", "required", ""], ["type", "password", "placeholder", "Entrer votre mot de passe", "name", "password", "required", ""], ["type", "submit", "id", "submit", "routerLink", "/Analyse-Plate", "value", "Se connecter"], ["href", "mailto", 1, "lien"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SginUp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nom d'utilisateur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mot de passe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "mot de passe oubli\xE9 ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contacter votre r\xE9sponsable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fullImagePath1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fullImagePath2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["#cadre[_ngcontent-%COMP%]{\r\n    width:28%;\r\n    float: left;\r\n    margin-left: 35%;\r\n}\r\nform[_ngcontent-%COMP%] {\r\n    width:100%;\r\n    padding: 25px;\r\n    border: 1px solid #f1f1f1;\r\n    background:#e6f5ff98;\r\n    box-shadow: 0 4px 17px rgba(5, 10, 90, 0.35);\r\n    opacity: 0.9;\r\n}\r\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    margin-left: 5%;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    border-radius: 10px;\r\n}\r\ninput[type=submit][_ngcontent-%COMP%] {\r\n    background-color: #5775fc;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    margin-left: 5%;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 90%;\r\n}\r\ninput[type=submit][_ngcontent-%COMP%]:hover {\r\n    background-color: #e6f5ff;\r\n    color: #4da6ff;\r\n    border: 1px solid #cce6ff;\r\n}\r\nh1[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{\r\n    margin-left: 25%;\r\n}\r\n.lien[_ngcontent-%COMP%]{\r\n    float:right;\r\n    background-color: #7ca7da;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 3px;\r\n    width: 90%;\r\n    height: 25px;\r\n    margin: 2%;\r\n    margin-bottom: 2%;\r\n    margin-right: 5%;\r\n    text-align: center;\r\n    \r\n    cursor: pointer;\r\n        }\r\n#img1[_ngcontent-%COMP%]{\r\n    width:8%;\r\n    float: left;\r\n    margin-left: 35%;\r\n}\r\n#img2[_ngcontent-%COMP%]{\r\n    width:6%;\r\n    float: left;\r\n    margin-left: 13%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLDRDQUE0QztJQUM1QyxZQUFZO0FBQ2hCO0FBR0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUVBQXFFO0lBQ3JFLGVBQWU7UUFDWDtBQUVSO0lBQ0ksUUFBUTtJQUNSLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFFBQVE7SUFDUixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jY2FkcmV7XHJcbiAgICB3aWR0aDoyOCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbn1cclxuZm9ybSB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBiYWNrZ3JvdW5kOiNlNmY1ZmY5ODtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSg1LCAxMCwgOTAsIDAuMzUpO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU3NzVmYztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmNWZmO1xyXG4gICAgY29sb3I6ICM0ZGE2ZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NlNmZmO1xyXG59XHJcbmgxLGg2e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxufVxyXG4ubGllbntcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdjYTdkYTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLyogYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDUsIDEwLCA5MCwgMC4zNSk7aHNsKDIxMCwgMTAwJSwgNDAlKSAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiNpbWcxe1xyXG4gICAgd2lkdGg6OCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbn1cclxuI2ltZzJ7XHJcbiAgICB3aWR0aDo2JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzJTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Project\usthbStage\front-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map