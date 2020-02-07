(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid posicao-rel\" >\n  <div class =\"row posicao-rel\" >\n\n    <div id = \"menu-nav-lateral\" class=\"col-sm-2\">\n      <app-menu-nav-lateral></app-menu-nav-lateral>\n    </div>\n\n    <div class=\"col-sm-10\" >\n      <router-outlet></router-outlet>\n    </div>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-nav-lateral/menu-nav-lateral.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-nav-lateral/menu-nav-lateral.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"menuLateral\">\n  <p class=\"menuLateralTitulo animated fadeIn\">Projeto CMV</p>\n\n  <div style=\"display: flex; justify-content: center;\">\n\n    <mat-divider style=\"width: 15%;\"></mat-divider>\n\n  </div>\n\n\n  <ul class=\"list-unstyled\">\n\n    <li routerLinkActive=\"nav-item-active\" [routerLinkActiveOptions]= \"{exact: true}\" class=\"nav-item\">\n      <a class =\"nav-link\" routerLink = \"\"> Home </a>\n    </li>\n\n    <li routerLinkActive=\"nav-item-active\" class=\"nav-item\">\n      <a class =\"nav-link\" routerLink = \"/pagina-configuracao\"> Configurações</a>\n    </li>\n\n    <li routerLinkActive=\"nav-item-active\" class=\"nav-item\">\n      <a class =\"nav-link\" routerLink = \"/historico\"> Histórico</a>\n    </li>\n\n  </ul>\n\n  <footer>Hugo Neto © 2020 </footer>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historico/historico.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historico/historico.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"animated fadeIn\">Histórico</h1>\n\n<div style=\"display: flex; justify-content: center;\">\n\n  <mat-divider style=\"width: 10%;\"></mat-divider>\n\n</div>\n\n<div class=\"row animated fadeInUp\">\n  <div class=\"col-md-6\">\n    <div class=\" mat-elevation-z8\">\n\n      <mat-table #tabelaDados  [dataSource]=\"dataSource2\">\n        <!-- ID Column -->\n        <ng-container matColumnDef=\"comodo\">\n          <mat-header-cell class=\"centralizar\" *matHeaderCellDef > Cômodo </mat-header-cell>\n          <mat-cell class=\"centralizar\" *matCellDef=\"let row\"> {{row.comodo}} </mat-cell>\n        </ng-container>\n\n        <!-- Progress Column -->\n        <ng-container matColumnDef=\"tempo\">\n          <mat-header-cell class=\"centralizar\" *matHeaderCellDef > Tempo (Min) </mat-header-cell>\n          <mat-cell class=\"centralizar\" *matCellDef=\"let row\" > {{row.tempo}} </mat-cell>\n        </ng-container>\n\n        <!-- Progress Column -->\n        <ng-container matColumnDef=\"data\">\n          <mat-header-cell class=\"centralizar\" *matHeaderCellDef > Data </mat-header-cell>\n          <mat-cell class=\"centralizar\" *matCellDef=\"let row\" > {{row.data}} </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n      </mat-table>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"animated fadeIn\">Localização</h1>\n\n<div style=\"display: flex; justify-content: center;\">\n\n  <mat-divider style=\"width: 10%;\"></mat-divider>\n\n</div>\n\n<div class=\"row animated fadeInUp\">\n  <div id=\"animacaoMatCard\"  class=\"col-md-8 \">\n    <mat-card class=\"localizacao-card\">\n        <img mat-card-image [src]='imagem'>\n          <mat-card-content>\n\n            <p>\n              A parte colorida demonstra exatamente onde o idoso está.\n            </p>\n\n          </mat-card-content>\n\n          <mat-card-actions>\n\n            <!-- <button mat-raised-button (click)=\"trocaImagem()\">Troca</button> -->\n            <button mat-raised-button (click)=\"trocaImagem()\">Troca</button>\n\n          </mat-card-actions>\n    </mat-card>\n  </div>\n\n  <div class=\"col-md-4\">\n    <mat-card>\n      <mat-card-title> Informações </mat-card-title>\n\n      <div id=\"animacaoIcone\">\n\n        Local atual: {{local}} - <i [class]='icone'></i>\n\n      </div><br/>\n\n      Tempo no local: {{tempoLocal}} min\n\n    </mat-card>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pagina-configuracao/pagina-configuracao.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pagina-configuracao/pagina-configuracao.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"animated fadeIn\">Configurações</h1>\n\n<div style=\"display: flex; justify-content: center;\">\n\n  <mat-divider style=\"width: 10%;\"></mat-divider>\n\n</div>\n\n<div class=\"row animated fadeInUp\">\n  <div class=\"col-md-6 box\">\n    <mat-card  class=\"mat-elevation-z8 card\">\n      <mat-card-title> Horários e Restrições </mat-card-title>\n\n        <mat-form-field style=\"text-decoration-color:white; \" >\n          <mat-select class=\"comodoSelect\" #comodo placeholder=\"Cômodo\">\n            <mat-option [hidden]=\"hiddenBanheiro\" value=\"banheiro\">Banheiro</mat-option>\n            <mat-option [hidden]=\"hiddenCozinha\"  value=\"cozinha\">Cozinha</mat-option>\n            <mat-option [hidden]=\"hiddenSala\"     value=\"sala\">Sala</mat-option>\n            <mat-option [hidden]=\"hiddenQuarto\"   value=\"quarto\">Quarto</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field >\n          <mat-label>Tempo Estimado</mat-label>\n          <input #tempo matInput>\n          <span matSuffix>minutos</span>\n        </mat-form-field>\n\n        <div class=\"row\" style=\"margin:0 auto; display: block;\">\n          <button mat-raised-button  (click) = \"addAlerta(comodo.value, tempo.value); comodo.value=''; tempo.value=''\" color=\"primary\">Adicionar</button>\n        </div>\n\n    </mat-card>\n  </div>\n\n  <div class=\"col-md-6\">\n    <div class=\" mat-elevation-z8\">\n\n      <mat-table #tabelaDados  class = \"card\" [dataSource]=\"dataSource\">\n        <!-- ID Column -->\n        <ng-container matColumnDef=\"comodo\">\n          <mat-header-cell class=\"centralizar\" *matHeaderCellDef > Cômodo </mat-header-cell>\n          <mat-cell class=\"centralizar\" *matCellDef=\"let row\"> {{row.comodo}} </mat-cell>\n        </ng-container>\n\n        <!-- Progress Column -->\n        <ng-container matColumnDef=\"tempo\">\n          <mat-header-cell class=\"centralizar\" *matHeaderCellDef > Tempo (Min) </mat-header-cell>\n          <mat-cell class=\"centralizar\" *matCellDef=\"let row\" > {{row.tempo}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"acoes\">\n          <mat-header-cell class=\"centralizar\" *matHeaderCellDef > Ações </mat-header-cell>\n          <mat-cell class=\"centralizar\"  *matCellDef=\"let row\">\n            <a (click) = \"deletarRestricao(row)\"><mat-icon style=\"color:#C73F3F;\" >delete_outline</mat-icon> </a>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n      </mat-table>\n\n      <div class=\"divBtnSave\">\n\n        <button  (click) = \"salvarRestricoes()\" class=\"iconeSave btn btn-outline-dark\">\n          Salvar <a  class=\"fas fa-save\"></a>\n        </button>\n\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_historico_historico_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/historico/historico.component */ "./src/app/pages/historico/historico.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_pagina_configuracao_pagina_configuracao_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pagina-configuracao/pagina-configuracao.component */ "./src/app/pages/pagina-configuracao/pagina-configuracao.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'pagina-configuracao', component: _pages_pagina_configuracao_pagina_configuracao_component__WEBPACK_IMPORTED_MODULE_3__["PaginaConfiguracaoComponent"] },
    { path: 'historico', component: _pages_historico_historico_component__WEBPACK_IMPORTED_MODULE_1__["HistoricoComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#menu-nav-lateral {\n  border-right: solid 1px black;\n  background-color: #E91E63;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWdvbmV0by9EZXNrdG9wL1JlcG9zaXRvcmlvcy9jbXYtZnJvbnRlbmQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVudS1uYXYtbGF0ZXJhbHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOTFFNjM7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiIsIiNtZW51LW5hdi1sYXRlcmFsIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOTFFNjM7XG4gIHBhZGRpbmc6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Frontline';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _cmv_frontend_src_app_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../cmv-frontend/src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _menu_nav_lateral_menu_nav_lateral_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-nav-lateral/menu-nav-lateral.component */ "./src/app/menu-nav-lateral/menu-nav-lateral.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_pagina_configuracao_pagina_configuracao_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/pagina-configuracao/pagina-configuracao.component */ "./src/app/pages/pagina-configuracao/pagina-configuracao.component.ts");
/* harmony import */ var _pages_historico_historico_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/historico/historico.component */ "./src/app/pages/historico/historico.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _menu_nav_lateral_menu_nav_lateral_component__WEBPACK_IMPORTED_MODULE_7__["MenuNavLateralComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _pages_pagina_configuracao_pagina_configuracao_component__WEBPACK_IMPORTED_MODULE_9__["PaginaConfiguracaoComponent"],
            _pages_historico_historico_component__WEBPACK_IMPORTED_MODULE_10__["HistoricoComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _cmv_frontend_src_app_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/menu-nav-lateral/menu-nav-lateral.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/menu-nav-lateral/menu-nav-lateral.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  color: white;\n  font-size: 14px;\n}\n\nul {\n  padding-top: 18px;\n}\n\n.nav-item:hover, .nav-item-active {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.menuLateralTitulo {\n  color: white;\n}\n\n.menuLateral {\n  overflow: hidden;\n  color: white;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n  padding-bottom: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 12px;\n}\n\n.mat-divider {\n  border-top-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWdvbmV0by9EZXNrdG9wL1JlcG9zaXRvcmlvcy9jbXYtZnJvbnRlbmQvc3JjL2FwcC9tZW51LW5hdi1sYXRlcmFsL21lbnUtbmF2LWxhdGVyYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lbnUtbmF2LWxhdGVyYWwvbWVudS1uYXYtbGF0ZXJhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURHQTtFQUNDLFlBQUE7QUNBRDs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBRUEsV0FBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtBQ0RGOztBRElBO0VBQ0UsdUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL21lbnUtbmF2LWxhdGVyYWwvbWVudS1uYXYtbGF0ZXJhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG51bHtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG59XG5cbi5uYXYtaXRlbTpob3ZlciwgLm5hdi1pdGVtLWFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xuXG59XG5cbi5tZW51TGF0ZXJhbFRpdHVsb3tcbiBjb2xvcjogd2hpdGU7XG59XG5cbi5tZW51TGF0ZXJhbHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6d2hpdGU7XG59XG5cbmZvb3RlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206MDtcbiAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDowO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1hdC1kaXZpZGVye1xuICBib3JkZXItdG9wLWNvbG9yOiB3aGl0ZTtcbn1cbiIsImEge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxudWwge1xuICBwYWRkaW5nLXRvcDogMThweDtcbn1cblxuLm5hdi1pdGVtOmhvdmVyLCAubmF2LWl0ZW0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubWVudUxhdGVyYWxUaXR1bG8ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tZW51TGF0ZXJhbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1hdC1kaXZpZGVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/menu-nav-lateral/menu-nav-lateral.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/menu-nav-lateral/menu-nav-lateral.component.ts ***!
  \****************************************************************/
/*! exports provided: MenuNavLateralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuNavLateralComponent", function() { return MenuNavLateralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuNavLateralComponent = class MenuNavLateralComponent {
    constructor() { }
    ngOnInit() {
    }
};
MenuNavLateralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-nav-lateral',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-nav-lateral.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-nav-lateral/menu-nav-lateral.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-nav-lateral.component.scss */ "./src/app/menu-nav-lateral/menu-nav-lateral.component.scss")).default]
    })
], MenuNavLateralComponent);



