import {mult, SplitIntoWords, sum} from './01'
let a: number
let b: number
let c: number
// Перед каждым тестом выполни вот эту функцию
beforeEach( () => {
  a = 1
  b = 2
  c = 3
})

test('mult should be correct', () => {

//data
    a = 100

// action
    const result1 = mult(a, b)
    const result2 = mult(b, c)

//expect result
    expect(result1).toBe(200)
    expect(result2).toBe(6)
})
test('sum should be correct', () => {

//data
// action
    const result1 = sum(a, b)
    const result2 = sum(b, c)

//expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test('splitting into words should be correct', () => {
    //data
    let sent1 = 'Hello my friends'
    let sent2 = 'JS - the best   programming language'

//action
    const result1 = SplitIntoWords(sent1)
    const result2 = SplitIntoWords(sent2)
    //expect
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('the')
    expect(result2[2]).toBe('best')
    expect(result2[3]).toBe('programming')
    expect(result2[4]).toBe('language')
})
