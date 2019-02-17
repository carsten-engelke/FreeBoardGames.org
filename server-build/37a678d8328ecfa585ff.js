exports.ids = [0];
exports.modules = {

/***/ "./src/App/Game/AlertLayer.tsx":
/*!*************************************!*\
  !*** ./src/App/Game/AlertLayer.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass AlertLayer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    const mainStyle = {\n      position: 'absolute',\n      left: 0,\n      top: 0,\n      background: 'rgba(255,255,255,.85)',\n      right: 0,\n      height: '100%',\n      zIndex: 9001,\n      display: 'block',\n      textAlign: 'center'\n    };\n    const alignStyle = {\n      transform: 'translateX(-50%) translateY(-50%)',\n      left: '50%',\n      top: '50%',\n      position: 'absolute'\n    };\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: mainStyle\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: alignStyle\n    }, this.props.children));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AlertLayer);\n\n//# sourceURL=webpack:///./src/App/Game/AlertLayer.tsx?");

/***/ }),

/***/ "./src/App/Game/FacebookIcon.tsx":
/*!***************************************!*\
  !*** ./src/App/Game/FacebookIcon.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var material_ui_SvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! material-ui/SvgIcon */ \"material-ui/SvgIcon\");\n/* harmony import */ var material_ui_SvgIcon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(material_ui_SvgIcon__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass FacebookIcon extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(material_ui_SvgIcon__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"path\", {\n      d: \"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z\"\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FacebookIcon);\n\n//# sourceURL=webpack:///./src/App/Game/FacebookIcon.tsx?");

/***/ }),

/***/ "./src/App/Game/Game.tsx":
/*!*******************************!*\
  !*** ./src/App/Game/Game.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var flamecoals_boardgame_io_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flamecoals-boardgame.io/react */ \"flamecoals-boardgame.io/react\");\n/* harmony import */ var flamecoals_boardgame_io_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flamecoals_boardgame_io_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../games */ \"./src/games/index.tsx\");\n/* harmony import */ var _GameBoardWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameBoardWrapper */ \"./src/App/Game/GameBoardWrapper.tsx\");\n/* harmony import */ var _GameModePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameModePicker */ \"./src/App/Game/GameModePicker.tsx\");\n\n\n\n\n\nclass Game extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    const gameCode = this.props.match.params.gameCode;\n    const mode = this.props.match.params.mode;\n    const matchCode = this.props.match.params.matchCode;\n    const playerID = this.props.match.params.playerID;\n    const gameDef = _games__WEBPACK_IMPORTED_MODULE_2__[\"GAMES_MAP\"][gameCode];\n    const clientConfig = {\n      game: gameDef.bgioGame,\n      board: Object(_GameBoardWrapper__WEBPACK_IMPORTED_MODULE_3__[\"gameBoardWrapper\"])({\n        gameCode,\n        mode,\n        matchCode,\n        playerID\n      }),\n      debug: false\n    };\n\n    if (gameDef.enhancer) {\n      clientConfig.enhancer = gameDef.enhancer;\n    }\n\n    if (mode === _GameModePicker__WEBPACK_IMPORTED_MODULE_4__[\"GameMode\"].OnlineFriend) {\n      clientConfig.multiplayer = true;\n    }\n\n    const App = Object(flamecoals_boardgame_io_react__WEBPACK_IMPORTED_MODULE_1__[\"Client\"])(clientConfig);\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, {\n      gameID: matchCode,\n      playerID: playerID\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/App/Game/Game.tsx?");

/***/ }),

/***/ "./src/App/Game/GameBoardWrapper.tsx":
/*!*******************************************!*\
  !*** ./src/App/Game/GameBoardWrapper.tsx ***!
  \*******************************************/