/***/ }),

/***/ "./src/app/pages/historico/historico.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/historico/historico.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  padding-bottom: 10px;\n  padding-top: 20px;\n  color: white;\n}\n\n.mat-divider {\n  border-top-color: #E91E63;\n}\n\n.centralizar, .row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nmat-table {\n  width: 100%;\n  margin-top: 5%;\n  background-color: #4D4F5A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWdvbmV0by9EZXNrdG9wL1JlcG9zaXRvcmlvcy9jbXYtZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy9oaXN0b3JpY28vaGlzdG9yaWNvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9oaXN0b3JpY28vaGlzdG9yaWNvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oaXN0b3JpY28vaGlzdG9yaWNvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy10b3A6MjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWRpdmlkZXJ7XG4gIGJvcmRlci10b3AtY29sb3I6I0U5MUU2Mztcbn1cblxuLmNlbnRyYWxpemFyLCAucm93e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLy8gQWxpbmhhbWVudG8gaG9yaXpvbnRhbFxufVxuXG5tYXQtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDo1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRENEY1QTtcbn1cbiIsImgxIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtZGl2aWRlciB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNFOTFFNjM7XG59XG5cbi5jZW50cmFsaXphciwgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5tYXQtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RDRGNUE7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/historico/historico.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/historico/historico.component.ts ***!
  \********************************************************/
