export default {
    deleteCard(context, cardId) {
        context.commit('deleteCard', cardId)
    }
}