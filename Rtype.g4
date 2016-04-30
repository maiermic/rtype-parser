grammar Rtype;

file
    : typeDeclaration EOF
    ;

typeDeclaration
    : minimalInterface
    | nonMinimalInterface
    | functionInterface
    | functionSignature
    ;

// ------------
// Entry Points
// ------------

minimalInterface
    : 'interface' Identifier
        ( ':' type
        | predicateLiteral
        )
    ;

nonMinimalInterface
    : 'interface' Identifier
        ( predicateLiteral? '{' objectProperties '}'
        | predicateLiteral ('{' objectProperties '}')?
        )
    ; // interface has one or both but never neither

functionInterface
    : 'interface' Identifier '{' functionSignatures '}' ;

functionSignature
    : Identifier? '(' parameters? ')' '=>'
        (Identifier '?'? ':')? type (','? functionTrailer)*
    ; // parser should confirm semantics, allow 1 of each function trailer


// -----------------------------
// Non-Terminal Production Rules
// -----------------------------

// Repeaters (length >= 1)

objectProperties
    : objectProperty ( ',' objectProperty )* ;

functionSignatures
    : functionSignature ( ',' functionSignature )* ;

parameters
    : spreadParameter
    | parameter ( ',' parameter )* ( ',' spreadParameter )?
    ;

// Note: inspired by ES2015 FormalParameterList: http://www.ecma-international.org/ecma-262/6.0/index.html#sec-function-definitions

ReservedWord
    : 'TODO'    // set of JavaScript and rtype reservedWords
    ;

valueExpressions
    : valueExpression ( ',' valueExpression )*
    ;

// Objects

destructuredObject
    : '{' objectProperties '}' ;

objectProperty
    : parameter
    | objectSpreadProperty
    ;

objectSpreadProperty
    : '...' Identifier '?' ;

// Parameters

parameter
    : type
    | namedParameter
    | destructuredObject
    ;

namedParameter
    : Identifier
        ( defaultValue? ':' type
        | defaultValue ':' type?
        )
    ; // named parameter has one or both but never neither

defaultValue
    : '=' literalType
    ;

spreadParameter
    : '...' Identifier ':' type     // manually check necessary that type is arrayType
    ;

functionTrailer
    : 'requires' ':' valueExpressions
    | 'throws' ( ':' Identifier )?
    ;

// Types

type
    : ( Identifier | BuiltinType | literalType )    # nonArrayType
    | type '[' ']'                                  # arrayType
    | type ( '|' type )+                            # unionType
    ;

// ----------------------------------------
// Terminal Production Rules and JavaScript
// ----------------------------------------

literalType
    : 'TODO'    // TODO set of JavaScript-legal literal values
    | RegexpLiteral
    ;

predicateLiteral
    : 'TODO' ';'    // TODO JavaScript-legal arrow function
    ;

RegexpLiteral
    : '/' 'TODO' '/'    // TODO JavaScript-legal Regular Expression characters
    ;

BuiltinType
    : 'Any'
    | 'Array'
    | 'Boolean'
    | 'Function'
    | 'Number'
    | 'Object'
    | 'String'
    | 'Void'
    | 'Predicate'
    ;

Identifier
    : IdentifierCharacter+
    ;

fragment
IdentifierCharacter
    : [a-zA-Z]    // TODO set of JavaScript-legal identifierCharacters
    ;

valueExpression
    : 'TODO'    // JavaScript-legal variable, dot-property or array-access
    ; // e.g. document, navigator.geolocation, String.prototype.trim

Whitespace
    : [ \t\n\r]+ -> skip
    ;