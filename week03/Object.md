JavaScript | 语句，对象
根据课上老师的示范，找出 JavaScript 标准里所有的对象，分析有哪些对象是我们无法实现出来的，这些对象都有哪些特性？写一篇文章，放在学习总结里。
##  Ordinary Object Internal Methods and Internal Slots
##### GetPrototypeOf
  OrdinaryGetPrototypeOf
##### SetPrototypeOf
  OrdinarySetPrototypeOf 
##### IsExtensible
  OrdinaryIsExtensible
##### PreventExtensions
  OrdinaryPreventExtensions
##### GetOwnProperty
  OrdinaryGetOwnProperty
##### DefineOwnProperty
  OrdinaryDefineOwnProperty
  IsCompatiblePropertyDescriptor
  ValidateAndApplyPropertyDescriptor
##### HasProperty
  OrdinaryHasProperty
##### Get  
  OrdinaryGet
##### Set
  OrdinarySet
  OrdinarySetWithOwnDescriptor
##### Delete
  OrdinaryDelete
##### OwnPropertyKeys
  OrdinaryOwnPropertyKeys
##### ObjectCreate
##### OrdinaryCreateFromConstructor
##### GetPrototypeFromConstructor 
##  ECMAScript Function Objects
##### Call
  PrepareForOrdinaryCall
  OrdinaryCallBindThis
  OrdinaryCallEvaluateBody
##### Construct
##### FunctionAllocate
##### FunctionInitialize
##### FunctionCreate
##### GeneratorFunctionCreate
##### AsyncGeneratorFunctionCreate
##### AsyncFunctionCreate
##### AddRestrictedFunctionProperties
  ThrowTypeError
##### MakeConstructor
##### MakeClassConstructor
##### MakeMethod
##### SetFunctionName
##### SetFunctionLength
##### FunctionDeclarationInstantiation
##  Built-in Function Objects
##### Call
##### Construct
##### CreateBuiltinFunction
##  Built-in Exotic Object Internal Methods and Slots
### 1.Bound Function Exotic Objects
##### Call
##### Construct
##### BoundFunctionCreate
### 2.Array Exotic Objects
##### DefineOwnProperty
##### ArrayCreate
##### ArraySpeciesCreate
##### ArraySetLength
### 3.String Exotic Objects
##### GetOwnProperty
##### DefineOwnProperty
##### OwnPropertyKeys
##### StringCreate
##### StringGetOwnProperty
### 4.Arguments Exotic Objects
##### GetOwnProperty
##### DefineOwnProperty
##### Get
##### Set
##### Delete
##### CreateUnmappedArgumentsObject
##### CreateMappedArgumentsObject
  MakeArgGetter
  MakeArgSetter
### 5.Integer-Indexed Exotic Objects
##### GetOwnProperty
##### HasProperty
##### DefineOwnProperty
##### Get
##### Set
##### OwnPropertyKeys
##### IntegerIndexedObjectCreate
##### IntegerIndexedElementGet
##### IntegerIndexedElementSet
### 6.Module Namespace Exotic Objects
##### SetPrototypeOf
##### IsExtensible
##### PreventExtensions
##### GetOwnProperty
##### DefineOwnProperty
##### HasProperty
##### Get
##### Set
##### Delete
##### OwnPropertyKeys
ModuleNamespaceCreate
### 7.Immutable Prototype Exotic Objects
##### SetPrototypeOf
##### SetImmutablePrototype
## Proxy Object Internal Methods and Internal Slots
##### GetPrototypeOf
##### SetPrototypeOf
##### IsExtensible
##### PreventExtensions
##### GetOwnProperty
##### DefineOwnProperty
##### HasProperty
##### Get
##### Set
##### Delete
##### OwnPropertyKeys
##### Call
##### Construct