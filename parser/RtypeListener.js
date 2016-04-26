// Generated from Rtype.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by RtypeParser.
function RtypeListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

RtypeListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
RtypeListener.prototype.constructor = RtypeListener;

// Enter a parse tree produced by RtypeParser#file.
RtypeListener.prototype.enterFile = function(ctx) {
};

// Exit a parse tree produced by RtypeParser#file.
RtypeListener.prototype.exitFile = function(ctx) {
};



exports.RtypeListener = RtypeListener;