/*! exports provided: HistoricoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricoComponent", function() { return HistoricoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let HistoricoComponent = class HistoricoComponent {
    constructor() {
        this.displayedColumns = ['comodo', 'tempo', 'data'];
        this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ngOnInit() {
    }
};
HistoricoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-historico',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./historico.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historico/historico.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./historico.component.scss */ "./src/app/pages/historico/historico.component.scss")).default]
    })
], HistoricoComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".localizacao-card {\n  max-width: 100%;\n  margin-left: 10%;\n}\n\n.row {\n  margin-top: 2%;\n}\n\n@media (max-width: 767px) {\n  .localizacao-card {\n    margin-left: 0;\n  }\n}\n\nh1 {\n  padding-bottom: 10px;\n  padding-top: 20px;\n  color: white;\n}\n\nimg {\n  height: 400px;\n}\n\n.mat-divider {\n  border-top-color: #E91E63;\n}\n\n.conteudo {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWdvbmV0by9EZXNrdG9wL1JlcG9zaXRvcmlvcy9jbXYtZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBRUU7SUFDRSxjQUFBO0VDQUY7QUFDRjs7QURJQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0FDRkY7O0FES0E7RUFDRSx5QkFBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2NhbGl6YWNhby1jYXJkIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4ucm93e1xuICBtYXJnaW4tdG9wOjIlO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KXtcblxuICAubG9jYWxpemFjYW8tY2FyZHtcbiAgICBtYXJnaW4tbGVmdDogMDtcblxuICB9XG59XG5cbmgxIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctdG9wOjIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW1ne1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4ubWF0LWRpdmlkZXJ7XG4gIGJvcmRlci10b3AtY29sb3I6I0U5MUU2Mztcbn1cblxuLmNvbnRldWRve1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIiwiLmxvY2FsaXphY2FvLWNhcmQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5yb3cge1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5sb2NhbGl6YWNhby1jYXJkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuaDEge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLm1hdC1kaXZpZGVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI0U5MUU2Mztcbn1cblxuLmNvbnRldWRvIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_geral_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/geral.service */ "./src/app/services/geral.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