/*! exports provided: gameBoardWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameBoardWrapper\", function() { return gameBoardWrapper; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AlertLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertLayer */ \"./src/App/Game/AlertLayer.tsx\");\n/* harmony import */ var material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ \"material-ui/styles/MuiThemeProvider\");\n/* harmony import */ var material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _GameSharing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameSharing */ \"./src/App/Game/GameSharing.tsx\");\n/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../games */ \"./src/games/index.tsx\");\n\n\n\n\n\nfunction gameBoardWrapper(args) {\n  class Board extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    constructor() {\n      super(...arguments);\n      this.state = {\n        dismissedSharing: false\n      };\n\n      this._dismissSharing = () => {\n        this.setState({\n          dismissedSharing: true\n        });\n      };\n    }\n\n    render() {\n      const props = Object.assign({}, this.props, {\n        gameArgs: args\n      });\n\n      let alert = this._getGameSharing();\n\n      if (!this.props.isConnected) {\n        alert = this._getConnectionLost();\n      }\n\n      const gameDef = _games__WEBPACK_IMPORTED_MODULE_4__[\"GAMES_MAP\"][args.gameCode];\n      const child = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gameDef.bgioBoard, props);\n\n      if (!alert) {\n        return child;\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          width: '100%',\n          height: '100%'\n        }\n      }, child, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_2___default.a, null, alert));\n    }\n\n    _getGameSharing() {\n      if (!this.state.dismissedSharing && args.matchCode && args.playerID === '0') {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AlertLayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameSharing__WEBPACK_IMPORTED_MODULE_3__[\"GameSharing\"], {\n          gameCode: args.gameCode,\n          matchCode: args.matchCode,\n          playerID: args.playerID,\n          onDismiss: this._dismissSharing\n        }));\n      }\n\n      return null;\n    }\n\n    _getConnectionLost() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AlertLayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Connection lost\"), \"Trying to connect...\");\n    }\n\n  }\n\n  return Board;\n}\n\n//# sourceURL=webpack:///./src/App/Game/GameBoardWrapper.tsx?");

/***/ }),

/***/ "./src/App/Game/GameSharing.tsx":
/*!**************************************!*\
  !*** ./src/App/Game/GameSharing.tsx ***!
  \**************************************/
