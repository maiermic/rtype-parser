'use strict';

const antlr4 = require('antlr4');

class SyntaxErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.reset();
  }

  reset() {
    this.isSyntacticallyCorrect = true;
  }

  syntaxError() {
    this.isSyntacticallyCorrect = false;
  }
}

module.exports = SyntaxErrorListener;