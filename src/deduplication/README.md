# deduplication
去重函数 一组数据，根据元素的某个key进行去重

### 使用方法

```javascript
  // 根据某个字段去重
  const a = [
    { name: "lisheng", age: 12 },
    { name: "wangqian", age: 13 }, 
    { name: "lisheng", age: 14 }
  ]
  const key = "name"
  deduplication(a, key) // 返回：[{ name: "lisheng", age: 12 }, { name: "wangqian", age: 13 }]
```