/*! exports provided: GameSharing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameSharing\", function() { return GameSharing; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_TextField__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_RaisedButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/RaisedButton */ \"material-ui/RaisedButton\");\n/* harmony import */ var material_ui_RaisedButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_RaisedButton__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_svg_icons_communication_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/svg-icons/communication/email */ \"material-ui/svg-icons/communication/email\");\n/* harmony import */ var material_ui_svg_icons_communication_email__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_svg_icons_communication_email__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_svg_icons_content_content_copy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/svg-icons/content/content-copy */ \"material-ui/svg-icons/content/content-copy\");\n/* harmony import */ var material_ui_svg_icons_content_content_copy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_svg_icons_content_content_copy__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _FacebookIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FacebookIcon */ \"./src/App/Game/FacebookIcon.tsx\");\n/* harmony import */ var _TwitterIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TwitterIcon */ \"./src/App/Game/TwitterIcon.tsx\");\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! copy-to-clipboard */ \"copy-to-clipboard\");\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-ga */ \"react-ga\");\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\nclass GameSharing extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.sendEmailCallback = this.sendEmail.bind(this);\n    this.shareFacebookCallback = this.shareFacebook.bind(this);\n    this.shareTwitterCallback = this.shareTwitter.bind(this);\n    this.copyClipboardCallback = this.copyClipboard.bind(this);\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"CardTitle\"], {\n      title: \"Invite Your Friend\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"CardText\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      tooltip: \"Send link by e-mail\",\n      onClick: this.sendEmailCallback\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_svg_icons_communication_email__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      tooltip: \"Share on Facebook\",\n      onClick: this.shareFacebookCallback\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FacebookIcon__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      tooltip: \"Share on Twitter\",\n      onClick: this.shareTwitterCallback\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TwitterIcon__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      tooltip: \"Copy link to clipboard\",\n      onClick: this.copyClipboardCallback\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_svg_icons_content_content_copy__WEBPACK_IMPORTED_MODULE_5___default.a, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      defaultValue: this._getLink(),\n      floatingLabelText: \"Link\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_RaisedButton__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      label: \"Done\",\n      primary: true,\n      onClick: this.props.onDismiss\n    })));\n  }\n\n  sendEmail() {\n    react_ga__WEBPACK_IMPORTED_MODULE_11___default.a.event({\n      category: 'GameSharing',\n      action: 'sendEmail'\n    });\n    location.assign('mailto:?body=' + this._getLink());\n  }\n\n  shareFacebook() {\n    react_ga__WEBPACK_IMPORTED_MODULE_11___default.a.event({\n      category: 'GameSharing',\n      action: 'shareFacebook'\n    });\n    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(this._getLink()));\n  }\n\n  shareTwitter() {\n    react_ga__WEBPACK_IMPORTED_MODULE_11___default.a.event({\n      category: 'GameSharing',\n      action: 'shareTwitter'\n    });\n    window.open('https://www.twitter.com/share?url=' + encodeURI(this._getLink()));\n  }\n\n  copyClipboard() {\n    react_ga__WEBPACK_IMPORTED_MODULE_11___default.a.event({\n      category: 'GameSharing',\n      action: 'copyClipboard'\n    });\n    copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9___default()(this._getLink());\n    alert('Link copied to clipboard');\n    this.props.onDismiss();\n  }\n\n  _getLink() {\n    const player = this.props.playerID === '0' ? '1' : '0';\n    const origin = typeof window === 'undefined' ? '' : window.location.origin;\n    const gameCode = this.props.gameCode;\n    const matchCode = this.props.matchCode;\n    return `${origin}/g/${gameCode}/online/${matchCode}/${player}`;\n  }\n\n}\nGameSharing.propTypes = {\n  gameCode: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,\n  matchCode: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,\n  playerID: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,\n  onDismiss: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func\n};\n\n//# sourceURL=webpack:///./src/App/Game/GameSharing.tsx?");

/***/ }),

/***/ "./src/App/Game/TwitterIcon.tsx":
/*!**************************************!*\
  !*** ./src/App/Game/TwitterIcon.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var material_ui_SvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! material-ui/SvgIcon */ \"material-ui/SvgIcon\");\n/* harmony import */ var material_ui_SvgIcon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(material_ui_SvgIcon__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass TwitterIcon extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  render() {\n    const path1 = `M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772\n                   c25.929-15.527,45.777-40.155,55.184-69.41\n                   c-24.322,14.379-51.169,24.82-79.775,30.48\n                   c-22.907-24.437-55.49-39.658-91.63-39.658\n                   c-69.334,0-125.551,56.217-125.551,125.513\n                   c0,9.828,1.109,19.427,3.251,28.606C197.065,\n                   206.32,104.556,156.337,42.641,80.386\n                   c-10.823,18.51-16.98,40.078-16.98,63.101\n                   c0,43.559,22.181,81.993,55.835,104.479\n                   c-20.575-0.688-39.926-6.348-56.867-15.756v1.568\n                   c0,60.806,43.291,111.554,100.693,123.104\n                   c-10.517,2.83-21.607,4.398-33.08,4.398\n                   c-8.107,0-15.947-0.803-23.634-2.333\n                   c15.985,49.907,62.336,86.199,117.253,87.194\n                   c-42.947,33.654-97.099,53.655-155.916,53.655\n                   c-10.134,0-20.116-0.612-29.944-1.721\n                   c55.567,35.681,121.536,56.485,192.438,56.485\n                   c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,\n                   163.526,595.211,141.422,612,116.258z`;\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(material_ui_SvgIcon__WEBPACK_IMPORTED_MODULE_0___default.a, {\n      viewBox: \"0 0 612 612\"\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"path\", {\n      d: path1\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TwitterIcon);\n\n//# sourceURL=webpack:///./src/App/Game/TwitterIcon.tsx?");

/***/ })

};;