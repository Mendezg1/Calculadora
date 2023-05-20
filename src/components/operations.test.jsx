import { sum,dif,div,mult,mod } from './operations.jsx'
import {describe, expect} from 'vitest'

const num1 = 10
const num2 = 5

describe('Operates Correctrly', () =>{
    it('Sums Correctly',() => {
        expect(sum(num1,num2)).toEqual(15)
    })
    it('Difs Correctly',() => {
        expect(dif(num1,num2)).toEqual(5)
    })
    it('Mults Correctly',() => {
        expect(mult(num1,num2)).toEqual(50)
    })
    it('Divs Correctly',() => {
        expect(div(num1,num2)).toEqual(2)
    })
    it('Mods Correctly',() => {
        expect(mod(num1,num2)).toEqual(0)
    })
    it('Excepts Correctly Div by 0', () =>{
        expect(div(num1,0)).toEqual('ERROR.')
    })
    it('Excepts Correctly negatives', () =>{
        expect(sum(num1,-100)).toEqual('ERROR.')
        expect(dif(num2,num1)).toEqual('ERROR.')
        expect(mult(num1,-1)).toEqual('ERROR.')
        expect(div(-1,num2)).toEqual('ERROR.')
    })
})
