import authReducer from '../../actions/auth'

test("Should set uid for login " , () => {
    const loginActionObject = {
        type : 'Login',
        uid : '1abc'
    }
    const result = authReducer({}, loginActionObject);
    expect(result.uid).toBe(loginActionObject.uid);
})

test("Should set uid for logout", () => {
    const logoutActionObject = {
        type : 'Logout'
    }
    const result = authReducer( { uid : 'any'}, logoutActionObject);
    expect(result).toEqual({});
});