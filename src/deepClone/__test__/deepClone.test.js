import deepClone from '../index'

const obj = {
  numberObj: new Number(1),
  number: 2,
  stringObj: new String('string'),
  string: 'string',
  regexpObj: new RegExp('\\w'),
  regexp: /w+/g,
  booleanObj: new Boolean(false),
  boolean: false,
  date: new Date(),
  fn () {
    return `${this.string}: ${this.number}`
  },
  arr: [{a: 1},2,3]
}


const newObj = deepClone(obj)


describe('test deepClone', () => {
  
  test('test 两个对象', () => {
    expect(newObj).not.toBe(obj)
  })
    
  test('test 属性为引用类型', () => {
    expect(newObj.numberObj).not.toBe(obj.numberObj)
    expect(newObj.stringObj).not.toBe(obj.stringObj)
    expect(newObj.booleanObj).not.toBe(obj.booleanObj)
    expect(newObj.regexpObj).not.toBe(obj.regexpObj)
  })

  test('test 其他', () => {
    expect(newObj.fn).not.toBe(obj.fn)
    expect(newObj.date).not.toBe(obj.date)
    expect(newObj.arr).not.toBe(obj.arr)
  })


})
