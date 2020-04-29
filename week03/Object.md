JavaScript | 语句，对象
根据课上老师的示范，找出 JavaScript 标准里所有的对象，分析有哪些对象是我们无法实现出来的，这些对象都有哪些特性？写一篇文章，放在学习总结里。

##  Ordinary Object Internal Methods and Internal Slots
##### GetPrototypeOf
	Object.getPrototypeOf(object) 返回指定对象的原型
	在 ES5 中，如果参数不是一个对象类型，将抛出一个TypeError异常。在 ES2015 中，参数会被强制转换为一个 Object。
	Object.getPrototypeOf('foo');
	// TypeError: "foo" is not an object (ES5 code)
	Object.getPrototypeOf('foo');
	// String.prototype 
  OrdinaryGetPrototypeOf

> When the abstract operation OrdinaryGetPrototypeOf is called with Object *O*, the following steps are taken: 
>
> 1. Return *O*.[[Prototype]]

##### SetPrototypeOf
  

```
Object.setPrototypeOf(obj, prototype) 方法设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null。
```


  OrdinarySetPrototypeOf 

##### IsExtensible
  

```
Object.isExtensible(obj) 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。 返回值是boolean
```


  OrdinaryIsExtensible

##### PreventExtensions

```
Object.preventExtensions()方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。
```

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