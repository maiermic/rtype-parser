// Generated from Rtype.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RtypeListener = require('./RtypeListener').RtypeListener;
var grammarFileName = "Rtype.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0018\u00e4\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u00036\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004=\n\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005B\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0005\u0005M\n\u0005\u0005\u0005O\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0005\u0007X",
    "\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007\\\n\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0005\u0007b\n\u0007\u0003\u0007\u0005",
    "\u0007e\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007i\n\u0007\u0003\u0007",
    "\u0007\u0007l\n\u0007\f\u0007\u000e\u0007o\u000b\u0007\u0003\b\u0003",
    "\b\u0003\b\u0007\bt\n\b\f\b\u000e\bw\u000b\b\u0003\t\u0003\t\u0003\t",
    "\u0007\t|\n\t\f\t\u000e\t\u007f\u000b\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0007\n\u0085\n\n\f\n\u000e\n\u0088\u000b\n\u0003\n\u0003\n\u0005",
    "\n\u008c\n\n\u0005\n\u008e\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007",
    "\u000b\u0093\n\u000b\f\u000b\u000e\u000b\u0096\u000b\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0005\r\u009e\n\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0005",
    "\u000f\u00a7\n\u000f\u0003\u0010\u0003\u0010\u0005\u0010\u00ab\n\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010",
    "\u00b2\n\u0010\u0005\u0010\u00b4\n\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005",
    "\u0013\u00c4\n\u0013\u0005\u0013\u00c6\n\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0005\u0014\u00cc\n\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0006\u0014\u00d4",
    "\n\u0014\r\u0014\u000e\u0014\u00d5\u0007\u0014\u00d8\n\u0014\f\u0014",
    "\u000e\u0014\u00db\u000b\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0002\u0003&",
    "\u0018\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,\u0002\u0003\u0003\u0002\u0014\u0015\u00ed\u0002",
    ".\u0003\u0002\u0002\u0002\u00045\u0003\u0002\u0002\u0002\u00067\u0003",
    "\u0002\u0002\u0002\b>\u0003\u0002\u0002\u0002\nP\u0003\u0002\u0002\u0002",
    "\fW\u0003\u0002\u0002\u0002\u000ep\u0003\u0002\u0002\u0002\u0010x\u0003",
    "\u0002\u0002\u0002\u0012\u008d\u0003\u0002\u0002\u0002\u0014\u008f\u0003",
    "\u0002\u0002\u0002\u0016\u0097\u0003\u0002\u0002\u0002\u0018\u009d\u0003",
    "\u0002\u0002\u0002\u001a\u009f\u0003\u0002\u0002\u0002\u001c\u00a6\u0003",
    "\u0002\u0002\u0002\u001e\u00a8\u0003\u0002\u0002\u0002 \u00b5\u0003",
    "\u0002\u0002\u0002\"\u00b8\u0003\u0002\u0002\u0002$\u00c5\u0003\u0002",
    "\u0002\u0002&\u00c7\u0003\u0002\u0002\u0002(\u00dc\u0003\u0002\u0002",
    "\u0002*\u00de\u0003\u0002\u0002\u0002,\u00e1\u0003\u0002\u0002\u0002",
    "./\u0005\u0004\u0003\u0002/0\u0007\u0002\u0002\u00030\u0003\u0003\u0002",
    "\u0002\u000216\u0005\u0006\u0004\u000226\u0005\b\u0005\u000236\u0005",
    "\n\u0006\u000246\u0005\f\u0007\u000251\u0003\u0002\u0002\u000252\u0003",
    "\u0002\u0002\u000253\u0003\u0002\u0002\u000254\u0003\u0002\u0002\u0002",
    "6\u0005\u0003\u0002\u0002\u000278\u0007\u0003\u0002\u00028<\u0007\u0017",
    "\u0002\u00029:\u0007\u0004\u0002\u0002:=\u0005&\u0014\u0002;=\u0005",
    "*\u0016\u0002<9\u0003\u0002\u0002\u0002<;\u0003\u0002\u0002\u0002=\u0007",
    "\u0003\u0002\u0002\u0002>?\u0007\u0003\u0002\u0002?N\u0007\u0017\u0002",
    "\u0002@B\u0005*\u0016\u0002A@\u0003\u0002\u0002\u0002AB\u0003\u0002",
    "\u0002\u0002BC\u0003\u0002\u0002\u0002CD\u0007\u0005\u0002\u0002DE\u0005",
    "\u000e\b\u0002EF\u0007\u0006\u0002\u0002FO\u0003\u0002\u0002\u0002G",
    "L\u0005*\u0016\u0002HI\u0007\u0005\u0002\u0002IJ\u0005\u000e\b\u0002",
    "JK\u0007\u0006\u0002\u0002KM\u0003\u0002\u0002\u0002LH\u0003\u0002\u0002",
    "\u0002LM\u0003\u0002\u0002\u0002MO\u0003\u0002\u0002\u0002NA\u0003\u0002",
    "\u0002\u0002NG\u0003\u0002\u0002\u0002O\t\u0003\u0002\u0002\u0002PQ",
    "\u0007\u0003\u0002\u0002QR\u0007\u0017\u0002\u0002RS\u0007\u0005\u0002",
    "\u0002ST\u0005\u0010\t\u0002TU\u0007\u0006\u0002\u0002U\u000b\u0003",
    "\u0002\u0002\u0002VX\u0007\u0017\u0002\u0002WV\u0003\u0002\u0002\u0002",
    "WX\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002Y[\u0007\u0007\u0002",
    "\u0002Z\\\u0005\u0012\n\u0002[Z\u0003\u0002\u0002\u0002[\\\u0003\u0002",
    "\u0002\u0002\\]\u0003\u0002\u0002\u0002]^\u0007\b\u0002\u0002^d\u0007",
    "\t\u0002\u0002_a\u0007\u0017\u0002\u0002`b\u0007\n\u0002\u0002a`\u0003",
    "\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002",
    "ce\u0007\u0004\u0002\u0002d_\u0003\u0002\u0002\u0002de\u0003\u0002\u0002",
    "\u0002ef\u0003\u0002\u0002\u0002fm\u0005&\u0014\u0002gi\u0007\u000b",
    "\u0002\u0002hg\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002ij\u0003",
    "\u0002\u0002\u0002jl\u0005$\u0013\u0002kh\u0003\u0002\u0002\u0002lo",
    "\u0003\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002",
    "\u0002n\r\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002pu\u0005",
    "\u0018\r\u0002qr\u0007\u000b\u0002\u0002rt\u0005\u0018\r\u0002sq\u0003",
    "\u0002\u0002\u0002tw\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002",
    "uv\u0003\u0002\u0002\u0002v\u000f\u0003\u0002\u0002\u0002wu\u0003\u0002",
    "\u0002\u0002x}\u0005\f\u0007\u0002yz\u0007\u000b\u0002\u0002z|\u0005",
    "\f\u0007\u0002{y\u0003\u0002\u0002\u0002|\u007f\u0003\u0002\u0002\u0002",
    "}{\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\u0011\u0003\u0002",
    "\u0002\u0002\u007f}\u0003\u0002\u0002\u0002\u0080\u008e\u0005\"\u0012",
    "\u0002\u0081\u0086\u0005\u001c\u000f\u0002\u0082\u0083\u0007\u000b\u0002",
    "\u0002\u0083\u0085\u0005\u001c\u000f\u0002\u0084\u0082\u0003\u0002\u0002",
    "\u0002\u0085\u0088\u0003\u0002\u0002\u0002\u0086\u0084\u0003\u0002\u0002",
    "\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u008b\u0003\u0002\u0002",
    "\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0089\u008a\u0007\u000b\u0002",
    "\u0002\u008a\u008c\u0005\"\u0012\u0002\u008b\u0089\u0003\u0002\u0002",
    "\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008e\u0003\u0002\u0002",
    "\u0002\u008d\u0080\u0003\u0002\u0002\u0002\u008d\u0081\u0003\u0002\u0002",
    "\u0002\u008e\u0013\u0003\u0002\u0002\u0002\u008f\u0094\u0005,\u0017",
    "\u0002\u0090\u0091\u0007\u000b\u0002\u0002\u0091\u0093\u0005,\u0017",
    "\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0093\u0096\u0003\u0002\u0002",
    "\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002",
    "\u0002\u0095\u0015\u0003\u0002\u0002\u0002\u0096\u0094\u0003\u0002\u0002",
    "\u0002\u0097\u0098\u0007\u0005\u0002\u0002\u0098\u0099\u0005\u000e\b",
    "\u0002\u0099\u009a\u0007\u0006\u0002\u0002\u009a\u0017\u0003\u0002\u0002",
    "\u0002\u009b\u009e\u0005\u001c\u000f\u0002\u009c\u009e\u0005\u001a\u000e",
    "\u0002\u009d\u009b\u0003\u0002\u0002\u0002\u009d\u009c\u0003\u0002\u0002",
    "\u0002\u009e\u0019\u0003\u0002\u0002\u0002\u009f\u00a0\u0007\f\u0002",
    "\u0002\u00a0\u00a1\u0007\u0017\u0002\u0002\u00a1\u00a2\u0007\n\u0002",
    "\u0002\u00a2\u001b\u0003\u0002\u0002\u0002\u00a3\u00a7\u0005&\u0014",
    "\u0002\u00a4\u00a7\u0005\u001e\u0010\u0002\u00a5\u00a7\u0005\u0016\f",
    "\u0002\u00a6\u00a3\u0003\u0002\u0002\u0002\u00a6\u00a4\u0003\u0002\u0002",
    "\u0002\u00a6\u00a5\u0003\u0002\u0002\u0002\u00a7\u001d\u0003\u0002\u0002",
    "\u0002\u00a8\u00b3\u0007\u0017\u0002\u0002\u00a9\u00ab\u0005 \u0011",
    "\u0002\u00aa\u00a9\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002",
    "\u0002\u00ab\u00ac\u0003\u0002\u0002\u0002\u00ac\u00ad\u0007\u0004\u0002",
    "\u0002\u00ad\u00b4\u0005&\u0014\u0002\u00ae\u00af\u0005 \u0011\u0002",
    "\u00af\u00b1\u0007\u0004\u0002\u0002\u00b0\u00b2\u0005&\u0014\u0002",
    "\u00b1\u00b0\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003\u0002\u0002\u0002",
    "\u00b2\u00b4\u0003\u0002\u0002\u0002\u00b3\u00aa\u0003\u0002\u0002\u0002",
    "\u00b3\u00ae\u0003\u0002\u0002\u0002\u00b4\u001f\u0003\u0002\u0002\u0002",
    "\u00b5\u00b6\u0007\r\u0002\u0002\u00b6\u00b7\u0005(\u0015\u0002\u00b7",
    "!\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007\f\u0002\u0002\u00b9\u00ba",
    "\u0007\u0017\u0002\u0002\u00ba\u00bb\u0007\u0004\u0002\u0002\u00bb\u00bc",
    "\u0005&\u0014\u0002\u00bc#\u0003\u0002\u0002\u0002\u00bd\u00be\u0007",
    "\u000e\u0002\u0002\u00be\u00bf\u0007\u0004\u0002\u0002\u00bf\u00c6\u0005",
    "\u0014\u000b\u0002\u00c0\u00c3\u0007\u000f\u0002\u0002\u00c1\u00c2\u0007",
    "\u0004\u0002\u0002\u00c2\u00c4\u0007\u0017\u0002\u0002\u00c3\u00c1\u0003",
    "\u0002\u0002\u0002\u00c3\u00c4\u0003\u0002\u0002\u0002\u00c4\u00c6\u0003",
    "\u0002\u0002\u0002\u00c5\u00bd\u0003\u0002\u0002\u0002\u00c5\u00c0\u0003",
    "\u0002\u0002\u0002\u00c6%\u0003\u0002\u0002\u0002\u00c7\u00cb\b\u0014",
    "\u0001\u0002\u00c8\u00cc\u0007\u0017\u0002\u0002\u00c9\u00cc\u0007\u0016",
    "\u0002\u0002\u00ca\u00cc\u0005(\u0015\u0002\u00cb\u00c8\u0003\u0002",
    "\u0002\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cb\u00ca\u0003\u0002",
    "\u0002\u0002\u00cc\u00d9\u0003\u0002\u0002\u0002\u00cd\u00ce\f\u0004",
    "\u0002\u0002\u00ce\u00cf\u0007\u0010\u0002\u0002\u00cf\u00d8\u0007\u0011",
    "\u0002\u0002\u00d0\u00d3\f\u0003\u0002\u0002\u00d1\u00d2\u0007\u0012",
    "\u0002\u0002\u00d2\u00d4\u0005&\u0014\u0002\u00d3\u00d1\u0003\u0002",
    "\u0002\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5\u00d3\u0003\u0002",
    "\u0002\u0002\u00d5\u00d6\u0003\u0002\u0002\u0002\u00d6\u00d8\u0003\u0002",
    "\u0002\u0002\u00d7\u00cd\u0003\u0002\u0002\u0002\u00d7\u00d0\u0003\u0002",
    "\u0002\u0002\u00d8\u00db\u0003\u0002\u0002\u0002\u00d9\u00d7\u0003\u0002",
    "\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da\'\u0003\u0002",
    "\u0002\u0002\u00db\u00d9\u0003\u0002\u0002\u0002\u00dc\u00dd\t\u0002",
    "\u0002\u0002\u00dd)\u0003\u0002\u0002\u0002\u00de\u00df\u0007\u0014",
    "\u0002\u0002\u00df\u00e0\u0007\u0013\u0002\u0002\u00e0+\u0003\u0002",
    "\u0002\u0002\u00e1\u00e2\u0007\u0014\u0002\u0002\u00e2-\u0003\u0002",
    "\u0002\u0002\u001e5<ALNW[adhmu}\u0086\u008b\u008d\u0094\u009d\u00a6",
    "\u00aa\u00b1\u00b3\u00c3\u00c5\u00cb\u00d5\u00d7\u00d9"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'interface'", "':'", "'{'", "'}'", "'('", "')'", 
                     "'=>'", "'?'", "','", "'...'", "'='", "'requires'", 
                     "'throws'", "'['", "']'", "'|'", "';'", "'TODO'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      "ReservedWord", "RegexpLiteral", "BuiltinType", "Identifier", 
                      "Whitespace" ];

