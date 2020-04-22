# NumericLiteral ::

​	^(((\.\d+|(0|[1-9]\d*))|((0|[1-9]\d*)\.?\d*))([e|E]\-?[1-9]\d*)?)$|^0[b|B][0-1]+$|^0[o|O][0-7]+$|^0[x|X][0-9a-fA-F]+$

## 	DecimalLiteral

### 		DecimalLiteral ::

​			DecimalIntegerLiteral . DecimalDigitsopt ExponentPartopt
​			. DecimalDigits ExponentPartopt
​			DecimalIntegerLiteral ExponentPartopt
​			^(((\.\d+|(0|[1-9]\d*))|((0|[1-9]\d*)\.?\d*))([e|E]\-?[1-9]\d*)?)$

### 		DecimalIntegerLiteral ::

​			0
​			NonZeroDigit DecimalDigits
​			^\0|[1-9][0-9]*$
​			^\0|[1-9]\d*$

### 		DecimalDigits ::

​			DecimalDigit
​			DecimalDigits DecimalDigit	
​			^\d+$

### 		DecimalDigit :: one of

​			0 1 2 3 4 5 6 7 8 9
​			^\d$

### 		NonZeroDigit :: one of

​			1 2 3 4 5 6 7 8 9
​			^\[1-9]$

### 		ExponentPart ::

​			ExponentIndicator SignedInteger	
​			^[e|E]\-?[1-9]\d*$

### 		ExponentIndicator :: one of

​			e E	
​			^[e|E]$

### 		SignedInteger ::

​			DecimalDigits
​			+ DecimalDigits
​			- DecimalDigits
​			^[-|+]?\d+$

## 	BinaryIntegerLiteral		

### 		BinaryIntegerLiteral ::

​			0b BinaryDigits
​			0B BinaryDigits
​			^0[b|B][0-1]+$

### 		BinaryDigits ::

​			BinaryDigit
​			BinaryDigits BinaryDigit
​			^[0-1]+$

### 		BinaryDigit :: one of

​			0 1
​			^[0-1]$

## 	OctalIntegerLiteral		

### 		OctalIntegerLiteral ::

​			0o OctalDigits
​			0O OctalDigits
​			^0[o|O][0-7]+$

### 		OctalDigits ::

​			OctalDigit
​			OctalDigits OctalDigit
​			^[0-7]+$

### 		OctalDigit :: one of

​			0 1 2 3 4 5 6 7
​			^[0-7]$

## 	HexIntegerLiteral		

### 		HexIntegerLiteral ::

​			0x HexDigits
​			0X HexDigits
​			^0[x|X][0-9a-fA-F]+$

### 		HexDigits ::

​			HexDigit
​			HexDigits HexDigit
​			^[0-9a-fA-F]+$

### 		HexDigit :: one of

​			0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F
​			^[0-9a-fA-F]$

  