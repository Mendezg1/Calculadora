import {describe, expect} from 'vitest'
import { reset } from './resetFunction'

describe('Resets Correctly', () =>{
    it('AC Function Works', () =>{
        const span1 = document.createElement('span')
        span1.id = 'inputspan'
        document.body.append(span1)
        const span2 = document.createElement('span')
        span2.id = 'outputspan'
        document.body.append(span2)
        const node1 = document.createTextNode('1')
        const node2 = document.createTextNode('2')
        span1.appendChild(node1)
        span1.appendChild(node2)
        reset()
        expect(span1.lastChild.nodeValue).toEqual("")
    })
})