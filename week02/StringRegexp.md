### StringLiteral ::

​	" DoubleStringCharactersopt " 
​	' SingleStringCharactersopt '

### DoubleStringCharacters ::

​	DoubleStringCharacter DoubleStringCharactersopt

### SingleStringCharacters ::

​	SingleStringCharacter SingleStringCharactersopt

### DoubleStringCharacter ::

​	SourceCharacter but not one of " or \ or LineTerminator
​	<LS>  ^\0x2028 $
​	<PS>  ^\0x2029 $
​	\ EscapeSequence
​	LineContinuation

### SingleStringCharacter ::

​	SourceCharacter but not one of ' or \ or LineTerminator
​	<LS>
​	<PS>
​	\ EscapeSequence
​	LineContinuation

### LineContinuation ::

​	\ LineTerminatorSequence

### EscapeSequence ::

​	CharacterEscapeSequence
​	0 [lookahead ∉ DecimalDigit]
​	HexEscapeSequence
​	UnicodeEscapeSequence

### CharacterEscapeSequence ::

​	SingleEscapeCharacter
​	NonEscapeCharacter

### SingleEscapeCharacter :: one of

​	' " \ b f n r t v

   ^['"\\bfnrtv]$

### NonEscapeCharacter ::

​	SourceCharacter but not one of EscapeCharacter or LineTerminator
	^\u{0}-\u{10ffff}$

### EscapeCharacter ::

​	SingleEscapeCharacter
​	DecimalDigit
​	x
	u
	^['"\\bfnrtv\dxu]$

### HexEscapeSequence ::

​	x HexDigit HexDigit
	^x[0-9a-fA-F]{2}$

### UnicodeEscapeSequence ::

​	u Hex4Digits  
    ^u[0-9a-fA-F]{4}$
​	u{ CodePoint }
	^u\{(10|0?[0-9a-fA-F])[0-9a-fA-F]{4}\}$

### Hex4Digits ::

​	HexDigit HexDigit HexDigit HexDigit
	^[0-9a-fA-F]{4}$