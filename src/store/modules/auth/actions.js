export default {
    async signup(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB8U-YZKefXKQ5q6Rsr-ffZ0c6O_Lz-nd0', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        })
        if (response.status !== 200) {
            const error = new Error('Fail to signup. May be account is existed')
            throw error
        }
    },

    async login(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB8U-YZKefXKQ5q6Rsr-ffZ0c6O_Lz-nd0', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        })
        const userInfo = await response.json()
        if (response.status !== 200) {
            const error = new Error('Wrong email or password. Try again.')
            throw error
        } else {
            localStorage.setItem('token', userInfo.idToken)
            context.commit('updateUserInfo', userInfo)

        }
    },

    logout(context) {
        localStorage.removeItem('token')
        context.commit('updateUserInfo', {email: '', token: '', userId: '', expire: ''})
    },

    keepLogin(context) {
        const token = localStorage.getItem('token')
        context.commit('keepLogin', {token: token})
    },

    updateProfileInfo(context, userInfo) {
        context.commit('updateProfileInfo', userInfo)
    }
}