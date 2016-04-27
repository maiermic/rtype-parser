module.exports = {
  literals: {
    'paren.lparen': ['(', '{', '['],
    'paren.rparen': [')', '}', ']'],
    'punctuation.operator': [',', ';', ':'],
    'keyword.operator': ['=>', '=', '?', '...', '|'],
    'keyword': ['interface', 'requires', 'throws']
  },
  symbols: {
    'storage.type': 'BuiltinType',
    'identifier': 'Identifier',
    'keyword': 'ReservedWord',
    'string.regexp': 'RegexpLiteral'
  }
};