var ruleNames =  [ "file", "typeDeclaration", "minimalInterface", "nonMinimalInterface", 
                   "functionInterface", "functionSignature", "objectProperties", 
                   "functionSignatures", "parameters", "valueExpressions", 
                   "destructuredObject", "objectProperty", "objectSpreadProperty", 
                   "parameter", "namedParameter", "defaultValue", "spreadParameter", 
                   "functionTrailer", "type", "literalType", "predicateLiteral", 
                   "valueExpression" ];

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
RtypeParser.T__1 = 2;
RtypeParser.T__2 = 3;
RtypeParser.T__3 = 4;
RtypeParser.T__4 = 5;
RtypeParser.T__5 = 6;
RtypeParser.T__6 = 7;
RtypeParser.T__7 = 8;
RtypeParser.T__8 = 9;
RtypeParser.T__9 = 10;
RtypeParser.T__10 = 11;
RtypeParser.T__11 = 12;
RtypeParser.T__12 = 13;
RtypeParser.T__13 = 14;
RtypeParser.T__14 = 15;
RtypeParser.T__15 = 16;
RtypeParser.T__16 = 17;
RtypeParser.ReservedWord = 18;
RtypeParser.RegexpLiteral = 19;
RtypeParser.BuiltinType = 20;
RtypeParser.Identifier = 21;
RtypeParser.Whitespace = 22;

