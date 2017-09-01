var require = meteorInstall({"imports":{"api":{"players.js":["babel-runtime/helpers/extends","meteor/mongo","numeral",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/players.js                                                                         //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var _extends2 = require("babel-runtime/helpers/extends");                                         //
                                                                                                  //
var _extends3 = _interopRequireDefault(_extends2);                                                //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                                                                                                  //
module.export({                                                                                   // 1
    Players: function () {                                                                        // 1
        return Players;                                                                           // 1
    },                                                                                            // 1
    calculatePlayerPositions: function () {                                                       // 1
        return calculatePlayerPositions;                                                          // 1
    }                                                                                             // 1
});                                                                                               // 1
var Mongo = void 0;                                                                               // 1
module.watch(require("meteor/mongo"), {                                                           // 1
    Mongo: function (v) {                                                                         // 1
        Mongo = v;                                                                                // 1
    }                                                                                             // 1
}, 0);                                                                                            // 1
var numeral = void 0;                                                                             // 1
module.watch(require("numeral"), {                                                                // 1
    "default": function (v) {                                                                     // 1
        numeral = v;                                                                              // 1
    }                                                                                             // 1
}, 1);                                                                                            // 1
var Players = new Mongo.Collection('players');                                                    // 4
                                                                                                  //
var calculatePlayerPositions = function (players) {                                               // 6
    var rank = 1;                                                                                 // 7
    return players.map(function (player, index) {                                                 // 8
        if (index !== 0 && players[index - 1].score > player.score) {                             // 9
            rank++;                                                                               // 10
        }                                                                                         // 11
                                                                                                  //
        return (0, _extends3.default)({}, player, {                                               // 12
            rank: rank,                                                                           // 14
            position: numeral(rank).format('0o')                                                  // 15
        });                                                                                       // 12
    });                                                                                           // 17
};                                                                                                // 18
////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"server":{"main.js":["meteor/meteor","./../imports/api/players",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// server/main.js                                                                                 //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var Meteor = void 0;                                                                              // 1
module.watch(require("meteor/meteor"), {                                                          // 1
  Meteor: function (v) {                                                                          // 1
    Meteor = v;                                                                                   // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var Players = void 0;                                                                             // 1
module.watch(require("./../imports/api/players"), {                                               // 1
  Players: function (v) {                                                                         // 1
    Players = v;                                                                                  // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
Meteor.startup(function () {});                                                                   // 4
////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