let HomeComponent = 
// Summary: Componente da tela de Home
class HomeComponent {
    constructor(serviceGeral) {
        this.serviceGeral = serviceGeral;
        this.tempoLocal = 10;
        this.imagem = 'https://media.gazetadopovo.com.br/2019/02/e27d049663d84c627d7f228524c01e16-gpMedium.jpg';
    }
    trocaImagem() {
        const imagemAtual = 'https://media.gazetadopovo.com.br/2019/02/e27d049663d84c627d7f228524c01e16-gpMedium.jpg';
        if (this.imagem === imagemAtual) {
            this.icone = 'fas fa-couch';
            this.local = 'Sala';
            this.imagem = 'https://revistacarro.com.br/wp-content/uploads/2019/12/Mercedes-Benz-GLA_5.jpg';
        }
        else {
            this.icone = 'fas fa-bed';
            this.local = 'Quarto';
            this.imagem = 'https://media.gazetadopovo.com.br/2019/02/e27d049663d84c627d7f228524c01e16-gpMedium.jpg';
        }
        jquery__WEBPACK_IMPORTED_MODULE_3__('#animacaoMatCard').addClass('animated fadeIn');
        jquery__WEBPACK_IMPORTED_MODULE_3__('#animacaoIcone').addClass('animated fadeIn');
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#animacaoIcone').removeClass('animated fadeIn');
            jquery__WEBPACK_IMPORTED_MODULE_3__('#animacaoMatCard').removeClass('animated fadeIn');
        }, 1000);
    }
    ngOnInit() {
        // Summary: Intervalo de 10 segundos que verifica se há atualização de posição
        setInterval(() => {
            this.trocaImagem();
        }, 10000);
        this.local = 'Banheiro';
        this.icone = 'fas fa-toilet-paper';
        this.localizacaoInicial();
    }
    // Summary: Load da localização inicial
    localizacaoInicial() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.serviceGeral.getEndpoint('getLocalizacao').subscribe((data) => {
                console.log('data', data);
            });
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_geral_service__WEBPACK_IMPORTED_MODULE_1__["GeralService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        providers: [_services_geral_service__WEBPACK_IMPORTED_MODULE_1__["GeralService"]],
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
    })
    // Summary: Componente da tela de Home
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/pagina-configuracao/pagina-configuracao.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/pagina-configuracao/pagina-configuracao.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\n  width: 75%;\n}\n\nmat-table {\n  width: 100%;\n  margin-top: 5%;\n  background-color: #4D4F5A;\n}\n\nmat-card {\n  margin-top: 5%;\n  background-color: #4D4F5A;\n}\n\nh1 {\n  padding-bottom: 10px;\n  padding-top: 20px;\n  color: white;\n}\n\na {\n  cursor: pointer;\n}\n\n.centralizar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.mat-divider {\n  border-top-color: #E91E63;\n}\n\n.iconeSave {\n  color: #E91E63;\n  font-size: 12px;\n  margin-top: 6px;\n  margin-right: 6px;\n  margin-bottom: 6px;\n  font-weight: 700;\n}\n\n.divBtnSave {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWdvbmV0by9EZXNrdG9wL1JlcG9zaXRvcmlvcy9jbXYtZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy9wYWdpbmEtY29uZmlndXJhY2FvL3BhZ2luYS1jb25maWd1cmFjYW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BhZ2luYS1jb25maWd1cmFjYW8vcGFnaW5hLWNvbmZpZ3VyYWNhby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREdBO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2luYS1jb25maWd1cmFjYW8vcGFnaW5hLWNvbmZpZ3VyYWNhby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxke1xuICB3aWR0aDogNzUlO1xufVxuXG5tYXQtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDo1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRENEY1QTtcbn1cblxubWF0LWNhcmR7XG4gIG1hcmdpbi10b3A6NSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RDRGNUE7XG5cbn1cblxuaDEge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy10b3A6MjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5he1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jZW50cmFsaXphcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8vIEFsaW5oYW1lbnRvIGhvcml6b250YWxcbn1cblxuLm1hdC1kaXZpZGVye1xuICBib3JkZXItdG9wLWNvbG9yOiNFOTFFNjM7XG59XG5cbi5pY29uZVNhdmV7XG4gIGNvbG9yOiAjRTkxRTYzO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmRpdkJ0blNhdmV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbm1hdC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRENEY1QTtcbn1cblxubWF0LWNhcmQge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRENEY1QTtcbn1cblxuaDEge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNlbnRyYWxpemFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYXQtZGl2aWRlciB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNFOTFFNjM7XG59XG5cbi5pY29uZVNhdmUge1xuICBjb2xvcjogI0U5MUU2MztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5kaXZCdG5TYXZlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/pagina-configuracao/pagina-configuracao.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/pagina-configuracao/pagina-configuracao.component.ts ***!
  \****************************************************************************/
/*! exports provided: PaginaConfiguracaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaConfiguracaoComponent", function() { return PaginaConfiguracaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_geral_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/geral.service */ "./src/app/services/geral.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let PaginaConfiguracaoComponent = class PaginaConfiguracaoComponent {
    constructor(service) {
        this.service = service;
        this.displayedColumns = ['comodo', 'tempo', 'acoes'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.listaRestricoesAdd = [];
    }
    ngOnInit() {
        this.loadRestricoes();
    }
    loadRestricoes() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.service.getEndpoint('getRestricoes').subscribe((data) => {
                console.log('data', data);
            });
        });
    }
    // add na tabela antes de salvar
    addAlerta(com, tem) {
        if (!tem) {
            alert('É necessário preencher o tempo estimado!');
        }
        else {
            this.dataSource.data.push({ comodo: com, tempo: tem });
            this.dataSource.filter = '';
            this.listaRestricoesAdd.push({ comodo: com, tempo: tem });
            switch (com) {
                case 'banheiro':
                    this.hiddenBanheiro = 'hidden';
                    break;
                case 'cozinha':
                    this.hiddenCozinha = 'hidden';
                    break;
                case 'quarto':
                    this.hiddenQuarto = 'hidden';
                    break;
                case 'sala':
                    this.hiddenSala = 'hidden';
                    break;
            }
        }
    }
    salvarRestricoes() {
        if (this.listaRestricoesAdd.length === 0) {
            alert('Nenhuma Restrição nova foi adicionada!');
        }
        else {
            alert('aqui vou salvar no banco de Dados :D');
        }
    }
    // Remove da tela e da lista de adiçao
    deletarRestricao(data) {
        this.dataSource.data.forEach((element, index) => {
            if (element.comodo === data.comodo) {
                this.dataSource.data.splice(index, 1);
                this.listaRestricoesAdd.splice(index, 1);
            }
        });
        this.dataSource.filter = '';
        switch (data.comodo) {
            case 'banheiro':
                this.hiddenBanheiro = '';
                break;
            case 'cozinha':
                this.hiddenCozinha = '';
                break;
            case 'quarto':
                this.hiddenQuarto = '';
                break;
            case 'sala':
                this.hiddenSala = '';
                break;
        }
        console.log(this.listaRestricoesAdd);
    }
    mostraRestricoes() {
        // Traz do banco todas as restrições
    }
};
PaginaConfiguracaoComponent.ctorParameters = () => [
    { type: _services_geral_service__WEBPACK_IMPORTED_MODULE_1__["GeralService"] }
];
PaginaConfiguracaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pagina-configuracao',
        providers: [_services_geral_service__WEBPACK_IMPORTED_MODULE_1__["GeralService"]],
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagina-configuracao.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pagina-configuracao/pagina-configuracao.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pagina-configuracao.component.scss */ "./src/app/pages/pagina-configuracao/pagina-configuracao.component.scss")).default]
    })
], PaginaConfiguracaoComponent);



/***/ }),

/***/ "./src/app/services/geral.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/geral.service.ts ***!
  \*******************************************/
/*! exports provided: GeralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeralService", function() { return GeralService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GeralService = class GeralService {
    // Summary: Construtor do serviço
    // Params: criação http para requisições
    constructor(http) {
        this.http = http;
        this.url = 'https://projetocmvbackend.herokuapp.com/rota'; //'http://localhost:5000/rota';
        // Summary: Chama método do backend de forma Genérica
        // Params: url Endpoint
        // return: json
        this.getEndpoint = (endpoint) => this.http.get(`${this.url}/${endpoint}`);
    }
};
GeralService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GeralService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GeralService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hugoneto/Desktop/Repositorios/cmv-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map