RtypeParser.RULE_file = 0;
RtypeParser.RULE_typeDeclaration = 1;
RtypeParser.RULE_minimalInterface = 2;
RtypeParser.RULE_nonMinimalInterface = 3;
RtypeParser.RULE_functionInterface = 4;
RtypeParser.RULE_functionSignature = 5;
RtypeParser.RULE_objectProperties = 6;
RtypeParser.RULE_functionSignatures = 7;
RtypeParser.RULE_parameters = 8;
RtypeParser.RULE_valueExpressions = 9;
RtypeParser.RULE_destructuredObject = 10;
RtypeParser.RULE_objectProperty = 11;
RtypeParser.RULE_objectSpreadProperty = 12;
RtypeParser.RULE_parameter = 13;
RtypeParser.RULE_namedParameter = 14;
RtypeParser.RULE_defaultValue = 15;
RtypeParser.RULE_spreadParameter = 16;
RtypeParser.RULE_functionTrailer = 17;
RtypeParser.RULE_type = 18;
RtypeParser.RULE_literalType = 19;
RtypeParser.RULE_predicateLiteral = 20;
RtypeParser.RULE_valueExpression = 21;

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

FileContext.prototype.typeDeclaration = function() {
    return this.getTypedRuleContext(TypeDeclarationContext,0);
};

