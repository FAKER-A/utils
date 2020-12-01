import deduplication from "../index"

describe("deduplication", () => {
  test("参数一非法", () => {
    let a
    expect(deduplication(a, "key")).toBe(a)
  })
  test("参数二非法", () => {
    let key
    let a
    expect(deduplication(a, key)).toBe(a)
  })
  test("参数均合法", () => {
    let a = [{ name: "lisheng", age: 11 }, { name: "wangdaqian", age: 12 }, { name: "lisheng", age: 12 }]
    let key = "name"
    expect(deduplication(a, key)).toEqual([{name: "lisheng", age: 11 }, { name: "wangdaqian", age: 12 }])
  })
})