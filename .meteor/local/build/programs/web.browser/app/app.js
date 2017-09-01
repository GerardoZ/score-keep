var require = meteorInstall({"client":{"template.main.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// client/template.main.js                                                                              //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
                                                                                                        // 1
Template.body.addContent((function() {                                                                  // 2
  var view = this;                                                                                      // 3
  return HTML.Raw('<div id="app"></div>');                                                              // 4
}));                                                                                                    // 5
Meteor.startup(Template.body.renderToDocument);                                                         // 6
                                                                                                        // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["react","react-dom","meteor/meteor","./../imports/api/players","meteor/tracker","./../imports/ui/App",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// client/main.js                                                                                       //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var React = void 0;                                                                                     // 1
module.watch(require("react"), {                                                                        // 1
    "default": function (v) {                                                                           // 1
        React = v;                                                                                      // 1
    }                                                                                                   // 1
}, 0);                                                                                                  // 1
var ReactDOM = void 0;                                                                                  // 1
module.watch(require("react-dom"), {                                                                    // 1
    "default": function (v) {                                                                           // 1
        ReactDOM = v;                                                                                   // 1
    }                                                                                                   // 1
}, 1);                                                                                                  // 1
var Meteor = void 0;                                                                                    // 1
module.watch(require("meteor/meteor"), {                                                                // 1
    Meteor: function (v) {                                                                              // 1
        Meteor = v;                                                                                     // 1
    }                                                                                                   // 1
}, 2);                                                                                                  // 1
var Players = void 0,                                                                                   // 1
    calculatePlayerPositions = void 0;                                                                  // 1
module.watch(require("./../imports/api/players"), {                                                     // 1
    Players: function (v) {                                                                             // 1
        Players = v;                                                                                    // 1
    },                                                                                                  // 1
    calculatePlayerPositions: function (v) {                                                            // 1
        calculatePlayerPositions = v;                                                                   // 1
    }                                                                                                   // 1
}, 3);                                                                                                  // 1
var Tracker = void 0;                                                                                   // 1
module.watch(require("meteor/tracker"), {                                                               // 1
    Tracker: function (v) {                                                                             // 1
        Tracker = v;                                                                                    // 1
    }                                                                                                   // 1
}, 4);                                                                                                  // 1
var App = void 0;                                                                                       // 1
module.watch(require("./../imports/ui/App"), {                                                          // 1
    "default": function (v) {                                                                           // 1
        App = v;                                                                                        // 1
    }                                                                                                   // 1
}, 5);                                                                                                  // 1
Meteor.startup(function () {                                                                            // 9
    Tracker.autorun(function () {                                                                       // 10
        var players = Players.find({}, {                                                                // 11
            sort: {                                                                                     // 11
                score: -1                                                                               // 11
            }                                                                                           // 11
        }).fetch();                                                                                     // 11
        var positionedPlayers = calculatePlayerPositions(players);                                      // 12
        var title = "Score Keep";                                                                       // 13
        ReactDOM.render(React.createElement(App, {                                                      // 14
            title: title,                                                                               // 14
            players: positionedPlayers                                                                  // 14
        }), document.getElementById('app'));                                                            // 14
    });                                                                                                 // 15
});                                                                                                     // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"imports":{"api":{"players.js":["babel-runtime/helpers/extends","meteor/mongo","numeral",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// imports/api/players.js                                                                               //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var _extends2 = require("babel-runtime/helpers/extends");                                               //
                                                                                                        //
var _extends3 = _interopRequireDefault(_extends2);                                                      //
                                                                                                        //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }       //
                                                                                                        //
module.export({                                                                                         // 1
    Players: function () {                                                                              // 1
        return Players;                                                                                 // 1
    },                                                                                                  // 1
    calculatePlayerPositions: function () {                                                             // 1
        return calculatePlayerPositions;                                                                // 1
    }                                                                                                   // 1
});                                                                                                     // 1
var Mongo = void 0;                                                                                     // 1
module.watch(require("meteor/mongo"), {                                                                 // 1
    Mongo: function (v) {                                                                               // 1
        Mongo = v;                                                                                      // 1
    }                                                                                                   // 1
}, 0);                                                                                                  // 1
var numeral = void 0;                                                                                   // 1
module.watch(require("numeral"), {                                                                      // 1
    "default": function (v) {                                                                           // 1
        numeral = v;                                                                                    // 1
    }                                                                                                   // 1
}, 1);                                                                                                  // 1
var Players = new Mongo.Collection('players');                                                          // 4
                                                                                                        //
var calculatePlayerPositions = function (players) {                                                     // 6
    var rank = 1;                                                                                       // 7
    return players.map(function (player, index) {                                                       // 8
        if (index !== 0 && players[index - 1].score > player.score) {                                   // 9
            rank++;                                                                                     // 10
        }                                                                                               // 11
                                                                                                        //
        return (0, _extends3.default)({}, player, {                                                     // 12
            rank: rank,                                                                                 // 14
            position: numeral(rank).format('0o')                                                        // 15
        });                                                                                             // 12
    });                                                                                                 // 17
};                                                                                                      // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"ui":{"AddPlayer.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","./../../imports/api/players",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// imports/ui/AddPlayer.js                                                                              //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                 //
                                                                                                        //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                        //
                                                                                                        //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");           //
                                                                                                        //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                  //
                                                                                                        //
var _inherits2 = require("babel-runtime/helpers/inherits");                                             //
                                                                                                        //
var _inherits3 = _interopRequireDefault(_inherits2);                                                    //
                                                                                                        //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }       //
                                                                                                        //
module.export({                                                                                         // 1
    "default": function () {                                                                            // 1
        return AddPlayer;                                                                               // 1
    }                                                                                                   // 1
});                                                                                                     // 1
var React = void 0;                                                                                     // 1
module.watch(require("react"), {                                                                        // 1
    "default": function (v) {                                                                           // 1
        React = v;                                                                                      // 1
    }                                                                                                   // 1
}, 0);                                                                                                  // 1
var Players = void 0;                                                                                   // 1
module.watch(require("./../../imports/api/players"), {                                                  // 1
    Players: function (v) {                                                                             // 1
        Players = v;                                                                                    // 1
    }                                                                                                   // 1
}, 1);                                                                                                  // 1
                                                                                                        //
var AddPlayer = function (_React$Component) {                                                           //
    (0, _inherits3.default)(AddPlayer, _React$Component);                                               //
                                                                                                        //
    function AddPlayer() {                                                                              //
        (0, _classCallCheck3.default)(this, AddPlayer);                                                 //
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }                                                                                                   //
                                                                                                        //
    AddPlayer.prototype.handleSubmit = function () {                                                    //
        function handleSubmit(e) {                                                                      //
            e.preventDefault();                                                                         // 6
            var playerName = e.target.playerName.value;                                                 // 7
                                                                                                        //
            if (playerName) {                                                                           // 8
                e.target.playerName.value = '';                                                         // 9
                Players.insert({                                                                        // 10
                    name: playerName,                                                                   // 10
                    score: 0                                                                            // 10
                });                                                                                     // 10
            }                                                                                           // 11
        }                                                                                               // 12
                                                                                                        //
        return handleSubmit;                                                                            //
    }();                                                                                                //
                                                                                                        //
    AddPlayer.prototype.render = function () {                                                          //
        function render() {                                                                             //
            return React.createElement(                                                                 // 15
                "div",                                                                                  // 16
                {                                                                                       // 16
                    className: "item"                                                                   // 16
                },                                                                                      // 16
                React.createElement(                                                                    // 17
                    "form",                                                                             // 17
                    {                                                                                   // 17
                        className: "form",                                                              // 17
                        onSubmit: this.handleSubmit                                                     // 17
                    },                                                                                  // 17
                    React.createElement("input", {                                                      // 18
                        className: "form__input",                                                       // 18
                        type: "text",                                                                   // 18
                        name: "playerName"                                                              // 18
                    }),                                                                                 // 18
                    React.createElement(                                                                // 19
                        "button",                                                                       // 19
                        {                                                                               // 19
                            className: "button"                                                         // 19
                        },                                                                              // 19
                        "Add player"                                                                    // 19
                    )                                                                                   // 19
                )                                                                                       // 17
            );                                                                                          // 16
        }                                                                                               // 23
                                                                                                        //
        return render;                                                                                  //
    }();                                                                                                //
                                                                                                        //
    return AddPlayer;                                                                                   //
}(React.Component);                                                                                     //
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"App.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","./TitleBar","./AddPlayer","./PlayerList",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// imports/ui/App.js                                                                                    //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                 //
                                                                                                        //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                        //
                                                                                                        //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");           //
                                                                                                        //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                  //
                                                                                                        //
var _inherits2 = require("babel-runtime/helpers/inherits");                                             //
                                                                                                        //
var _inherits3 = _interopRequireDefault(_inherits2);                                                    //
                                                                                                        //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }       //
                                                                                                        //
module.export({                                                                                         // 1
    "default": function () {                                                                            // 1
        return App;                                                                                     // 1
    }                                                                                                   // 1
});                                                                                                     // 1
var React = void 0;                                                                                     // 1
module.watch(require("react"), {                                                                        // 1
    "default": function (v) {                                                                           // 1
        React = v;                                                                                      // 1
    }                                                                                                   // 1
}, 0);                                                                                                  // 1
var TitleBar = void 0;                                                                                  // 1
module.watch(require("./TitleBar"), {                                                                   // 1
    "default": function (v) {                                                                           // 1
        TitleBar = v;                                                                                   // 1
    }                                                                                                   // 1
}, 1);                                                                                                  // 1
var AddPlayer = void 0;                                                                                 // 1
module.watch(require("./AddPlayer"), {                                                                  // 1
    "default": function (v) {                                                                           // 1
        AddPlayer = v;                                                                                  // 1
    }                                                                                                   // 1
}, 2);                                                                                                  // 1
var PlayerList = void 0;                                                                                // 1
module.watch(require("./PlayerList"), {                                                                 // 1
    "default": function (v) {                                                                           // 1
        PlayerList = v;                                                                                 // 1
    }                                                                                                   // 1
}, 3);                                                                                                  // 1
                                                                                                        //
var App = function (_React$Component) {                                                                 //
    (0, _inherits3.default)(App, _React$Component);                                                     //
                                                                                                        //
    function App() {                                                                                    //
        (0, _classCallCheck3.default)(this, App);                                                       //
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }                                                                                                   //
                                                                                                        //
    App.prototype.render = function () {                                                                //
        function render() {                                                                             //
            return React.createElement(                                                                 // 8
                "div",                                                                                  // 9
                null,                                                                                   // 9
                React.createElement(TitleBar, {                                                         // 10
                    title: this.props.title,                                                            // 10
                    subtitle: "by CodeCube"                                                             // 10
                }),                                                                                     // 10
                React.createElement(                                                                    // 11
                    "div",                                                                              // 11
                    {                                                                                   // 11
                        className: "wrapper"                                                            // 11
                    },                                                                                  // 11
                    React.createElement(PlayerList, {                                                   // 12
                        players: this.props.players                                                     // 12
                    }),                                                                                 // 12
                    React.createElement(AddPlayer, null)                                                // 13
                )                                                                                       // 11
            );                                                                                          // 9
        }                                                                                               // 17
                                                                                                        //
        return render;                                                                                  //
    }();                                                                                                //
                                                                                                        //
    return App;                                                                                         //
}(React.Component);                                                                                     //
                                                                                                        //
App.propsTypes = {                                                                                      // 20
    title: React.PropTypes.string.isRequired,                                                           // 21
    players: React.PropTypes.array.isRequired                                                           // 22
};                                                                                                      // 20
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Player.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","./../../imports/api/players",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// imports/ui/Player.js                                                                                 //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                 //
                                                                                                        //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                        //
                                                                                                        //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");           //
                                                                                                        //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                  //
                                                                                                        //
var _inherits2 = require("babel-runtime/helpers/inherits");                                             //
                                                                                                        //
var _inherits3 = _interopRequireDefault(_inherits2);                                                    //
                                                                                                        //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }       //
                                                                                                        //
module.export({                                                                                         // 1
    "default": function () {                                                                            // 1
        return Player;                                                                                  // 1
    }                                                                                                   // 1
});                                                                                                     // 1
var React = void 0;                                                                                     // 1
module.watch(require("react"), {                                                                        // 1
    "default": function (v) {                                                                           // 1
        React = v;                                                                                      // 1
    }                                                                                                   // 1
}, 0);                                                                                                  // 1
var Players = void 0;                                                                                   // 1
module.watch(require("./../../imports/api/players"), {                                                  // 1
    Players: function (v) {                                                                             // 1
        Players = v;                                                                                    // 1
    }                                                                                                   // 1
}, 1);                                                                                                  // 1
                                                                                                        //
var Player = function (_React$Component) {                                                              //
    (0, _inherits3.default)(Player, _React$Component);                                                  //
                                                                                                        //
    function Player() {                                                                                 //
        (0, _classCallCheck3.default)(this, Player);                                                    //
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }                                                                                                   //
                                                                                                        //
    Player.prototype.render = function () {                                                             //
        function render() {                                                                             //
            var _this2 = this;                                                                          // 5
                                                                                                        //
            var itemClassName = "item item--position-" + this.props.player.rank;                        // 6
            return React.createElement(                                                                 // 8
                "div",                                                                                  // 9
                {                                                                                       // 9
                    className: itemClassName                                                            // 9
                },                                                                                      // 9
                React.createElement(                                                                    // 10
                    "div",                                                                              // 10
                    {                                                                                   // 10
                        className: "player"                                                             // 10
                    },                                                                                  // 10
                    React.createElement(                                                                // 11
                        "div",                                                                          // 11
                        null,                                                                           // 11
                        React.createElement(                                                            // 12
                            "h3",                                                                       // 12
                            {                                                                           // 12
                                className: "player__name"                                               // 12
                            },                                                                          // 12
                            this.props.player.name                                                      // 12
                        ),                                                                              // 12
                        React.createElement(                                                            // 13
                            "p",                                                                        // 13
                            {                                                                           // 13
                                className: "player__stats"                                              // 13
                            },                                                                          // 13
                            this.props.player.position,                                                 // 14
                            " ",                                                                        // 13
                            this.props.player.score,                                                    // 14
                            " point(s)."                                                                // 13
                        )                                                                               // 13
                    ),                                                                                  // 11
                    React.createElement(                                                                // 17
                        "div",                                                                          // 17
                        {                                                                               // 17
                            className: "player__actions"                                                // 17
                        },                                                                              // 17
                        React.createElement(                                                            // 18
                            "button",                                                                   // 18
                            {                                                                           // 18
                                onClick: function () {                                                  // 18
                                    return Players.update({                                             // 18
                                        _id: _this2.props.player._id                                    // 18
                                    }, {                                                                // 18
                                        $inc: {                                                         // 18
                                            score: -1                                                   // 18
                                        }                                                               // 18
                                    });                                                                 // 18
                                },                                                                      // 18
                                className: "button button--round"                                       // 18
                            },                                                                          // 18
                            "-1"                                                                        // 18
                        ),                                                                              // 18
                        React.createElement(                                                            // 19
                            "button",                                                                   // 19
                            {                                                                           // 19
                                onClick: function () {                                                  // 19
                                    return Players.update({                                             // 19
                                        _id: _this2.props.player._id                                    // 19
                                    }, {                                                                // 19
                                        $inc: {                                                         // 19
                                            score: 1                                                    // 19
                                        }                                                               // 19
                                    });                                                                 // 19
                                },                                                                      // 19
                                className: "button button--round"                                       // 19
                            },                                                                          // 19
                            "+1"                                                                        // 19
                        ),                                                                              // 19
                        React.createElement(                                                            // 20
                            "button",                                                                   // 20
                            {                                                                           // 20
                                onClick: function () {                                                  // 20
                                    return Players.remove({                                             // 20
                                        _id: _this2.props.player._id                                    // 20
                                    });                                                                 // 20
                                },                                                                      // 20
                                className: "button button--round"                                       // 20
                            },                                                                          // 20
                            "X"                                                                         // 20
                        )                                                                               // 20
                    )                                                                                   // 17
                )                                                                                       // 10
            );                                                                                          // 9
        }                                                                                               // 25
                                                                                                        //
        return render;                                                                                  //
    }();                                                                                                //
                                                                                                        //
    return Player;                                                                                      //
}(React.Component);                                                                                     //
                                                                                                        //
Player.propTypes = {                                                                                    // 28
    player: React.PropTypes.object.isRequired                                                           // 29
};                                                                                                      // 28
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"PlayerList.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","./Player","react-flip-move",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// imports/ui/PlayerList.js                                                                             //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                 //
                                                                                                        //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                        //
                                                                                                        //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");           //
                                                                                                        //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                  //
                                                                                                        //
var _inherits2 = require("babel-runtime/helpers/inherits");                                             //
                                                                                                        //
var _inherits3 = _interopRequireDefault(_inherits2);                                                    //
                                                                                                        //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }       //
                                                                                                        //
module.export({                                                                                         // 1
    "default": function () {                                                                            // 1
        return PlayerList;                                                                              // 1
    }                                                                                                   // 1
});                                                                                                     // 1
var React = void 0;                                                                                     // 1
module.watch(require("react"), {                                                                        // 1
    "default": function (v) {                                                                           // 1
        React = v;                                                                                      // 1
    }                                                                                                   // 1
}, 0);                                                                                                  // 1
var Player = void 0;                                                                                    // 1
module.watch(require("./Player"), {                                                                     // 1
    "default": function (v) {                                                                           // 1
        Player = v;                                                                                     // 1
    }                                                                                                   // 1
}, 1);                                                                                                  // 1
var FlipMove = void 0;                                                                                  // 1
module.watch(require("react-flip-move"), {                                                              // 1
    "default": function (v) {                                                                           // 1
        FlipMove = v;                                                                                   // 1
    }                                                                                                   // 1
}, 2);                                                                                                  // 1
                                                                                                        //
var PlayerList = function (_React$Component) {                                                          //
    (0, _inherits3.default)(PlayerList, _React$Component);                                              //
                                                                                                        //
    function PlayerList() {                                                                             //
        (0, _classCallCheck3.default)(this, PlayerList);                                                //
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }                                                                                                   //
                                                                                                        //
    PlayerList.prototype.renderPlayers = function () {                                                  //
        function renderPlayers() {                                                                      //
            if (this.props.players.length === 0) {                                                      // 7
                return React.createElement(                                                             // 8
                    "div",                                                                              // 9
                    {                                                                                   // 9
                        className: "item"                                                               // 9
                    },                                                                                  // 9
                    React.createElement(                                                                // 10
                        "p",                                                                            // 10
                        {                                                                               // 10
                            className: "item__message"                                                  // 10
                        },                                                                              // 10
                        "Add your first player to get started"                                          // 10
                    )                                                                                   // 10
                );                                                                                      // 9
            } else {                                                                                    // 13
                return this.props.players.map(function (player) {                                       // 14
                    return React.createElement(Player, {                                                // 15
                        key: player._id,                                                                // 15
                        player: player                                                                  // 15
                    });                                                                                 // 15
                });                                                                                     // 17
            }                                                                                           // 18
        }                                                                                               // 19
                                                                                                        //
        return renderPlayers;                                                                           //
    }();                                                                                                //
                                                                                                        //
    PlayerList.prototype.render = function () {                                                         //
        function render() {                                                                             //
            return React.createElement(                                                                 // 21
                "div",                                                                                  // 22
                null,                                                                                   // 22
                React.createElement(                                                                    // 23
                    FlipMove,                                                                           // 23
                    {                                                                                   // 23
                        maintainContainerHeight: true                                                   // 23
                    },                                                                                  // 23
                    this.renderPlayers()                                                                // 24
                )                                                                                       // 23
            );                                                                                          // 22
        }                                                                                               // 28
                                                                                                        //
        return render;                                                                                  //
    }();                                                                                                //
                                                                                                        //
    return PlayerList;                                                                                  //
}(React.Component);                                                                                     //
                                                                                                        //
PlayerList.propTypes = {                                                                                // 31
    players: React.PropTypes.array.isRequired                                                           // 32
};                                                                                                      // 31
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"TitleBar.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// imports/ui/TitleBar.js                                                                               //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                 //
                                                                                                        //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                        //
                                                                                                        //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");           //
                                                                                                        //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                  //
                                                                                                        //
var _inherits2 = require("babel-runtime/helpers/inherits");                                             //
                                                                                                        //
var _inherits3 = _interopRequireDefault(_inherits2);                                                    //
                                                                                                        //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }       //
                                                                                                        //
module.export({                                                                                         // 1
    "default": function () {                                                                            // 1
        return TitleBar;                                                                                // 1
    }                                                                                                   // 1
});                                                                                                     // 1
var React = void 0;                                                                                     // 1
module.watch(require("react"), {                                                                        // 1
    "default": function (v) {                                                                           // 1
        React = v;                                                                                      // 1
    }                                                                                                   // 1
}, 0);                                                                                                  // 1
                                                                                                        //
var TitleBar = function (_React$Component) {                                                            //
    (0, _inherits3.default)(TitleBar, _React$Component);                                                //
                                                                                                        //
    function TitleBar() {                                                                               //
        (0, _classCallCheck3.default)(this, TitleBar);                                                  //
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }                                                                                                   //
                                                                                                        //
    TitleBar.prototype.renderSubtitle = function () {                                                   //
        function renderSubtitle() {                                                                     //
            if (this.props.subtitle) {                                                                  // 5
                return React.createElement(                                                             // 6
                    "h2",                                                                               // 6
                    {                                                                                   // 6
                        className: "title-bar__subtitle"                                                // 6
                    },                                                                                  // 6
                    this.props.subtitle                                                                 // 6
                );                                                                                      // 6
            }                                                                                           // 7
        }                                                                                               // 8
                                                                                                        //
        return renderSubtitle;                                                                          //
    }();                                                                                                //
                                                                                                        //
    TitleBar.prototype.render = function () {                                                           //
        function render() {                                                                             //
            return React.createElement(                                                                 // 10
                "div",                                                                                  // 11
                {                                                                                       // 11
                    className: "title-bar"                                                              // 11
                },                                                                                      // 11
                React.createElement(                                                                    // 12
                    "div",                                                                              // 12
                    {                                                                                   // 12
                        className: "wrapper"                                                            // 12
                    },                                                                                  // 12
                    React.createElement(                                                                // 13
                        "h1",                                                                           // 13
                        null,                                                                           // 13
                        this.props.title                                                                // 13
                    ),                                                                                  // 13
                    this.renderSubtitle()                                                               // 14
                )                                                                                       // 12
            );                                                                                          // 11
        }                                                                                               // 18
                                                                                                        //
        return render;                                                                                  //
    }();                                                                                                //
                                                                                                        //
    return TitleBar;                                                                                    //
}(React.Component);                                                                                     //
                                                                                                        //
TitleBar.propTypes = {                                                                                  // 21
    title: React.PropTypes.string.isRequired,                                                           // 22
    subtitle: React.PropTypes.string                                                                    // 23
};                                                                                                      // 21
TitleBar.defaultProps = {};                                                                             // 26
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}},{"extensions":[".js",".json",".html",".scss"]});
require("./client/template.main.js");
require("./client/main.js");