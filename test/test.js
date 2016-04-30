const antlr4 = require('antlr4');
const assert = require('chai').assert;
const SyntaxErrorListener = require('./SyntaxErrorListener');
const RtypeLexer = require('../parser/RtypeLexer').RtypeLexer;
const RtypeParser = require('../parser/RtypeParser').RtypeParser;


function isSyntacticallyCorrect(input) {
  // create parser and lexer
  var stream = new antlr4.InputStream(input);
  var lexer = new RtypeLexer(stream);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new RtypeParser(tokens);
  // add error listener
  var listener = new SyntaxErrorListener();
  lexer.removeErrorListeners();
  lexer.addErrorListener(listener);
  parser.removeErrorListeners();
  parser.addErrorListener(listener);
  // parse
  parser.file();
  return listener.isSyntacticallyCorrect;
}

module.exports = {
  'syntactically correct': function () {
    assert.isTrue(isSyntacticallyCorrect('(Number) => Number'));
  },
  'syntax error': function () {
    assert.isFalse(isSyntacticallyCorrect('(Number => Number'));
  }
};