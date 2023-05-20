import {describe, expect} from 'vitest'
import { deleteLast } from './delFunction'


describe('Deletes correctly', () =>{
    it('DEL Function Works', () =>{
        const span = document.createElement('span')
        span.id = 'inputspan'
        document.body.append(span)
        const node1 = document.createTextNode('1')
        const node2 = document.createTextNode('2')
        span.appendChild(node1)
        span.appendChild(node2)
        deleteLast()
        expect(span.childNodes.length).toEqual(1)
        })
})