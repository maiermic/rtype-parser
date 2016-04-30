'use strict';

const fs = require('fs');
const path = require('path');
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

function createTests(directory, createTest) {
  return fs.readdirSync(directory)
    .reduce((tests, filename) => {
      let file = `${directory}/${filename}`;
      let stat = fs.statSync(file);
      if (stat && stat.isDirectory()) {
        tests[filename] = createTests(file, createTest);
      } else {
        let fileContent = fs.readFileSync(file, 'utf-8');
        let testName = path.basename(filename, path.extname(filename));
        tests[testName] = createTest(fileContent);
      }
      return tests;
    }, {});
}

module.exports = {
  'syntactically correct': createTests(
    './test/data/syntactically-correct',
    fileContent => () => assert.isTrue(isSyntacticallyCorrect(fileContent))
  ),
  'syntax error': createTests(
    './test/data/syntax-error',
    fileContent => () => assert.isFalse(isSyntacticallyCorrect(fileContent))
  )
};