FileContext.prototype.EOF = function() {
    return this.getToken(RtypeParser.EOF, 0);
};

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
        this.state = 44;
        this.typeDeclaration();
        this.state = 45;
        this.match(RtypeParser.EOF);
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

function TypeDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_typeDeclaration;
    return this;
}

TypeDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeDeclarationContext.prototype.constructor = TypeDeclarationContext;

TypeDeclarationContext.prototype.minimalInterface = function() {
    return this.getTypedRuleContext(MinimalInterfaceContext,0);
};

TypeDeclarationContext.prototype.nonMinimalInterface = function() {
    return this.getTypedRuleContext(NonMinimalInterfaceContext,0);
};

TypeDeclarationContext.prototype.functionInterface = function() {
    return this.getTypedRuleContext(FunctionInterfaceContext,0);
};

TypeDeclarationContext.prototype.functionSignature = function() {
    return this.getTypedRuleContext(FunctionSignatureContext,0);
};

TypeDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterTypeDeclaration(this);
	}
};

TypeDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitTypeDeclaration(this);
	}
};




RtypeParser.TypeDeclarationContext = TypeDeclarationContext;

RtypeParser.prototype.typeDeclaration = function() {

    var localctx = new TypeDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RtypeParser.RULE_typeDeclaration);
    try {
        this.state = 51;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 47;
            this.minimalInterface();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 48;
            this.nonMinimalInterface();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 49;
            this.functionInterface();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 50;
            this.functionSignature();
            break;

        }
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

function MinimalInterfaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_minimalInterface;
    return this;
}

MinimalInterfaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MinimalInterfaceContext.prototype.constructor = MinimalInterfaceContext;

MinimalInterfaceContext.prototype.Identifier = function() {
    return this.getToken(RtypeParser.Identifier, 0);
};

MinimalInterfaceContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

MinimalInterfaceContext.prototype.predicateLiteral = function() {
    return this.getTypedRuleContext(PredicateLiteralContext,0);
};

MinimalInterfaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterMinimalInterface(this);
	}
};

MinimalInterfaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitMinimalInterface(this);
	}
};




RtypeParser.MinimalInterfaceContext = MinimalInterfaceContext;

RtypeParser.prototype.minimalInterface = function() {

    var localctx = new MinimalInterfaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RtypeParser.RULE_minimalInterface);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(RtypeParser.T__0);
        this.state = 54;
        this.match(RtypeParser.Identifier);
        this.state = 58;
        switch(this._input.LA(1)) {
        case RtypeParser.T__1:
            this.state = 55;
            this.match(RtypeParser.T__1);
            this.state = 56;
            this.type(0);
            break;
        case RtypeParser.ReservedWord:
            this.state = 57;
            this.predicateLiteral();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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

function NonMinimalInterfaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_nonMinimalInterface;
    return this;
}

NonMinimalInterfaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NonMinimalInterfaceContext.prototype.constructor = NonMinimalInterfaceContext;

NonMinimalInterfaceContext.prototype.Identifier = function() {
    return this.getToken(RtypeParser.Identifier, 0);
};

NonMinimalInterfaceContext.prototype.objectProperties = function() {
    return this.getTypedRuleContext(ObjectPropertiesContext,0);
};

NonMinimalInterfaceContext.prototype.predicateLiteral = function() {
    return this.getTypedRuleContext(PredicateLiteralContext,0);
};

NonMinimalInterfaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterNonMinimalInterface(this);
	}
};

NonMinimalInterfaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitNonMinimalInterface(this);
	}
};




RtypeParser.NonMinimalInterfaceContext = NonMinimalInterfaceContext;

RtypeParser.prototype.nonMinimalInterface = function() {

    var localctx = new NonMinimalInterfaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RtypeParser.RULE_nonMinimalInterface);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.match(RtypeParser.T__0);
        this.state = 61;
        this.match(RtypeParser.Identifier);
        this.state = 76;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.state = 63;
            _la = this._input.LA(1);
            if(_la===RtypeParser.ReservedWord) {
                this.state = 62;
                this.predicateLiteral();
            }

            this.state = 65;
            this.match(RtypeParser.T__2);
            this.state = 66;
            this.objectProperties();
            this.state = 67;
            this.match(RtypeParser.T__3);
            break;

        case 2:
            this.state = 69;
            this.predicateLiteral();
            this.state = 74;
            _la = this._input.LA(1);
            if(_la===RtypeParser.T__2) {
                this.state = 70;
                this.match(RtypeParser.T__2);
                this.state = 71;
                this.objectProperties();
                this.state = 72;
                this.match(RtypeParser.T__3);
            }

            break;

        }
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

function FunctionInterfaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_functionInterface;
    return this;
}

FunctionInterfaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionInterfaceContext.prototype.constructor = FunctionInterfaceContext;

FunctionInterfaceContext.prototype.Identifier = function() {
    return this.getToken(RtypeParser.Identifier, 0);
};

FunctionInterfaceContext.prototype.functionSignatures = function() {
    return this.getTypedRuleContext(FunctionSignaturesContext,0);
};

FunctionInterfaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterFunctionInterface(this);
	}
};

FunctionInterfaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitFunctionInterface(this);
	}
};




RtypeParser.FunctionInterfaceContext = FunctionInterfaceContext;

RtypeParser.prototype.functionInterface = function() {

    var localctx = new FunctionInterfaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RtypeParser.RULE_functionInterface);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.match(RtypeParser.T__0);
        this.state = 79;
        this.match(RtypeParser.Identifier);
        this.state = 80;
        this.match(RtypeParser.T__2);
        this.state = 81;
        this.functionSignatures();
        this.state = 82;
        this.match(RtypeParser.T__3);
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

function FunctionSignatureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_functionSignature;
    return this;
}

FunctionSignatureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionSignatureContext.prototype.constructor = FunctionSignatureContext;

FunctionSignatureContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

FunctionSignatureContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RtypeParser.Identifier);
    } else {
        return this.getToken(RtypeParser.Identifier, i);
    }
};


FunctionSignatureContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

FunctionSignatureContext.prototype.functionTrailer = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctionTrailerContext);
    } else {
        return this.getTypedRuleContext(FunctionTrailerContext,i);
    }
};

FunctionSignatureContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterFunctionSignature(this);
	}
};

FunctionSignatureContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitFunctionSignature(this);
	}
};




RtypeParser.FunctionSignatureContext = FunctionSignatureContext;

RtypeParser.prototype.functionSignature = function() {

    var localctx = new FunctionSignatureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RtypeParser.RULE_functionSignature);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        _la = this._input.LA(1);
        if(_la===RtypeParser.Identifier) {
            this.state = 84;
            this.match(RtypeParser.Identifier);
        }

        this.state = 87;
        this.match(RtypeParser.T__4);
        this.state = 89;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RtypeParser.T__2) | (1 << RtypeParser.T__9) | (1 << RtypeParser.ReservedWord) | (1 << RtypeParser.RegexpLiteral) | (1 << RtypeParser.BuiltinType) | (1 << RtypeParser.Identifier))) !== 0)) {
            this.state = 88;
            this.parameters();
        }

        this.state = 91;
        this.match(RtypeParser.T__5);
        this.state = 92;
        this.match(RtypeParser.T__6);
        this.state = 98;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        if(la_===1) {
            this.state = 93;
            this.match(RtypeParser.Identifier);
            this.state = 95;
            _la = this._input.LA(1);
            if(_la===RtypeParser.T__7) {
                this.state = 94;
                this.match(RtypeParser.T__7);
            }

            this.state = 97;
            this.match(RtypeParser.T__1);

        }
        this.state = 100;
        this.type(0);
        this.state = 107;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 102;
                _la = this._input.LA(1);
                if(_la===RtypeParser.T__8) {
                    this.state = 101;
                    this.match(RtypeParser.T__8);
                }

                this.state = 104;
                this.functionTrailer(); 
            }
            this.state = 109;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
        }

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

function ObjectPropertiesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_objectProperties;
    return this;
}

ObjectPropertiesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectPropertiesContext.prototype.constructor = ObjectPropertiesContext;

ObjectPropertiesContext.prototype.objectProperty = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObjectPropertyContext);
    } else {
        return this.getTypedRuleContext(ObjectPropertyContext,i);
    }
};

ObjectPropertiesContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterObjectProperties(this);
	}
};

ObjectPropertiesContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitObjectProperties(this);
	}
};




RtypeParser.ObjectPropertiesContext = ObjectPropertiesContext;

RtypeParser.prototype.objectProperties = function() {

    var localctx = new ObjectPropertiesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, RtypeParser.RULE_objectProperties);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.objectProperty();
        this.state = 115;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RtypeParser.T__8) {
            this.state = 111;
            this.match(RtypeParser.T__8);
            this.state = 112;
            this.objectProperty();
            this.state = 117;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
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

function FunctionSignaturesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_functionSignatures;
    return this;
}

FunctionSignaturesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionSignaturesContext.prototype.constructor = FunctionSignaturesContext;

FunctionSignaturesContext.prototype.functionSignature = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctionSignatureContext);
    } else {
        return this.getTypedRuleContext(FunctionSignatureContext,i);
    }
};

FunctionSignaturesContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterFunctionSignatures(this);
	}
};

FunctionSignaturesContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitFunctionSignatures(this);
	}
};




RtypeParser.FunctionSignaturesContext = FunctionSignaturesContext;

