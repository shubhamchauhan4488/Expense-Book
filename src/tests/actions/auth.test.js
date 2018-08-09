import { login, logout } from '../../actions/auth'

test("Should create login action object" , () => {
    const result = login('123asd');
    expect(result).toEqual({
        type : 'Login',
        uid: '123asd'
    })
})

test("Should create logout action object" , () => {
    const result = logout();
    expect(result).toEqual({
        type : 'Logout'
    })
})
