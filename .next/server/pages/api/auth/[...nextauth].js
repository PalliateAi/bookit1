/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./config/dbConnect.js":
/*!*****************************!*\
  !*** ./config/dbConnect.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst dbConnect = () => {\n  if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) >= 1) {\n    return;\n  }\n\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb://localhost:27017/bnb\", {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useFindAndModify: false,\n    useCreateIndex: true\n  }).then(con => console.log(\"Connected to local db\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dbConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibmItbWVybi8uL2NvbmZpZy9kYkNvbm5lY3QuanM/ZTI1MSJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJtb25nb29zZSIsInByb2Nlc3MiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlQ3JlYXRlSW5kZXgiLCJ0aGVuIiwiY29uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDdEIsTUFBSUMsdUVBQUEsSUFBa0MsQ0FBdEMsRUFBeUM7QUFDdkM7QUFDRDs7QUFFREEseURBQUEsQ0FBaUJDLCtCQUFqQixFQUEyQztBQUN2Q0MsbUJBQWUsRUFBRSxJQURzQjtBQUV2Q0Msc0JBQWtCLEVBQUUsSUFGbUI7QUFHdkNDLG9CQUFnQixFQUFFLEtBSHFCO0FBSXZDQyxrQkFBYyxFQUFFO0FBSnVCLEdBQTNDLEVBS0tDLElBTEwsQ0FLVUMsR0FBRyxJQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixDQUxqQjtBQU1ELENBWEQ7O0FBYUEsK0RBQWVWLFNBQWYiLCJmaWxlIjoiLi9jb25maWcvZGJDb25uZWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBkYkNvbm5lY3QgPSAoKSA9PiB7XG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPj0gMSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5EQl9MT0NBTF9VUkksIHtcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXG4gICAgfSkudGhlbihjb24gPT4gY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gbG9jYWwgZGJcIikpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/dbConnect.js\n");

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  name: {\n    type: String,\n    required: [true, 'Please enter your name'],\n    maxLength: [50, 'Your name cannot exceed 50 characters']\n  },\n  email: {\n    type: String,\n    required: [true, 'Please enter your email'],\n    unique: true,\n    validate: [(validator__WEBPACK_IMPORTED_MODULE_1___default().isEmail), 'Please enter valid email address']\n  },\n  password: {\n    type: String,\n    required: [true, 'Please enter your password'],\n    minLength: [6, 'Your password must be longer than 6 characters'],\n    select: false\n  },\n  avatar: {\n    public_id: {\n      type: String,\n      required: true\n    },\n    url: {\n      type: String,\n      required: true\n    }\n  },\n  role: {\n    type: String,\n    default: 'user'\n  },\n  createdAt: {\n    type: Date,\n    default: Date.now\n  },\n  resetPasswordToken: String,\n  resetPasswordExpire: Date\n}); // Encrypting password before saving user\n\nuserSchema.pre('save', async function (next) {\n  if (!this.isModified('password')) {\n    next();\n  }\n\n  this.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hash(this.password, 10);\n}); // Compare user password\n\nuserSchema.methods.comparePassword = async function (enteredPassword) {\n  return await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(enteredPassword, this.password);\n}; // Generate password reset token\n\n\nuserSchema.methods.getResetPasswordToken = function () {\n  // Generate token\n  const resetToken = crypto__WEBPACK_IMPORTED_MODULE_3___default().randomBytes(20).toString('hex'); // Hash and set to resetPasswordToken field\n\n  this.resetPasswordToken = crypto__WEBPACK_IMPORTED_MODULE_3___default().createHash('sha256').update(resetToken).digest('hex'); // Set token expire time\n\n  this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;\n  return resetToken;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', userSchema));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibmItbWVybi8uL21vZGVscy91c2VyLmpzPzFmNjkiXSwibmFtZXMiOlsidXNlclNjaGVtYSIsIm1vbmdvb3NlIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsImVtYWlsIiwidW5pcXVlIiwidmFsaWRhdGUiLCJ2YWxpZGF0b3IiLCJwYXNzd29yZCIsIm1pbkxlbmd0aCIsInNlbGVjdCIsImF2YXRhciIsInB1YmxpY19pZCIsInVybCIsInJvbGUiLCJkZWZhdWx0IiwiY3JlYXRlZEF0IiwiRGF0ZSIsIm5vdyIsInJlc2V0UGFzc3dvcmRUb2tlbiIsInJlc2V0UGFzc3dvcmRFeHBpcmUiLCJwcmUiLCJuZXh0IiwiaXNNb2RpZmllZCIsImJjcnlwdCIsIm1ldGhvZHMiLCJjb21wYXJlUGFzc3dvcmQiLCJlbnRlcmVkUGFzc3dvcmQiLCJnZXRSZXNldFBhc3N3b3JkVG9rZW4iLCJyZXNldFRva2VuIiwiY3J5cHRvIiwidG9TdHJpbmciLCJ1cGRhdGUiLCJkaWdlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsVUFBVSxHQUFHLElBQUlDLHdEQUFKLENBQW9CO0FBQ25DQyxNQUFJLEVBQUU7QUFDRkMsUUFBSSxFQUFFQyxNQURKO0FBRUZDLFlBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyx3QkFBUCxDQUZSO0FBR0ZDLGFBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSyx1Q0FBTDtBQUhULEdBRDZCO0FBTW5DQyxPQUFLLEVBQUU7QUFDSEosUUFBSSxFQUFFQyxNQURIO0FBRUhDLFlBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyx5QkFBUCxDQUZQO0FBR0hHLFVBQU0sRUFBRSxJQUhMO0FBSUhDLFlBQVEsRUFBRSxDQUFDQywwREFBRCxFQUFvQixrQ0FBcEI7QUFKUCxHQU40QjtBQVluQ0MsVUFBUSxFQUFFO0FBQ05SLFFBQUksRUFBRUMsTUFEQTtBQUVOQyxZQUFRLEVBQUUsQ0FBQyxJQUFELEVBQU8sNEJBQVAsQ0FGSjtBQUdOTyxhQUFTLEVBQUUsQ0FBQyxDQUFELEVBQUksZ0RBQUosQ0FITDtBQUlOQyxVQUFNLEVBQUU7QUFKRixHQVp5QjtBQWtCbkNDLFFBQU0sRUFBRTtBQUNKQyxhQUFTLEVBQUU7QUFDUFosVUFBSSxFQUFFQyxNQURDO0FBRVBDLGNBQVEsRUFBRTtBQUZILEtBRFA7QUFLSlcsT0FBRyxFQUFFO0FBQ0RiLFVBQUksRUFBRUMsTUFETDtBQUVEQyxjQUFRLEVBQUU7QUFGVDtBQUxELEdBbEIyQjtBQTRCbkNZLE1BQUksRUFBRTtBQUNGZCxRQUFJLEVBQUVDLE1BREo7QUFFRmMsV0FBTyxFQUFFO0FBRlAsR0E1QjZCO0FBZ0NuQ0MsV0FBUyxFQUFFO0FBQ1BoQixRQUFJLEVBQUVpQixJQURDO0FBRVBGLFdBQU8sRUFBRUUsSUFBSSxDQUFDQztBQUZQLEdBaEN3QjtBQW9DbkNDLG9CQUFrQixFQUFFbEIsTUFwQ2U7QUFxQ25DbUIscUJBQW1CLEVBQUVIO0FBckNjLENBQXBCLENBQW5CLEMsQ0F3Q0E7O0FBQ0FwQixVQUFVLENBQUN3QixHQUFYLENBQWUsTUFBZixFQUF1QixnQkFBZ0JDLElBQWhCLEVBQXNCO0FBQ3pDLE1BQUksQ0FBQyxLQUFLQyxVQUFMLENBQWdCLFVBQWhCLENBQUwsRUFBa0M7QUFDOUJELFFBQUk7QUFDUDs7QUFFRCxPQUFLZCxRQUFMLEdBQWdCLE1BQU1nQixvREFBQSxDQUFZLEtBQUtoQixRQUFqQixFQUEyQixFQUEzQixDQUF0QjtBQUNILENBTkQsRSxDQVFBOztBQUNBWCxVQUFVLENBQUM0QixPQUFYLENBQW1CQyxlQUFuQixHQUFxQyxnQkFBZ0JDLGVBQWhCLEVBQWlDO0FBQ2xFLFNBQU8sTUFBTUgsdURBQUEsQ0FBZUcsZUFBZixFQUFnQyxLQUFLbkIsUUFBckMsQ0FBYjtBQUNILENBRkQsQyxDQUlBOzs7QUFDQVgsVUFBVSxDQUFDNEIsT0FBWCxDQUFtQkcscUJBQW5CLEdBQTJDLFlBQVk7QUFFbkQ7QUFDQSxRQUFNQyxVQUFVLEdBQUdDLHlEQUFBLENBQW1CLEVBQW5CLEVBQXVCQyxRQUF2QixDQUFnQyxLQUFoQyxDQUFuQixDQUhtRCxDQUtuRDs7QUFDQSxPQUFLWixrQkFBTCxHQUEwQlcsd0RBQUEsQ0FBa0IsUUFBbEIsRUFBNEJFLE1BQTVCLENBQW1DSCxVQUFuQyxFQUErQ0ksTUFBL0MsQ0FBc0QsS0FBdEQsQ0FBMUIsQ0FObUQsQ0FRbkQ7O0FBQ0EsT0FBS2IsbUJBQUwsR0FBMkJILElBQUksQ0FBQ0MsR0FBTCxLQUFhLEtBQUssRUFBTCxHQUFVLElBQWxEO0FBRUEsU0FBT1csVUFBUDtBQUVILENBYkQ7O0FBZUEsK0RBQWUvQiw2REFBQSxJQUF3QkEscURBQUEsQ0FBZSxNQUFmLEVBQXVCRCxVQUF2QixDQUF2QyIsImZpbGUiOiIuL21vZGVscy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuaW1wb3J0IHZhbGlkYXRvciBmcm9tICd2YWxpZGF0b3InXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJ1xuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nXG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGxlYXNlIGVudGVyIHlvdXIgbmFtZSddLFxuICAgICAgICBtYXhMZW5ndGg6IFs1MCwgJ1lvdXIgbmFtZSBjYW5ub3QgZXhjZWVkIDUwIGNoYXJhY3RlcnMnXVxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsICdQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCddLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHZhbGlkYXRlOiBbdmFsaWRhdG9yLmlzRW1haWwsICdQbGVhc2UgZW50ZXIgdmFsaWQgZW1haWwgYWRkcmVzcyddXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1BsZWFzZSBlbnRlciB5b3VyIHBhc3N3b3JkJ10sXG4gICAgICAgIG1pbkxlbmd0aDogWzYsICdZb3VyIHBhc3N3b3JkIG11c3QgYmUgbG9uZ2VyIHRoYW4gNiBjaGFyYWN0ZXJzJ10sXG4gICAgICAgIHNlbGVjdDogZmFsc2VcbiAgICB9LFxuICAgIGF2YXRhcjoge1xuICAgICAgICBwdWJsaWNfaWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHVybDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcm9sZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICd1c2VyJ1xuICAgIH0sXG4gICAgY3JlYXRlZEF0OiB7XG4gICAgICAgIHR5cGU6IERhdGUsXG4gICAgICAgIGRlZmF1bHQ6IERhdGUubm93XG4gICAgfSxcbiAgICByZXNldFBhc3N3b3JkVG9rZW46IFN0cmluZyxcbiAgICByZXNldFBhc3N3b3JkRXhwaXJlOiBEYXRlXG59KVxuXG4vLyBFbmNyeXB0aW5nIHBhc3N3b3JkIGJlZm9yZSBzYXZpbmcgdXNlclxudXNlclNjaGVtYS5wcmUoJ3NhdmUnLCBhc3luYyBmdW5jdGlvbiAobmV4dCkge1xuICAgIGlmICghdGhpcy5pc01vZGlmaWVkKCdwYXNzd29yZCcpKSB7XG4gICAgICAgIG5leHQoKVxuICAgIH1cblxuICAgIHRoaXMucGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaCh0aGlzLnBhc3N3b3JkLCAxMClcbn0pXG5cbi8vIENvbXBhcmUgdXNlciBwYXNzd29yZFxudXNlclNjaGVtYS5tZXRob2RzLmNvbXBhcmVQYXNzd29yZCA9IGFzeW5jIGZ1bmN0aW9uIChlbnRlcmVkUGFzc3dvcmQpIHtcbiAgICByZXR1cm4gYXdhaXQgYmNyeXB0LmNvbXBhcmUoZW50ZXJlZFBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkKVxufVxuXG4vLyBHZW5lcmF0ZSBwYXNzd29yZCByZXNldCB0b2tlblxudXNlclNjaGVtYS5tZXRob2RzLmdldFJlc2V0UGFzc3dvcmRUb2tlbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIEdlbmVyYXRlIHRva2VuXG4gICAgY29uc3QgcmVzZXRUb2tlbiA9IGNyeXB0by5yYW5kb21CeXRlcygyMCkudG9TdHJpbmcoJ2hleCcpXG5cbiAgICAvLyBIYXNoIGFuZCBzZXQgdG8gcmVzZXRQYXNzd29yZFRva2VuIGZpZWxkXG4gICAgdGhpcy5yZXNldFBhc3N3b3JkVG9rZW4gPSBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKHJlc2V0VG9rZW4pLmRpZ2VzdCgnaGV4Jyk7XG5cbiAgICAvLyBTZXQgdG9rZW4gZXhwaXJlIHRpbWVcbiAgICB0aGlzLnJlc2V0UGFzc3dvcmRFeHBpcmUgPSBEYXRlLm5vdygpICsgMzAgKiA2MCAqIDEwMDBcblxuICAgIHJldHVybiByZXNldFRva2VuO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgdXNlclNjaGVtYSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/user.js\n");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/user */ \"./models/user.js\");\n/* harmony import */ var _config_dbConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/dbConnect */ \"./config/dbConnect.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  session: {\n    jwt: true\n  },\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Credentials({\n    async authorize(credentials) {\n      (0,_config_dbConnect__WEBPACK_IMPORTED_MODULE_3__.default)();\n      const {\n        email,\n        password\n      } = credentials; // Check if email and password is entered\n\n      if (!email || !password) {\n        throw new Error('Please enter email or password');\n      } // Find user in the database\n\n\n      const user = await _models_user__WEBPACK_IMPORTED_MODULE_2__.default.findOne({\n        email\n      }).select('+password');\n\n      if (!user) {\n        throw new Error('Invalid Email or Password');\n      } // Check if password is correct or not\n\n\n      const isPasswordMatched = await user.comparePassword(password);\n\n      if (!isPasswordMatched) {\n        throw new Error('Invalid Email or Password');\n      }\n\n      return Promise.resolve(user);\n    }\n\n  })],\n  callbacks: {\n    jwt: async (token, user) => {\n      user && (token.user = user);\n      return Promise.resolve(token);\n    },\n    session: async (session, user) => {\n      session.user = user.user;\n      return Promise.resolve(session);\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibmItbWVybi8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/OTkwOSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsInNlc3Npb24iLCJqd3QiLCJwcm92aWRlcnMiLCJQcm92aWRlcnMiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsImRiQ29ubmVjdCIsImVtYWlsIiwicGFzc3dvcmQiLCJFcnJvciIsInVzZXIiLCJVc2VyIiwic2VsZWN0IiwiaXNQYXNzd29yZE1hdGNoZWQiLCJjb21wYXJlUGFzc3dvcmQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhbGxiYWNrcyIsInRva2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSwrREFBZUEsZ0RBQVEsQ0FBQztBQUNwQkMsU0FBTyxFQUFFO0FBQ0xDLE9BQUcsRUFBRTtBQURBLEdBRFc7QUFJcEJDLFdBQVMsRUFBRSxDQUNQQyxzRUFBQSxDQUFzQjtBQUNsQixVQUFNQyxTQUFOLENBQWdCQyxXQUFoQixFQUE2QjtBQUV6QkMsZ0VBQVM7QUFFVCxZQUFNO0FBQUVDLGFBQUY7QUFBU0M7QUFBVCxVQUFzQkgsV0FBNUIsQ0FKeUIsQ0FNekI7O0FBQ0EsVUFBSSxDQUFDRSxLQUFELElBQVUsQ0FBQ0MsUUFBZixFQUF5QjtBQUNyQixjQUFNLElBQUlDLEtBQUosQ0FBVSxnQ0FBVixDQUFOO0FBQ0gsT0FUd0IsQ0FXekI7OztBQUNBLFlBQU1DLElBQUksR0FBRyxNQUFNQyx5REFBQSxDQUFhO0FBQUVKO0FBQUYsT0FBYixFQUF3QkssTUFBeEIsQ0FBK0IsV0FBL0IsQ0FBbkI7O0FBRUEsVUFBSSxDQUFDRixJQUFMLEVBQVc7QUFDUCxjQUFNLElBQUlELEtBQUosQ0FBVSwyQkFBVixDQUFOO0FBQ0gsT0FoQndCLENBa0J6Qjs7O0FBQ0EsWUFBTUksaUJBQWlCLEdBQUcsTUFBTUgsSUFBSSxDQUFDSSxlQUFMLENBQXFCTixRQUFyQixDQUFoQzs7QUFFQSxVQUFJLENBQUNLLGlCQUFMLEVBQXdCO0FBQ3BCLGNBQU0sSUFBSUosS0FBSixDQUFVLDJCQUFWLENBQU47QUFDSDs7QUFFRCxhQUFPTSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JOLElBQWhCLENBQVA7QUFFSDs7QUE1QmlCLEdBQXRCLENBRE8sQ0FKUztBQW9DcEJPLFdBQVMsRUFBRTtBQUNQaEIsT0FBRyxFQUFFLE9BQU9pQixLQUFQLEVBQWNSLElBQWQsS0FBdUI7QUFFeEJBLFVBQUksS0FBS1EsS0FBSyxDQUFDUixJQUFOLEdBQWFBLElBQWxCLENBQUo7QUFDQSxhQUFPSyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JFLEtBQWhCLENBQVA7QUFDSCxLQUxNO0FBTVBsQixXQUFPLEVBQUUsT0FBT0EsT0FBUCxFQUFnQlUsSUFBaEIsS0FBeUI7QUFFOUJWLGFBQU8sQ0FBQ1UsSUFBUixHQUFlQSxJQUFJLENBQUNBLElBQXBCO0FBQ0EsYUFBT0ssT0FBTyxDQUFDQyxPQUFSLENBQWdCaEIsT0FBaEIsQ0FBUDtBQUNIO0FBVk07QUFwQ1MsQ0FBRCxDQUF2QiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBQcm92aWRlcnMgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycydcblxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3VzZXInXG5pbXBvcnQgZGJDb25uZWN0IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9kYkNvbm5lY3QnXG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgICBzZXNzaW9uOiB7XG4gICAgICAgIGp3dDogdHJ1ZVxuICAgIH0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFByb3ZpZGVycy5DcmVkZW50aWFscyh7XG4gICAgICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcblxuICAgICAgICAgICAgICAgIGRiQ29ubmVjdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGNyZWRlbnRpYWxzO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZW1haWwgYW5kIHBhc3N3b3JkIGlzIGVudGVyZWRcbiAgICAgICAgICAgICAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBlbnRlciBlbWFpbCBvciBwYXNzd29yZCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEZpbmQgdXNlciBpbiB0aGUgZGF0YWJhc2VcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSkuc2VsZWN0KCcrcGFzc3dvcmQnKVxuXG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBFbWFpbCBvciBQYXNzd29yZCcpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgcGFzc3dvcmQgaXMgY29ycmVjdCBvciBub3RcbiAgICAgICAgICAgICAgICBjb25zdCBpc1Bhc3N3b3JkTWF0Y2hlZCA9IGF3YWl0IHVzZXIuY29tcGFyZVBhc3N3b3JkKHBhc3N3b3JkKTtcblxuICAgICAgICAgICAgICAgIGlmICghaXNQYXNzd29yZE1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEVtYWlsIG9yIFBhc3N3b3JkJylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVzZXIpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICBdLFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgICBqd3Q6IGFzeW5jICh0b2tlbiwgdXNlcikgPT4ge1xuXG4gICAgICAgICAgICB1c2VyICYmICh0b2tlbi51c2VyID0gdXNlcilcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodG9rZW4pXG4gICAgICAgIH0sXG4gICAgICAgIHNlc3Npb246IGFzeW5jIChzZXNzaW9uLCB1c2VyKSA9PiB7XG5cbiAgICAgICAgICAgIHNlc3Npb24udXNlciA9IHVzZXIudXNlclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZXNzaW9uKVxuICAgICAgICB9XG4gICAgfVxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("bcryptjs");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("mongoose");;

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth");;

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/providers");;

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("validator");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();