RtypeParser.prototype.functionSignatures = function() {

    var localctx = new FunctionSignaturesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, RtypeParser.RULE_functionSignatures);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.functionSignature();
        this.state = 123;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RtypeParser.T__8) {
            this.state = 119;
            this.match(RtypeParser.T__8);
            this.state = 120;
            this.functionSignature();
            this.state = 125;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
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

function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.spreadParameter = function() {
    return this.getTypedRuleContext(SpreadParameterContext,0);
};

ParametersContext.prototype.parameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterContext);
    } else {
        return this.getTypedRuleContext(ParameterContext,i);
    }
};

ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitParameters(this);
	}
};




RtypeParser.ParametersContext = ParametersContext;

RtypeParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, RtypeParser.RULE_parameters);
    var _la = 0; // Token type
    try {
        this.state = 139;
        switch(this._input.LA(1)) {
        case RtypeParser.T__9:
            this.enterOuterAlt(localctx, 1);
            this.state = 126;
            this.spreadParameter();
            break;
        case RtypeParser.T__2:
        case RtypeParser.ReservedWord:
        case RtypeParser.RegexpLiteral:
        case RtypeParser.BuiltinType:
        case RtypeParser.Identifier:
            this.enterOuterAlt(localctx, 2);
            this.state = 127;
            this.parameter();
            this.state = 132;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 128;
                    this.match(RtypeParser.T__8);
                    this.state = 129;
                    this.parameter(); 
                }
                this.state = 134;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
            }

            this.state = 137;
            _la = this._input.LA(1);
            if(_la===RtypeParser.T__8) {
                this.state = 135;
                this.match(RtypeParser.T__8);
                this.state = 136;
                this.spreadParameter();
            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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

function ValueExpressionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_valueExpressions;
    return this;
}

ValueExpressionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueExpressionsContext.prototype.constructor = ValueExpressionsContext;

ValueExpressionsContext.prototype.valueExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueExpressionContext);
    } else {
        return this.getTypedRuleContext(ValueExpressionContext,i);
    }
};

ValueExpressionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterValueExpressions(this);
	}
};

ValueExpressionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitValueExpressions(this);
	}
};




RtypeParser.ValueExpressionsContext = ValueExpressionsContext;

RtypeParser.prototype.valueExpressions = function() {

    var localctx = new ValueExpressionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, RtypeParser.RULE_valueExpressions);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.valueExpression();
        this.state = 146;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 142;
                this.match(RtypeParser.T__8);
                this.state = 143;
                this.valueExpression(); 
            }
            this.state = 148;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
        }

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

function DestructuredObjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_destructuredObject;
    return this;
}

DestructuredObjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DestructuredObjectContext.prototype.constructor = DestructuredObjectContext;

DestructuredObjectContext.prototype.objectProperties = function() {
    return this.getTypedRuleContext(ObjectPropertiesContext,0);
};

DestructuredObjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterDestructuredObject(this);
	}
};

DestructuredObjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitDestructuredObject(this);
	}
};




RtypeParser.DestructuredObjectContext = DestructuredObjectContext;

RtypeParser.prototype.destructuredObject = function() {

    var localctx = new DestructuredObjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, RtypeParser.RULE_destructuredObject);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.match(RtypeParser.T__2);
        this.state = 150;
        this.objectProperties();
        this.state = 151;
        this.match(RtypeParser.T__3);
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

function ObjectPropertyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_objectProperty;
    return this;
}

ObjectPropertyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectPropertyContext.prototype.constructor = ObjectPropertyContext;

ObjectPropertyContext.prototype.parameter = function() {
    return this.getTypedRuleContext(ParameterContext,0);
};

ObjectPropertyContext.prototype.objectSpreadProperty = function() {
    return this.getTypedRuleContext(ObjectSpreadPropertyContext,0);
};

ObjectPropertyContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterObjectProperty(this);
	}
};

ObjectPropertyContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitObjectProperty(this);
	}
};




RtypeParser.ObjectPropertyContext = ObjectPropertyContext;

RtypeParser.prototype.objectProperty = function() {

    var localctx = new ObjectPropertyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, RtypeParser.RULE_objectProperty);
    try {
        this.state = 155;
        switch(this._input.LA(1)) {
        case RtypeParser.T__2:
        case RtypeParser.ReservedWord:
        case RtypeParser.RegexpLiteral:
        case RtypeParser.BuiltinType:
        case RtypeParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 153;
            this.parameter();
            break;
        case RtypeParser.T__9:
            this.enterOuterAlt(localctx, 2);
            this.state = 154;
            this.objectSpreadProperty();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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

function ObjectSpreadPropertyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_objectSpreadProperty;
    return this;
}

ObjectSpreadPropertyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectSpreadPropertyContext.prototype.constructor = ObjectSpreadPropertyContext;

ObjectSpreadPropertyContext.prototype.Identifier = function() {
    return this.getToken(RtypeParser.Identifier, 0);
};

ObjectSpreadPropertyContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterObjectSpreadProperty(this);
	}
};

ObjectSpreadPropertyContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitObjectSpreadProperty(this);
	}
};




RtypeParser.ObjectSpreadPropertyContext = ObjectSpreadPropertyContext;

RtypeParser.prototype.objectSpreadProperty = function() {

    var localctx = new ObjectSpreadPropertyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, RtypeParser.RULE_objectSpreadProperty);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
        this.match(RtypeParser.T__9);
        this.state = 158;
        this.match(RtypeParser.Identifier);
        this.state = 159;
        this.match(RtypeParser.T__7);
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

function ParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_parameter;
    return this;
}

ParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterContext.prototype.constructor = ParameterContext;

ParameterContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ParameterContext.prototype.namedParameter = function() {
    return this.getTypedRuleContext(NamedParameterContext,0);
};

ParameterContext.prototype.destructuredObject = function() {
    return this.getTypedRuleContext(DestructuredObjectContext,0);
};

ParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterParameter(this);
	}
};

ParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitParameter(this);
	}
};




RtypeParser.ParameterContext = ParameterContext;

RtypeParser.prototype.parameter = function() {

    var localctx = new ParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, RtypeParser.RULE_parameter);
    try {
        this.state = 164;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 161;
            this.type(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 162;
            this.namedParameter();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 163;
            this.destructuredObject();
            break;

        }
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

function NamedParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_namedParameter;
    return this;
}

NamedParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamedParameterContext.prototype.constructor = NamedParameterContext;

NamedParameterContext.prototype.Identifier = function() {
    return this.getToken(RtypeParser.Identifier, 0);
};

NamedParameterContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

NamedParameterContext.prototype.defaultValue = function() {
    return this.getTypedRuleContext(DefaultValueContext,0);
};

NamedParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterNamedParameter(this);
	}
};

NamedParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitNamedParameter(this);
	}
};




RtypeParser.NamedParameterContext = NamedParameterContext;

RtypeParser.prototype.namedParameter = function() {

    var localctx = new NamedParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, RtypeParser.RULE_namedParameter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.match(RtypeParser.Identifier);
        this.state = 177;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.state = 168;
            _la = this._input.LA(1);
            if(_la===RtypeParser.T__10) {
                this.state = 167;
                this.defaultValue();
            }

            this.state = 170;
            this.match(RtypeParser.T__1);
            this.state = 171;
            this.type(0);
            break;

        case 2:
            this.state = 172;
            this.defaultValue();
            this.state = 173;
            this.match(RtypeParser.T__1);
            this.state = 175;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RtypeParser.ReservedWord) | (1 << RtypeParser.RegexpLiteral) | (1 << RtypeParser.BuiltinType) | (1 << RtypeParser.Identifier))) !== 0)) {
                this.state = 174;
                this.type(0);
            }

            break;

        }
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

function DefaultValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_defaultValue;
    return this;
}

DefaultValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefaultValueContext.prototype.constructor = DefaultValueContext;

DefaultValueContext.prototype.literalType = function() {
    return this.getTypedRuleContext(LiteralTypeContext,0);
};

DefaultValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterDefaultValue(this);
	}
};

DefaultValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitDefaultValue(this);
	}
};




RtypeParser.DefaultValueContext = DefaultValueContext;

RtypeParser.prototype.defaultValue = function() {

    var localctx = new DefaultValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, RtypeParser.RULE_defaultValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.match(RtypeParser.T__10);
        this.state = 180;
        this.literalType();
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

function SpreadParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_spreadParameter;
    return this;
}

SpreadParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SpreadParameterContext.prototype.constructor = SpreadParameterContext;

SpreadParameterContext.prototype.Identifier = function() {
    return this.getToken(RtypeParser.Identifier, 0);
};

SpreadParameterContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

SpreadParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterSpreadParameter(this);
	}
};

SpreadParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitSpreadParameter(this);
	}
};




RtypeParser.SpreadParameterContext = SpreadParameterContext;

RtypeParser.prototype.spreadParameter = function() {

    var localctx = new SpreadParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, RtypeParser.RULE_spreadParameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this.match(RtypeParser.T__9);
        this.state = 183;
        this.match(RtypeParser.Identifier);
        this.state = 184;
        this.match(RtypeParser.T__1);
        this.state = 185;
        this.type(0);
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

function FunctionTrailerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_functionTrailer;
    return this;
}

FunctionTrailerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionTrailerContext.prototype.constructor = FunctionTrailerContext;

FunctionTrailerContext.prototype.valueExpressions = function() {
    return this.getTypedRuleContext(ValueExpressionsContext,0);
};

FunctionTrailerContext.prototype.Identifier = function() {
    return this.getToken(RtypeParser.Identifier, 0);
};

FunctionTrailerContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterFunctionTrailer(this);
	}
};

FunctionTrailerContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitFunctionTrailer(this);
	}
};




RtypeParser.FunctionTrailerContext = FunctionTrailerContext;

RtypeParser.prototype.functionTrailer = function() {

    var localctx = new FunctionTrailerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, RtypeParser.RULE_functionTrailer);
    var _la = 0; // Token type
    try {
        this.state = 195;
        switch(this._input.LA(1)) {
        case RtypeParser.T__11:
            this.enterOuterAlt(localctx, 1);
            this.state = 187;
            this.match(RtypeParser.T__11);
            this.state = 188;
            this.match(RtypeParser.T__1);
            this.state = 189;
            this.valueExpressions();
            break;
        case RtypeParser.T__12:
            this.enterOuterAlt(localctx, 2);
            this.state = 190;
            this.match(RtypeParser.T__12);
            this.state = 193;
            _la = this._input.LA(1);
            if(_la===RtypeParser.T__1) {
                this.state = 191;
                this.match(RtypeParser.T__1);
                this.state = 192;
                this.match(RtypeParser.Identifier);
            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;


 
TypeContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ArrayTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayTypeContext.prototype = Object.create(TypeContext.prototype);
ArrayTypeContext.prototype.constructor = ArrayTypeContext;

RtypeParser.ArrayTypeContext = ArrayTypeContext;

ArrayTypeContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};
ArrayTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterArrayType(this);
	}
};

ArrayTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitArrayType(this);
	}
};


function NonArrayTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NonArrayTypeContext.prototype = Object.create(TypeContext.prototype);
NonArrayTypeContext.prototype.constructor = NonArrayTypeContext;

RtypeParser.NonArrayTypeContext = NonArrayTypeContext;

NonArrayTypeContext.prototype.Identifier = function() {
    return this.getToken(RtypeParser.Identifier, 0);
};

NonArrayTypeContext.prototype.BuiltinType = function() {
    return this.getToken(RtypeParser.BuiltinType, 0);
};

NonArrayTypeContext.prototype.literalType = function() {
    return this.getTypedRuleContext(LiteralTypeContext,0);
};
NonArrayTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterNonArrayType(this);
	}
};

NonArrayTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitNonArrayType(this);
	}
};


function UnionTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnionTypeContext.prototype = Object.create(TypeContext.prototype);
UnionTypeContext.prototype.constructor = UnionTypeContext;

RtypeParser.UnionTypeContext = UnionTypeContext;

UnionTypeContext.prototype.type = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeContext);
    } else {
        return this.getTypedRuleContext(TypeContext,i);
    }
};
UnionTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterUnionType(this);
	}
};

UnionTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitUnionType(this);
	}
};



RtypeParser.prototype.type = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new TypeContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 36;
    this.enterRecursionRule(localctx, 36, RtypeParser.RULE_type, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new NonArrayTypeContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 201;
        switch(this._input.LA(1)) {
        case RtypeParser.Identifier:
            this.state = 198;
            this.match(RtypeParser.Identifier);
            break;
        case RtypeParser.BuiltinType:
            this.state = 199;
            this.match(RtypeParser.BuiltinType);
            break;
        case RtypeParser.ReservedWord:
        case RtypeParser.RegexpLiteral:
            this.state = 200;
            this.literalType();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 215;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 213;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ArrayTypeContext(this, new TypeContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, RtypeParser.RULE_type);
                    this.state = 203;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 204;
                    this.match(RtypeParser.T__13);
                    this.state = 205;
                    this.match(RtypeParser.T__14);
                    break;

                case 2:
                    localctx = new UnionTypeContext(this, new TypeContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, RtypeParser.RULE_type);
                    this.state = 206;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 209; 
                    this._errHandler.sync(this);
                    var _alt = 1;
                    do {
                    	switch (_alt) {
                    	case 1:
                    		this.state = 207;
                    		this.match(RtypeParser.T__15);
                    		this.state = 208;
                    		this.type(0);
                    		break;
                    	default:
                    		throw new antlr4.error.NoViableAltException(this);
                    	}
                    	this.state = 211; 
                    	this._errHandler.sync(this);
                    	_alt = this._interp.adaptivePredict(this._input,25, this._ctx);
                    } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
                    break;

                } 
            }
            this.state = 217;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function LiteralTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_literalType;
    return this;
}

LiteralTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralTypeContext.prototype.constructor = LiteralTypeContext;

LiteralTypeContext.prototype.RegexpLiteral = function() {
    return this.getToken(RtypeParser.RegexpLiteral, 0);
};

LiteralTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterLiteralType(this);
	}
};

LiteralTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitLiteralType(this);
	}
};




RtypeParser.LiteralTypeContext = LiteralTypeContext;

RtypeParser.prototype.literalType = function() {

    var localctx = new LiteralTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, RtypeParser.RULE_literalType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        _la = this._input.LA(1);
        if(!(_la===RtypeParser.ReservedWord || _la===RtypeParser.RegexpLiteral)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
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

function PredicateLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_predicateLiteral;
    return this;
}

PredicateLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PredicateLiteralContext.prototype.constructor = PredicateLiteralContext;


PredicateLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterPredicateLiteral(this);
	}
};

PredicateLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitPredicateLiteral(this);
	}
};




RtypeParser.PredicateLiteralContext = PredicateLiteralContext;

RtypeParser.prototype.predicateLiteral = function() {

    var localctx = new PredicateLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, RtypeParser.RULE_predicateLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 220;
        this.match(RtypeParser.ReservedWord);
        this.state = 221;
        this.match(RtypeParser.T__16);
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

function ValueExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RtypeParser.RULE_valueExpression;
    return this;
}

ValueExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueExpressionContext.prototype.constructor = ValueExpressionContext;


ValueExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.enterValueExpression(this);
	}
};

ValueExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RtypeListener ) {
        listener.exitValueExpression(this);
	}
};




RtypeParser.ValueExpressionContext = ValueExpressionContext;

RtypeParser.prototype.valueExpression = function() {

    var localctx = new ValueExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, RtypeParser.RULE_valueExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 223;
        this.match(RtypeParser.ReservedWord);
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


RtypeParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 18:
			return this.type_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

RtypeParser.prototype.type_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.RtypeParser = RtypeParser;
