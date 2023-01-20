import {describe, test, expect} from '@jest/globals'
import { User } from './user'

describe('testing get fuction of users', ()=>{
    const user = new User({id : '312312312', name : 'Jorge', email : 'jorge@email'})

    test('testing get id', ()=>{
        expect(user.id).toBe('312312312')
    })

    test('testing get name',()=>{
        expect(user.name).toBe('Jorge')
    })

    test('testing get email',()=>{
        expect(user.email).toBe('jorge@email')
    })
})

describe('testing set functions of user', ()=>{
    const user = new User({id : '312312312', name : 'Jorge', email : 'jorge@email'})
    test('set name cannot be empty',()=>{
        user.name = ''
        expect(user.name).toBe('Jorge')
    })

    test('set email cannot be empty',()=>{
        user.email = ''
        expect(user.email).toBe('jorge@email')
    })

    test('set email must be an email',()=>{
        user.email = 'paulo@email'
        expect(user.email).toBe('paulo@email')
    })


})