export default {
    updateUserInfo(state, payload) {
        state.email = payload.email
        state.userId = payload.localId
        state.token = payload.idToken
        state.expire = payload.expiresIn

    },
}
