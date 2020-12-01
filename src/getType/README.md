# getType
判断变量的类型

### 使用方法
```javascript
  console.log(getType()) // Undefined
  console.log(getType(1)) // Number
  console.log(getType("1")) // String
  console.log(getType(true)) // Boolean
  console.log(getType([])) // Array
  console.log(getType({})) // Object
  console.log(getType(() => {})) // Function
```