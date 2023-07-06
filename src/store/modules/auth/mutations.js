export default {
    updateUserInfo(state, payload) {
        state.info.email = payload.email
        state.userId = payload.localId
        state.token = payload.idToken
        state.expire = payload.expiresIn

    },
    keepLogin(state, payload) {
        state.token = payload.token
    },

    updateProfileInfo(state, payload) {
        state.info.email = payload.email
        state.info.firstname = payload.firstname
        state.info.lastname = payload.lastname
        state.info.username = payload.username
    }
}
