# week2总结

### 编程语言通识

#### 按语法分类

##### 1.非形式语言

中文

##### 2.形式语言

- 0型: 无限制文法

  等号左边不止一个 <a><b> ::= "c"

- 1型: 上下文相关文法

  "a"<b>"c"::="a""x""c"

- 2型: 上下文无关文法

  js, 大部分情况是上下文无关

- 3型: 正则文法

  限制表达能力

#### 图灵完备性

##### 1.命令式

goto

if...while

##### 2.声明式

递归

分治

### Javascript

#### inputElement

##### WhiteSpace

- <TAB> 
- <VT> 
- <FF> 
- <SP> 
- <NBSP> 
- <ZWNBSP> 
- <USP> 

##### LineTerminator

- <LF> 
- <CR> 
- <LS> 
- <PS> 

##### Comment  注释

##### Token

- IdentifierName 标识符
- *Punctuator*  符号，用于构成代码的结构
- *NumericLiteral* 
- *StringLiteral* 
- *Template* 

#### Type

##### Number

浮点数比较: Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON

`97 .toString(2)`

##### String

##### Boolean

##### Null

##### Undifined

##### Symbol

