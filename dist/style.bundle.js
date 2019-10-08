/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./static/css/app.scss");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static/css/app.scss":
/*!*****************************!*\
  !*** ./static/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nReferenceError: document is not defined\\n    at insertStyleElement (webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?:107:15)\\n    at addStyle (webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?:219:13)\\n    at addStylesToDom (webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?:94:20)\\n    at module.exports (webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?:251:3)\\n    at eval (webpack:///./static/css/app.scss?./node_modules/style-loader/dist!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js:12:185)\\n    at Object../node_modules/style-loader/dist/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./static/css/app.scss (/Users/adityatoshniwal/projects/JSTest/node_modules/style-loader/dist/index.js!/Users/adityatoshniwal/projects/JSTest/node_modules/css-loader/dist/cjs.js!/Users/adityatoshniwal/projects/JSTest/node_modules/sass-loader/dist/cjs.js!/Users/adityatoshniwal/projects/JSTest/static/css/app.scss:120:1)\\n    at __webpack_require__ (/Users/adityatoshniwal/projects/JSTest/node_modules/style-loader/dist/index.js!/Users/adityatoshniwal/projects/JSTest/node_modules/css-loader/dist/cjs.js!/Users/adityatoshniwal/projects/JSTest/node_modules/sass-loader/dist/cjs.js!/Users/adityatoshniwal/projects/JSTest/static/css/app.scss:21:30)\\n    at /Users/adityatoshniwal/projects/JSTest/node_modules/style-loader/dist/index.js!/Users/adityatoshniwal/projects/JSTest/node_modules/css-loader/dist/cjs.js!/Users/adityatoshniwal/projects/JSTest/node_modules/sass-loader/dist/cjs.js!/Users/adityatoshniwal/projects/JSTest/static/css/app.scss:85:18\\n    at Object.<anonymous> (/Users/adityatoshniwal/projects/JSTest/node_modules/style-loader/dist/index.js!/Users/adityatoshniwal/projects/JSTest/node_modules/css-loader/dist/cjs.js!/Users/adityatoshniwal/projects/JSTest/node_modules/sass-loader/dist/cjs.js!/Users/adityatoshniwal/projects/JSTest/static/css/app.scss:88:10)\\n    at Module._compile (/Users/adityatoshniwal/projects/JSTest/node_modules/v8-compile-cache/v8-compile-cache.js:192:30)\\n    at exec (/Users/adityatoshniwal/projects/JSTest/node_modules/mini-css-extract-plugin/dist/loader.js:60:10)\\n    at childCompiler.runAsChild (/Users/adityatoshniwal/projects/JSTest/node_modules/mini-css-extract-plugin/dist/loader.js:153:14)\\n    at compile (/Users/adityatoshniwal/projects/JSTest/node_modules/webpack/lib/Compiler.js:343:11)\\n    at hooks.afterCompile.callAsync.err (/Users/adityatoshniwal/projects/JSTest/node_modules/webpack/lib/Compiler.js:681:15)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/adityatoshniwal/projects/JSTest/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:24:1)\\n    at AsyncSeriesHook.lazyCompileHook (/Users/adityatoshniwal/projects/JSTest/node_modules/tapable/lib/Hook.js:154:20)\\n    at compilation.seal.err (/Users/adityatoshniwal/projects/JSTest/node_modules/webpack/lib/Compiler.js:678:31)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/adityatoshniwal/projects/JSTest/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (/Users/adityatoshniwal/projects/JSTest/node_modules/tapable/lib/Hook.js:154:20)\\n    at hooks.optimizeAssets.callAsync.err (/Users/adityatoshniwal/projects/JSTest/node_modules/webpack/lib/Compilation.js:1423:35)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/adityatoshniwal/projects/JSTest/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (/Users/adityatoshniwal/projects/JSTest/node_modules/tapable/lib/Hook.js:154:20)\\n    at hooks.optimizeChunkAssets.callAsync.err (/Users/adityatoshniwal/projects/JSTest/node_modules/webpack/lib/Compilation.js:1414:32)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/adityatoshniwal/projects/JSTest/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (/Users/adityatoshniwal/projects/JSTest/node_modules/tapable/lib/Hook.js:154:20)\\n    at hooks.additionalAssets.callAsync.err (/Users/adityatoshniwal/projects/JSTest/node_modules/webpack/lib/Compilation.js:1409:36)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/adityatoshniwal/projects/JSTest/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (/Users/adityatoshniwal/projects/JSTest/node_modules/tapable/lib/Hook.js:154:20)\\n    at hooks.optimizeTree.callAsync.err (/Users/adityatoshniwal/projects/JSTest/node_modules/webpack/lib/Compilation.js:1405:32)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/adityatoshniwal/projects/JSTest/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\");\n\n//# sourceURL=webpack:///./static/css/app.scss?");

/***/ })

/******/ });