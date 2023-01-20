import {describe, test, expect} from '@jest/globals'
import { Monkey } from './monkey'

describe('testing getting monkey', ()=>{
    
    const monkey = new Monkey({id: '321312312', name: 'Alessandro', price: 50.0})

    test('get id',()=>{
        expect(monkey.id).toBe('321312312')
    })

    test('get name',()=>{
        expect(monkey.name).toBe('Alessandro')
    })

    test('get price', ()=>{
        expect(monkey.price).toBe(50.0)
    })
})

describe('testing setting monkey', ()=>{
    
    const monkey = new Monkey({id: '321312312', name: 'Alessandro', price: 50.0})

    test('set name should not accept empty values',()=>{
        function makeNameNull() : string{
            monkey.name = ''
            return monkey.name
        }
        expect(makeNameNull()).toBe('Alessandro')
    })

    test('set price cannot be zero or less', ()=>{
        function makeItNegative() : number{
            monkey.price = -1
            return monkey.price
        }
        expect(makeItNegative()).toBe(50.0)
    })
})

describe('testing condition to create a monkey', ()=>{
    it('should not accept values lowers or equals than 0 in price', ()=>{
        expect(()=>{
            const  monkey =  new Monkey({id: '321312312', name: 'Alessandro', price: 0})
        }).toThrow()
    })
})