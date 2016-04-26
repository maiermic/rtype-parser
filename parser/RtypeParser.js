// Generated from Rtype.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RtypeListener = require('./RtypeListener').RtypeListener;
var grammarFileName = "Rtype.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0003\u0007\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0002\u0002\u0003\u0002\u0002\u0002\u0005\u0002\u0004\u0003\u0002",
    "\u0002\u0002\u0004\u0005\u0007\u0003\u0002\u0002\u0005\u0003\u0003\u0002",
    "\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'Rtype'" ];

var symbolicNames = [  ];

var ruleNames =  [ "file" ];

function RtypeParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RtypeParser.prototype = Object.create(antlr4.Parser.prototype);
RtypeParser.prototype.constructor = RtypeParser;

Object.defineProperty(RtypeParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RtypeParser.EOF = antlr4.Token.EOF;
RtypeParser.T__0 = 1;

RtypeParser.RULE_file = 0;

function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;


FileContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitFile(this);
	}
};




RtypeParser.FileContext = FileContext;

RtypeParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RtypeParser.RULE_file);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 2;
        this.match(RtypeParser.T__0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.RtypeParser = RtypeParser;
